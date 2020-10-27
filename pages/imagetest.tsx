import Image from "next/image";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();

  const width: number = parseInt(router?.query?.width as string) || 480;
  const height: number = parseInt(router?.query?.height as string) || 320;

  return (
    <Image
      width={width}
      height={height}
      alt="Millenium Falcon"
      src="/images/falcon.jpg"
    />
  );
};
