import Link from "next/link";
import Image from "next/image";
import { resumeData } from "../../lib/constants/resumeData";

export default function Resume() {
  return (
    <main className="page-fadein-animation  flex min-h-screen md:p-24 p-3 bg-gradient-to-t">
      <div className="flex flex-col flex-grow">
        <h1 className="mb-4">Resume</h1>
        {resumeData.map((resume, idx) => (
          <div
            className={`flex md:flex-row flex-col justify-between m-4   ${
              idx == resumeData.length - 1
                ? ""
                : " border-b-2border-b-2 border-gray-300"
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
                    {data.year}
                  </section>
                  <div className="flex-col flex w-full">
                    <section className="mb-4">
                      <span className=" font-semibold mb-0">{data.name} </span>
                      {data.role && (
                        <span className="text-gray-500 italic font-semibold"> | {data.role}</span>
                      )}
                    </section>

                    {Array.isArray(data.desc) ? (
                      <ul className="list-disc ml-8">
                        {data.desc.map((value,idx) => (
                          <li key={idx}>{value}</li>
                        ))}
                      </ul>
                    ) : data.desc ? (
                      <span className="mb-2 ml-3">{data.desc}</span>
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
