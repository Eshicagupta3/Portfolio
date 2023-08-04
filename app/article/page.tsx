import Link from "next/link";
import Image from "next/image";
import { articleList } from "../../lib/constants/articleList";

export default function Article() {
  return (
    <main className="flex min-h-screen justify-center md:p-24 p-3 bg-gradient-to-t md:mb-64">
      <div className="flex flex-col">
        <h1 className="my-4">Articles</h1>
        {articleList.map((article, idx) => (
          <Link target="_blank" className="flex md:flex-row flex-col justify-between m-4" key={article.id} href={article.link}>
            <section className="md:w-2/4">
              <h3 className="mb-2">{article.name}</h3>
              <span className="">{article.desc}</span>
            </section>
            <section className="">
                <Image src={article.image} alt={article.alt} className={`border-2 p-3 md:w-64 h-64 w-full`} width="200" height="200"/>
            </section>
          </Link>
        ))}
      </div>
    </main>
  );
}
