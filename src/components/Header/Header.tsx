"use client";
import Link from "next/link";

import { GithubLogo } from "phosphor-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-500 text-white py-2 px-4 shadow-lg rounded-bl-md rounded-br-md">
      <section className="max-w-5xl  flex justify-between items-center m-auto">
        <div className="flex items-center">
          <a
            href="https://www.colab.re/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://uploads-ssl.webflow.com/5d7fa6d94cc8594259880539/62fbe3abfd2be5aa8cdc8cc1_tipo.png"
              alt="Logo"
              className="w-16 h-auto "
            />
          </a>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <p className="text-lg font-bold align-bottom">Colab Challenge</p>
          </Link>
        </div>
        <div>
          <a
            href="https://github.com/guilhermemd/colab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo size={24} />{" "}
          </a>
        </div>
      </section>
    </header>
  );
}
