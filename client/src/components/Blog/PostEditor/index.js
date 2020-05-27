// @flow
import React, { Component } from 'react';
import type { EditorState } from 'draft-js';
import { RichUtils } from 'draft-js';
import { withRouter } from 'react-router-dom';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import debounce from 'lodash/debounce';

import draftPlugins from '../DraftPlugins';
import 'draft-js-emoji-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css';
import '../../../style/components/Blog/PostEditor.Module.scss';
import 'draft-js/dist/Draft.css';

import type { PostEditorType } from '../../../types/component';

const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;

class PostEditor extends Component<PostEditorType> {
  saveOnServer = debounce((editorState: EditorState) => {
    const { saveDraftContent, id } = this.props;
    saveDraftContent(id, editorState);
  }, 3000);

  componentDidMount() {
    const { history } = this.props;
    history.listen(() => {
      this.saveOnServer.cancel();
    });
  }

  onChange = (editorState: EditorState) => {
    const { updateEditorState } = this.props;
    updateEditorState(editorState);
    if (editorState.getCurrentContent().hasText()) {
      this.saveOnServer(editorState);
    }
  };

  handleKeyCommand = (command: string): string => {
    const { editorState } = this.props;
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  onButtonClick = (e: SyntheticMouseEvent<>, style: string) => {
    e.preventDefault();
    const { editorState } = this.props;
    this.onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  onToggleCode = () => {
    const { editorState } = this.props;
    this.onChange(RichUtils.toggleCode(editorState));
  };

  handlePostBlogPost = () => {
    this.saveOnServer.cancel();
    const { postBlogPost, id, editorState } = this.props;
    postBlogPost(id, editorState);
  };

  render(): React$Element<any> {
    const { editorState } = this.props;
    return (
      <div className="PostEditor--root">
        <button
          type="button"
          onMouseDown={(e: SyntheticMouseEvent<>): void => this.onButtonClick(e, 'UNDERLINE')}
        >
          Underline
        </button>
        <button
          type="button"
          onMouseDown={(e: SyntheticMouseEvent<>): void => this.onButtonClick(e, 'ITALIC')}
        >
          Italic
        </button>
        <button
          type="button"
          onMouseDown={(e: SyntheticMouseEvent<>): void  => this.onButtonClick(e, 'BOLD')}
        >
          Bold
        </button>
        <button type="button" onClick={this.onToggleCode}>
          Code Block
        </button>
        <button
          className="post-button"
          type="button"
          onClick={this.handlePostBlogPost}
        >
          Post
        </button>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          plugins={draftPlugins}
        />
        <EmojiSuggestions />
        <AlignmentTool />
      </div>
    );
  }
}

export default withRouter(PostEditor);
