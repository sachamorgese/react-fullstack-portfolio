// @flow
import { RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';

const { hasCommandModifier } = KeyBindingUtil;

const createHighlighterPlugin = () => ({
  customStyleMap: {
    highlightYellow: {
      background: 'hsl(60, 42%, 83%)',
      padding: '0.3em',
      color: '#fff',
    },
  },
  keyBindingFn: (e: Object) => {
    if (hasCommandModifier(e) && e.key === 'h') {
      return 'highlight-yellow';
    }
    return getDefaultKeyBinding;
  },
  handleKeyCommand: (
    command: String,
    editorState: Object,
    { setEditorState }: { setEditorState: Function },
  ) => {
    if (command === 'highlight-yellow') {
      setEditorState(
        RichUtils.toggleInlineStyle(editorState, 'highlightYellow'),
      );
    }
  },
});

const temp = () => {};

export { createHighlighterPlugin, temp };
