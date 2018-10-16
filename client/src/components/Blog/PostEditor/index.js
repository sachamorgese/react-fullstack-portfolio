import React, { Component } from 'react';
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import draftPlugins from '../DraftPlugins';
import 'draft-js-emoji-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css';
import './index.css';

const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;

export default class PostEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    const content = window.localStorage.getItem('content');

    if (content) {
      this.state.editorState = EditorState.createWithContent(
        convertFromRaw(JSON.parse(content)),
      );
    } else {
      this.state.editorState = EditorState.createEmpty();
    }
  }

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    this.saveContent(contentState);
    this.setState({ editorState });
  };

  handleKeyCommand = (command) => {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  };

  onButtonClick = (e, style) => {
    e.preventDefault();
    const { editorState } = this.state;
    this.onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  onToggleCode = () => {
    this.onChange(RichUtils.toggleCode(this.state.editorState));
  };

  saveContent = (content) => {
    window.localStorage.setItem(
      'content',
      JSON.stringify(convertToRaw(content)),
    );
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="bombo">
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
        <EmojiSuggestions />
        <AlignmentTool />
      </div>
    );
  }
}
