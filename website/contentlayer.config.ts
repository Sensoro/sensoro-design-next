import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer2/source-files';

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [
    Doc,
  ],
  mdx: {

  },
});
