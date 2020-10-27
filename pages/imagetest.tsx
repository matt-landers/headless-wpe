import Image from "next/image";
import { useRouter } from "next/router";

const ImageTest = () => {
  const router = useRouter();

  const width: number = parseInt(router?.query?.width as string) || 1024;
  const height: number = parseInt(router?.query?.height as string) || 576;

  return (
    <Image
      width={width}
      height={height}
      alt="Millenium Falcon"
      src="/images/falcon.jpg"
    />
  );
};

export default ImageTest;
