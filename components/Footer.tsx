import NextLink from "next/link";
import { useState } from "react";

const FOOTER_LINKS = [
  {
    name: "Anasayfa",
    link: "/",
  },
  {
    name: "Yazılar",
    link: "/yazilar",
  },
  {
    name: "Filmler",
    link: "/filmler",
  },
  {
    name: "Fikirler",
    link: "/fikirler",
  },
  {
    name: "Tiyatrolar",
    link: "/tiyatrolar",
  },
  {
    name: "Müzikler",
    link: "/muzikler",
  },
  {
    name: "Biz Kimiz?",
    link: "/biz",
  },
  {
    name: "İletişim",
    link: "/iletisim",
  },
];

const Link = ({ link, name }) => (
  <NextLink
    className="text-[#e8e8e8] text-base underline  underline-offset-[6px] font-light"
    href={link}
  >
    {name}
  </NextLink>
);

export default function Footer() {
  const [email, setEmail] = useState<string>();

  return (
    <footer className="px-4 md:mx-0 pb-10 bg-[#141414]">
      <div className="flex flex-col  max-w-screen-xl mx-auto pt-12 md:pt-20">
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-200">
          Abone Ol
        </h3>
        <h5 className="text-base md:text-lg font-light text-[#9B9B9B] mt-4">
          Yeni yazılar paylaşıldığında anında haber alabilmek için mail
          listemize kaydol
        </h5>
        <div className="flex items-center px-2 my-8">
          <input
            className="bg-transparent border-b md:border-b-2 font-light border-white text-lg md:text-xl md:w-[400px] px-4 text-[#9B9B9B] focus:outline-none"
            placeholder="art@art.com"
            onChange={(e) => setEmail(e?.currentTarget?.value)}
            value={email}
          />
          <button className="ml-4 text-base md:text-lg font-normal text-white">
            gönder
          </button>
        </div>
        <div className="py-4 md:py-8 border-t md:border-t-2 border-[#5F5F5F]"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex w-full flex-wrap gap-x-4 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <Link {...link} key={link.name} />
            ))}
          </div>
          <span className="self-end md:self-auto mt-12 md:mt-0 text-zinc-400 font-light text-base md:text-lg whitespace-nowrap">
            iletişim: xyz@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}
