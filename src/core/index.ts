export { FontNames as StandardFonts } from '@pdf-lib/standard-fonts';

export * from 'src/core/errors';
export { default as CharCodes } from 'src/core/syntax/CharCodes';

export { default as PDFContext } from 'src/core/PDFContext';
export { default as PDFWriter } from 'src/core/writers/PDFWriter';

export { default as PDFHeader } from 'src/core/document/PDFHeader';
export { default as PDFTrailer } from 'src/core/document/PDFTrailer';
export { default as PDFTrailerDict } from 'src/core/document/PDFTrailerDict';
export {
  default as PDFCrossRefSection,
} from 'src/core/document/PDFCrossRefSection';

export {
  default as StandardFontEmbedder,
} from 'src/core/embedders/StandardFontEmbedder';
export {
  default as CustomFontEmbedder,
} from 'src/core/embedders/CustomFontEmbedder';
export {
  default as CustomFontSubsetEmbedder,
} from 'src/core/embedders/CustomFontSubsetEmbedder';

export { default as PDFObject } from 'src/core/objects/PDFObject';
export { default as PDFBool } from 'src/core/objects/PDFBool';
export { default as PDFNumber } from 'src/core/objects/PDFNumber';
export { default as PDFString } from 'src/core/objects/PDFString';
export { default as PDFHexString } from 'src/core/objects/PDFHexString';
export { default as PDFName } from 'src/core/objects/PDFName';
export { default as PDFNull } from 'src/core/objects/PDFNull';
export { default as PDFArray } from 'src/core/objects/PDFArray';
export { default as PDFDict } from 'src/core/objects/PDFDict';
export { default as PDFRef } from 'src/core/objects/PDFRef';
export { default as PDFInvalidObject } from 'src/core/objects/PDFInvalidObject';
export { default as PDFStream } from 'src/core/objects/PDFStream';
export { default as PDFRawStream } from 'src/core/objects/PDFRawStream';

export { default as PDFCatalog } from 'src/core/structures/PDFCatalog';
export { default as PDFPageTree } from 'src/core/structures/PDFPageTree';
export { default as PDFPageLeaf } from 'src/core/structures/PDFPageLeaf';
export {
  default as PDFContentStream,
} from 'src/core/structures/PDFContentStream';

export { default as PDFOperator } from 'src/core/operators/PDFOperator';
export {
  default as PDFOperatorNames,
} from 'src/core/operators/PDFOperatorNames';

export { default as PDFObjectParser } from 'src/core/parser/PDFObjectParser';
export {
  default as PDFObjectStreamParser,
} from 'src/core/parser/PDFObjectStreamParser';
export { default as PDFParser } from 'src/core/parser/PDFParser';
export {
  default as PDFXRefStreamParser,
} from 'src/core/parser/PDFXRefStreamParser';
