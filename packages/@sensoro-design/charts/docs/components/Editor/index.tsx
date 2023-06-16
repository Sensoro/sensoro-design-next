import type { FC } from 'react';
import React from 'react';

import type { MonacoEditorProps } from '@lowcode/monaco-editor';
import { Editor } from '@lowcode/monaco-editor';

const EditorDemo: FC<MonacoEditorProps> = ({ options, ...rest }) => {
  return (
    <Editor
      options={{
        lineNumbers: undefined,
        minimap: {
          enabled: false,
        },
        ...(options ?? {}),
      }}
      {...rest}
    />
  );
};

export default EditorDemo;
