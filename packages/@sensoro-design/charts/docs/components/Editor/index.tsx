import React from 'react';
import type { MonacoEditorProps } from '@lowcode/monaco-editor';
import { Editor } from '@lowcode/monaco-editor';

function EditorDemo({ options, ...rest }: MonacoEditorProps) {
  return (
    <Editor
      options={{
        lineNumbers: undefined,
        minimap: {
          enabled: false,
        },
        ...(options ?? {}),
      }}
      style={{ height: '100%' }}
      {...rest}
    />
  );
}

export default EditorDemo;
