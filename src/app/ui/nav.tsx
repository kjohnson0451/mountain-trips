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
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      {links.map((link) => {
        return (
          <li key={link.name}>
            <Link
              href={link.href}
              className={clsx("nav-link px-2", {
                "link-secondary": pathname === link.href,
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
