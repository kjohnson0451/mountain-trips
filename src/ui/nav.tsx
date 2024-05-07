"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
  const pathname = usePathname()
  const links = [
    { name: "Home", href: "/" },
    {
      name: "Calendar",
      href: "/calendar",
    },
    { name: "Gallery", href: "/gallery" },
  ]

  return (
    <ul className="nav nav-pills">
      {links.map((link) => {
        return (
          <li key={link.name} className="nav-item">
            <Link
              href={link.href}
              className={clsx("nav-link", {
                active: pathname === link.href,
              })}
            >
              {link.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
