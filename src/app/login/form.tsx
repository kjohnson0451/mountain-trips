"use client"

import { signIn } from "next-auth/react"
import { useSearchParams, useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

export const LoginForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/"

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      setFormValues({ email: "", password: "" })

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      })

      setLoading(false)

      console.log(res)
      if (!res?.error) {
        router.push(callbackUrl)
      } else {
        setError("Invalid email or password")
      }
    } catch (error: any) {
      setLoading(false)
      setError(error)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <form onSubmit={onSubmit}>
      {error && <p className="text-danger">{error}</p>}
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
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "loading..." : "Sign-in"}
      </button>
    </form>
  )
}
