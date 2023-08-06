import Link from "next/link";
import { headers } from "next/headers";


export default function Header() {
  const headersList = headers();
  console.log(headersList,"headersList")
  return (
    <header className="p-4  md:mx-3 mx-2 flex justify-between items-center">
      <div className="flex items-center">
        <span className="p-2 bg-yellow-500 rounded-full w-1 h-1 md:mx-4 mr-2"></span>
        <Link href="/">
          {" "}
          <h2>Ishika Gupta</h2>
        </Link>
      </div>
      <div className="flex items-center ">
        <Link href="/resume">
          <div className="border-r-2 pr-3 border-gray-500 text-gray-500">Resume</div>
        </Link>
        <Link href="/article">
          <div className="pl-3 text-gray-500">Articles</div>
        </Link>
      </div>
    </header>
  );
}
