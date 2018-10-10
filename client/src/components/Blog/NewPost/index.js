import React, { Component } from 'react';
import { EditorState, RichUtils, convertToRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import 'draft-js-emoji-plugin/lib/plugin.css';
import './index.css';

const emojiPlugin = createEmojiPlugin();

const { EmojiSuggestions } = emojiPlugin;

export default class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    console.log('content state', convertToRaw(contentState));
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
          plugins={[emojiPlugin]}
        />
        <EmojiSuggestions />
      </div>
    );
  }
}
