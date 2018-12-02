// @flow
import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import { withRouter } from 'react-router-dom';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import debounce from 'lodash/debounce';

import type { EditorState } from 'draft-js';
import { history } from 'react-router-dom';

import draftPlugins from '../DraftPlugins';
import 'draft-js-emoji-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css';
import './PostEditor.Module.scss';

const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;

type props = {
  updateEditorState: Function,
  editorState: EditorState,
  saveDraftContent: Function,
  id: string,
  history: string,
};

class PostEditor extends Component<props> {
  saveOnServer = debounce((editorState) => {
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

  handleKeyCommand = (command) => {
    const { editorState } = this.props;
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  onButtonClick = (e, style) => {
    e.preventDefault();
    const { editorState } = this.props;
    this.onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  onToggleCode = () => {
    const { editorState } = this.props;
    this.onChange(RichUtils.toggleCode(editorState));
  };

  render() {
    const { editorState } = this.props;
    return (
      <div className="PostEditor--root">
        <button
          type="button"
          onMouseDown={(e) => this.onButtonClick(e, 'UNDERLINE')}
        >
          Underline
        </button>
        <button
          type="button"
          onMouseDown={(e) => this.onButtonClick(e, 'ITALIC')}
        >
          Italic
        </button>
        <button
          type="button"
          onMouseDown={(e) => this.onButtonClick(e, 'BOLD')}
        >
          Bold
        </button>
        <button type="button" onClick={this.onToggleCode}>
          Code Block
        </button>
        <Editor
          editorState={editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
          plugins={draftPlugins}
        />
        {/* <button type="button" onClick={handlePost}> */}
        {/* Post! */}
        {/* </button> */}
        <EmojiSuggestions />
        <AlignmentTool />
      </div>
    );
  }
}

export default withRouter(PostEditor);
