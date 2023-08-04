import Link from "@/node_modules/next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center md:p-24 p-3">
      <div className="bg-gradient-to-t items-center md:items-start  flex md:flex-row flex-col-reverse justify-center md:w-8/12">
        <Image
          src="/my.jpg"
          alt="profile Logo"
          className="rounded-full md:mx-8 h-80 w-80 md:w-96 from-gray-200"
          width={300}
          height={300}
        />
        <div className="flex flex-col items-center md:items-start">
          <span className="text-5xl">Hello</span>
          <span>A bit About me</span>
          <span className="my-2">
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </span>
          <div className="flex justify-between my-3">
          <Link className="rounded-full flex border-black border-2 mx-2 items-center justify-center  j w-32 h-32 bg-red-400" href="/article">
              Articles
          </Link>
          <Link className="rounded-full flex justify-center items-center border-black  border-2  justify-center  w-32 h-32 bg-yellow-500" href="/resume">
              Resume
          </Link>
        </div>
        </div>
        
      </div>
    </main>
  );
}
