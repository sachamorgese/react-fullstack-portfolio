import { RichUtils } from 'draft-js';

const checkMetaAlt = (e) => e.metaKey && e.key === 'Alt';

const createHighlighterPlugin = () => ({
  customStyleMap: {
    highlightBlue: {
      background: 'blue',
      padding: '0 .3em',
      color: '#fff',
    },
    highlightYellow: {
      background: 'yellow',
      padding: '0 .3em',
      color: '#fff',
    },
  },
  keyBindingFn: (e) => {
    if (checkMetaAlt(e) && e.key === 'b') {
      e.preventDefault();
      return 'highlight-blue';
    }
    return '';
  },
  handleKeyCommand: (command, editorState, { setEditorState }) => {
    if (command === 'highlight-blue') {
      setEditorState(RichUtils.toggleInlineStyle(editorState, 'highlightBlue'));
    } else if (command === 'highlight-yellow') {
      setEditorState(
        RichUtils.toggleInlineStyle(editorState, 'highlightYellow'),
      );
    }
  },
});

const temp = () => {};

export { createHighlighterPlugin, temp };
