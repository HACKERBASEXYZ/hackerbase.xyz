import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="mt-auto  border-t border-black w-full flex flex-row items-center justify-between p-4">
        <h1>© 2023 Hacker Base. No Rights Reserved.</h1>
        <Link href="https://twitter.com/hackerbasexyz">
          <BsTwitter size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
