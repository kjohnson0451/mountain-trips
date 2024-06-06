import Nav from "@/app/ui/nav"
import Login from "@/app/ui/login"

export default function Header() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a
          href="/"
          className="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Mountain Trips</span>
        </a>
      </div>

      <Nav />
      <Login />
    </header>
  )
}
