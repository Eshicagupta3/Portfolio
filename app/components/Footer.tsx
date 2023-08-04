import Link from "next/link";
import { contactList } from "../../lib/constants/contactList";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-50 border-t-2 md:fixed left-0 right-0 bottom-0 flex justify-between items-center border-gray-300">
      <div className="flex flex-col  md:flex-row md:items-center md:justify-around w-full">
        {contactList.map((con) => (
          <div className="flex flex-col mb-3 md:mb-0 " key={con.id}>
            <span>{con.name}</span>
            <span>{con.value[0]}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
