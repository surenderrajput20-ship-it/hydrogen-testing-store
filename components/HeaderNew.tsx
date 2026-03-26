"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header({ menu, logo }: any) {

  const [search, setSearch] = useState("");

  function handleSearch(e: any) {
    e.preventDefault();
    window.location.href = `/search?q=${search}`;
  }

  return (
    <header className="flex items-center justify-between px-10 py-4 border-b">

      {/* LOGO */}
      <Link href="/">
        <img src={logo} className="h-10" />
      </Link>

      {/* MENU */}
      <nav className="flex gap-6">
        {menu.map((item: any, i: number) => (
          <Link key={i} href={item.url.replace("https://hydrogen-testing-store-new.myshopify.com", "")}>
            {item.title}
          </Link>
        ))}
      </nav>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* SEARCH */}
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search..."
            className="border px-2 py-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        {/* CART */}
        <Link href="/cart">
          🛒
        </Link>

        {/* LOGIN */}
        <Link href="/login">
          👤
        </Link>

      </div>

    </header>
  );
}