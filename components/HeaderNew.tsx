"use client";

import Link from "next/link";

export default function Header({ menu, logo }: any) {
  return (
    <header className="flex justify-between items-center px-10 py-4 border-b">

      {/* LOGO */}
      <Link href="/">
        {logo && <img src={logo} className="h-10" />}
      </Link>

      {/* MENU */}
      <nav className="flex gap-6">
        {menu?.map((item: any, i: number) => (
          <Link
            key={i}
            href={item.url.replace(
              "https://hydrogen-testing-store-new.myshopify.com",
              ""
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* RIGHT */}
      <div className="flex gap-4">
        <span>🔍</span>
        <span>🛒</span>
        <span>👤</span>
      </div>

    </header>
  );
}