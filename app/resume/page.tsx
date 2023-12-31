import Link from "next/link";
import { resumeData } from "../../lib/constants/resumeData";

export default function Resume() {
  return (
    <main className="page-fadein-animation  flex min-h-screen md:p-24 p-3 bg-gradient-to-t">
      <div className="flex flex-col flex-grow">
        <div className="flex items-center mb-4">
          <h1 className="mr-3">Resume</h1>
          <a href="/ishika_frontend_4.pdf" download>
            <button className="border-2 border-yellow-500 rounded-xl bg-yellow-400 p-2">Download &#8595;</button>
          </a>
        </div>

        {resumeData.map((resume, idx) => (
          <div
            className={`flex md:flex-row flex-col justify-between m-4   ${
              idx == resumeData.length - 1
                ? ""
                : " border-b-2 border-gray-300"
            }`}
            key={resume.id}
          >
            <section className="md:w-1/4">
              <h3 className="mb-2">{resume.name}</h3>
            </section>
            <section className="md:w-3/4">
              {resume.data.map((data) => (
                <div key={data.name} className="mb-4 flex md:flex-row flex-col">
                  <section className="mb-1 md:mx-3 flex w-64">
                    {(data as any).year}
                  </section>
                  <div className="flex-col flex w-full">
                    <section className="mb-4">
                      {data.link ? (
                        <Link target="_blank" href={data.link}>
                          {" "}
                          <span className=" font-semibold mb-0">
                            {data.name}{" "}
                          </span>
                        </Link>
                      ) : (
                        <span className=" font-semibold mb-0">
                          {data.name}{" "}
                        </span>
                      )}
                      {(data as any).role && (
                        <span className="text-gray-500">
                          {" "}
                          | {(data as any).role}
                        </span>
                      )}
                    </section>

                    {Array.isArray((data as any).desc) ? (
                      <ul className="list-disc ml-8 text-gray-400">
                        {(data as any).desc.map((value: any, idx: number) => (
                          <li key={idx}>{value}</li>
                        ))}
                      </ul>
                    ) : (data as any).desc ? (
                      <span className="mb-2 ml-3 text-gray-400">
                        {(data as any).desc}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </section>
          </div>
        ))}
      </div>
    </main>
  );
}
