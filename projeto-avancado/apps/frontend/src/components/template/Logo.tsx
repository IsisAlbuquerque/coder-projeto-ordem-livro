import { Righteous } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const fonte = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <Link
      href="/"
      className={`
            flex items-center gap-2
            ${fonte.className}
        `}>
      <Image src="/logo.svg" alt="Logo" width={48} height={48} />
      <h1 className="flex flex-col items-center text-lg leading-5">
        <div>
          CONVIT<span className="text-blue-500">E</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
}
