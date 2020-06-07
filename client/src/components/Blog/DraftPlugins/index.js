// @flow
import { RichUtils, getDefaultKeyBinding, KeyBindingUtil } from 'draft-js';
import type { EditorState } from 'draft-js';
import { composeDecorators, EditorPlugin } from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';
import type { DraftEditorCommand } from 'draft-js/lib/DraftEditorCommand';

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

const highlightYellow = 'highlight-yellow';

const emojiPlugin = createEmojiPlugin();

const imagePlugin = createImagePlugin({ decorator });

const { hasCommandModifier } = KeyBindingUtil;

type CustomStyleMapType = {
  background: string,
  padding: string,
  color: string,
};

type CustomPluginType = 'highlightYellow';

type CreatePluginType = {
  customStyleMap: {
    [key: CustomPluginType]: CustomStyleMapType,
  },
  ...EditorPlugin,
};

const createHighlighterPlugin = (): CreatePluginType => ({
  customStyleMap: {
    highlightYellow: {
      background: 'hsl(60, 42%, 83%)',
      padding: '0.3em',
      color: '#fff',
    },
  },
  keyBindingFn: (
    e: SyntheticKeyboardEvent<EventTarget>,
  ): ?DraftEditorCommand | string => {
    if (hasCommandModifier(e) && e.key === 'h') {
      return highlightYellow;
    }
    return getDefaultKeyBinding(e);
  },
  handleKeyCommand: (
    command: DraftEditorCommand,
    editorState: EditorState,
    { setEditorState }: { setEditorState: (EditorState) => void },
  ) => {
    if (command === highlightYellow) {
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
