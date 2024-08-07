import * as React from 'react';

import { BlocksRenderer } from '~/modules/blocks/BlocksRenderer';

import { GoodModal } from '~/common/components/GoodModal';
import { isMacUser } from '~/common/util/pwaUtils';
import { platformAwareKeystrokes } from '~/common/components/KeyStroke';
import { useIsMobile } from '~/common/components/useMatchMedia';


const shortcutsMd = platformAwareKeystrokes(`

| Shortcut                                | Description                                     |
|-----------------------------------------|-------------------------------------------------|
| **Edit**                                |                                                 |
| Shift + Enter                           | Newline                                         |
| Alt + Enter                             | Append (no response)                            |
| Ctrl + Shift + B                        | **Beam** last message                           |
| Ctrl + Shift + R                        | **Regenerate** last message                     |
| Ctrl + Shift + V                        | Attach clipboard (better than Ctrl + V)         |
| Ctrl + M                                | Microphone (voice typing)                       |
| **Chats**                               |                                                 |
| Ctrl + O                                | Open Chat ...                                   |
| Ctrl + S                                | Save Chat ...                                   |
| Ctrl + ${isMacUser ? '' : 'Alt +'} N    | **New** chat                                    |
| Ctrl + ${isMacUser ? '' : 'Alt +'} X    | **Reset** chat                                  |
| Ctrl + ${isMacUser ? '' : 'Alt +'} D    | **Delete** chat                                 |
| Ctrl + ${isMacUser ? '' : 'Alt +'} B    | **Branch** chat                                 |
| Ctrl + Alt + Left                       | **Previous** chat (in history)                  |
| Ctrl + Alt + Right                      | **Next** chat (in history)                      |
| **Settings**                            |                                                 |
| Ctrl + Shift + P                        | ⚙️ Preferences                                  |
| Ctrl + Shift + M                        | 🧠 Models                                       |
| Ctrl + Shift + O                        | 💬 Options (current Chat Model)                 |
| Ctrl + Shift + +                        | Increase Text Size                              |
| Ctrl + Shift + -                        | Decrease Text Size                              |
| Ctrl + Shift + ${isMacUser ? '/' : '?'} | Shortcuts                                       |

`).trim();


export function ShortcutsModal(props: { onClose: () => void }) {

  // external state
  const isMobile
    = useIsMobile();

  return (
    <GoodModal open title='Desktop Shortcuts' onClose={props.onClose}>
      <BlocksRenderer
        text={shortcutsMd}
        fromRole='assistant'
        contentScaling='sm'
        fitScreen={isMobile}
        renderTextAsMarkdown
      />
    </GoodModal>
  );
}
