import {
  defaultValueCtx,
  Editor,
  rootCtx,
  editorViewOptionsCtx,
} from '@milkdown/core';
import { listener, listenerCtx } from '@milkdown/plugin-listener';
import { prism } from '@milkdown/plugin-prism';
import { tooltip } from '@milkdown/plugin-tooltip';
import { ReactEditor, useEditor } from '@milkdown/react';
import { nord } from '@milkdown/theme-nord';
import { FC, useEffect } from 'react';
import { menu } from '@milkdown/plugin-menu';
import { getHTML } from '@milkdown/utils';
import { upload, uploadPlugin } from '@milkdown/plugin-upload';
import { uploader } from './util';
import { gfm } from '@milkdown/preset-gfm';

const Milkdown: FC<{ value: string; editable: boolean }> = ({
  value,
  editable,
}) => {
  const { editor, loading, getInstance } = useEditor((root) => {
    return Editor.make()
      .config((ctx) => {
        ctx.set(editorViewOptionsCtx, { editable: () => editable });
        ctx.set(rootCtx, root);
        ctx.set(defaultValueCtx, value);
        ctx.get(listenerCtx).markdownUpdated((ctx, value) => {
          console.log(ctx, value);
        });
      })
      .use(
        upload.configure(uploadPlugin, {
          uploader,
        })
      )
      .use(nord)
      .use(gfm)
      .use(tooltip)
      .use(prism)
      .use(menu)
      .use(listener);
  });

  useEffect(() => {
    if (!loading) {
      const instance = getInstance();
      instance?.action((ctx) => {
        const getEditorHtml = instance?.action(getHTML);
        console.log(getEditorHtml(ctx));
      });
    }
  }, [getInstance, loading]);

  return <ReactEditor editor={editor} />;
};

export default Milkdown;
