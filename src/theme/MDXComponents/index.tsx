import MDXComponents from '@theme-original/MDXComponents';
import ZoomableImage from '@site/src/components/ZoomableImage';

/**
 * 扩展默认 MDX 组件，为文档图片启用点击放大。
 */
export default {
  ...MDXComponents,
  img: ZoomableImage,
};
