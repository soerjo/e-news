import Link from "next/link";
import React from "react";
import sosmedObject from "./sosmedList";

const Footer = () => {
  return (
    <footer className="bg-orange-500 flex flex-col w-full">
      <div className="flex flex-wrap justify-around items-center">
        <p className="text-slate-50 m-4">
          Copyright © 2022 Jurnalistika.id 💚 PT. Sahabat Jurnalistik Media. All
          rights reserved.
        </p>
        <div className="flex flex-row gap-3">
          {sosmedObject.map(sosmed => (
            <Link key={sosmed.name} href={sosmed.link} passHref={true}>
              <a>
                <div className="fill-slate-50">{sosmed.img}</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
