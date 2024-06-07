"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function Login() {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <div className="col-md-3 text-end">
      {!user && (
        <>
          <Link href="/login" className="btn btn-outline-primary me-2">
            Login
          </Link>
          <Link href="/register" className="btn btn-primary">
            Sign-up
          </Link>
        </>
      )}
      {user && (
        <button
          type="button"
          className="btn btn-outline-primary me-2"
          onClick={() => signOut()}
        >
          Logout
        </button>
      )}
    </div>
  )
}
