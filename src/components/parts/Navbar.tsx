import { title } from "process";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  menuTitle: string;
  menuUrl: string;
};

const menu: NavbarProps[] = [
  { menuTitle: "home", menuUrl: "#" },
  { menuTitle: "photograph", menuUrl: "#" },
  { menuTitle: "moving image", menuUrl: "#" },
  { menuTitle: "connect", menuUrl: "#" },
];

export default function Navbar() {
  return (
    <section className="py-30">
      <Image
        src="/caroline_meliala_logo.jpg"
        alt="caroline_meliala_logo.jpg"
        width={2200}
        height={150}
      ></Image>

      <div className="list-none text-center sm:text-left font-medium font-sans mt-10">
        {menu.map((data, index) => (
          <li
            key={index}
            className="select-none  transition-all duration-500 hover:font-bold"
          >
            <Link href={data.menuUrl}>{data.menuTitle}</Link>
          </li>
        ))}
      </div>
    </section>
  );
}
