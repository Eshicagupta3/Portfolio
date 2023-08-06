import Image from "next/image";
import Link from "next/link";
import { contactList } from "../../lib/constants/contactList";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t-2 flex justify-between items-center border-gray-300">
      <div className="flex flex-col  md:flex-row md:items-center md:justify-around w-full">
        {contactList.map((con) => (
          <div className="flex flex-col mb-3 md:mb-0 " key={con.id}>
            <span className="font-bold text-lg mb-2">{con.name}</span>
            <div className="flex text-gray-600">
              {con.type !== "image" ? (
                <span>{(con as any).value[0]}</span>
              ) : (
                con.value.map((imageData) => (
                  <Link target="_blank" key={imageData.id} href={imageData.link}>
                    <Image
                      className="w-5"
                      src={imageData.src}
                      alt="name"
                      width={100}
                      height={100}
                    />
                  </Link>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
