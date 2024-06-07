"use client"

import { signIn } from "next-auth/react"
import { ChangeEvent, useState } from "react"

export const RegisterForm = () => {
  let [loading, setLoading] = useState(false)
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      })

      setLoading(false)
      if (!res.ok) {
        alert((await res.json()).message)
        return
      }

      signIn(undefined, { callbackUrl: "/" })
    } catch (error: any) {
      setLoading(false)
      console.error(error)
      alert(error.message)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <div className="mb-3">
        <input
          required
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          required
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" disabled={loading}>
        {loading ? "loading..." : "Register"}
      </button>
    </form>
  )
}
