"use client";
import { WhatsappLogo, LinkedinLogo, Newspaper } from "phosphor-react";

export default function Footer() {
  return (
    <footer className="bg-gray-500 py-4 rounded-t-md">
      <div className="flex justify-between max-w-screen-lg items-center mx-auto px-4">
        <p className="text-white text-xs sm:text-base">
          Challenge performed by Guilherme Dornelles
        </p>
        <div className="flex gap-2">
          <a
            href="https://gitconnected.com/guilhermemd/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4"
          >
            <Newspaper size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/guilherme-dornelles-97780b200/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4"
          >
            <LinkedinLogo size={24} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5551999010494&text=I%20just%20saw%20your%20challenge%20for%20the%20Colab%20company."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <WhatsappLogo size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
