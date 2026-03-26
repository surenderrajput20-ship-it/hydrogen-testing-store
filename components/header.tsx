"use client";

import Link from "next/link";

export default function Header({ menu, logo }: any) {
  return (
    <header className="flex items-center justify-between px-10 py-4 border-b">

      {/* Logo */}
      <Link href="/">
        <img src={logo} alt="logo" className="h-10" />
      </Link>

      {/* Menu */}
      <nav className="flex gap-6">
        {menu.map((item: any, i: number) => (
          <Link key={i} href={item.url.replace("https://hydrogen-testing-store.vercel.app/", "")}>
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Right Icons */}
      <div className="flex gap-4">
        <span>🔍</span>
        <span>🛒</span>
      </div>

    </header>
  );
}