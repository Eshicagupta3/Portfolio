import Link from "next/link";


export default function Header() {
  return (
    <main className="p-4  md:mx-3 mx-2 flex justify-between items-center">
      <div className="flex items-center">
        <span className="p-2 bg-yellow-500 rounded-full w-1 h-1 md:mx-4 mr-2"></span>
        <Link href="/">
          {" "}
          <h2>Ishika Gupta</h2>
        </Link>
      </div>
      <div className="flex items-center ">
        <Link href="/resume">
          <div className="border-r-2 pr-3 border-black">Resume</div>
        </Link>
        <Link href="/article">
          <div className="pl-3">Articles</div>
        </Link>
      </div>
    </main>
  );
}
