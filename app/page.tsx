import Link from "@/node_modules/next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="page-animation flex min-h-screen  items-center justify-center md:p-24 p-3">
      <div className="md:mb-12 md:items-center items-center md:items-start  flex md:flex-row flex-col-reverse justify-center md:w-8/12">
        <Image
          src="/my.jpg"
          alt="profile Logo"
          className="rounded-full md:mx-8 h-80 w-80 bigimage from-gray-200"
          width={300}
          height={300}
        />
        <div className="flex flex-col items-center md:items-start md:text-start text-center">
          <h1 className="md:text-8xl text-6xl md:mb-6 md-4">Hello</h1>
          <h2 className="text-xl">A bit About me</h2>
          <span className="my-2">
            Frontend Engineer with four years of experience, specializing in
            building dynamic and user-friendly web applications. Outside of work, I love to do dance, trevelling.
          </span>
          <div className="flex justify-between my-3">
            <Link
              className="rounded-full flex border-black border-2 mr-4 items-center justify-center  j w-32 h-32 bg-red-500"
              href="/article"
            >
              Articles
            </Link>
            <Link
              className="rounded-full flex justify-center items-center border-black  border-2  justify-center  w-32 h-32 bg-yellow-500"
              href="/resume"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
