import logo from "./images/logo.png"

export function Navbar() {
  return <nav>
    <a className="logo" href="https://quickpart.ru" target="_blank" rel="noreferrer">
      <img src={logo} alt="logo-kvikpart" />
    </a>
  </nav>
}