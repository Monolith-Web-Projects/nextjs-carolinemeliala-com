import { title } from "process";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  menuTitle: string;
  menuUrl: string;
};

const menu: NavbarProps[] = [
  { menuTitle: "home", menuUrl: "/" },
  { menuTitle: "fashion", menuUrl: "/fashion" },
  { menuTitle: "comercial", menuUrl: "/commercial" },
  { menuTitle: "editorial", menuUrl: "/editorial" },
];

export default function Navbar() {
  return (
    <section className="my-30 p-5">
      <Link href="https://www.instagram.com/carolinemeliala/" target="blank">
        <Image
          src="/caroline_meliala_logo.jpg"
          alt="caroline_meliala_logo.jpg"
          width={2200}
          height={150}
        ></Image>
      </Link>

      <div className="list-none text-center sm:text-left font-medium font-sans mt-10">
        {menu.map((data, index) => (
          <li
            key={index}
            className="select-none  transition-all duration-250 hover:font-bold"
          >
            <Link href={data.menuUrl}>{data.menuTitle}</Link>
          </li>
        ))}
      </div>
    </section>
  );
}
