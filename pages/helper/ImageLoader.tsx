import { ImageLoaderProps } from "next/image";

const CustomImageLoader = (props: ImageLoaderProps) => {
  const { src, width, quality } = props;
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default CustomImageLoader;
