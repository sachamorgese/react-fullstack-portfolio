// @flow
import { RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import { composeDecorators } from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator,
);

const emojiPlugin = createEmojiPlugin();

const imagePlugin = createImagePlugin({ decorator });

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
    return getDefaultKeyBinding(e);
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

const highLighterPlugin = createHighlighterPlugin();

export default [
  emojiPlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin,
  highLighterPlugin,
];
