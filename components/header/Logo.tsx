import Link from "next/link";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"} prefetch={false}>
      <Image
        priority
        src={"/logo.png"}
        alt="logo"
        height={350}
        width={350}
        className=" dark:invert dark:contrast-200"
      />
    </Link>
  );
};

export default Logo;
