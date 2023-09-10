export default function Header() {
  return (
    <header>
      <nav className="navbar flex justify-between items-center font-[500] pt-3">
        <div className="brand">
          <a className="logo" href="#">
            <img src="/images/nike_logo.svg" width={60} alt="Home - Nike" />
          </a>
        </div>
        <ul className="menu flex uppercase  gap-6 max-lg:hidden">
          <li key="1">
            <a className="hover:text-red-600 transition-all" href="#">
              Menu
            </a>
          </li>
          <li key="2">
            <a className="hover:text-red-600 transition-all" href="#">
              Location
            </a>
          </li>
          <li key="3">
            <a className="hover:text-red-600 transition-all" href="#">
              About
            </a>
          </li>
          <li key="4">
            <a className="hover:text-red-600 transition-all" href="#">
              Contact
            </a>
          </li>
        </ul>
        <a
          className="login-btn px-4 py-1.5 bg-red-600 rounded-sm shadow-sm hover:opacity-90 text-white"
          href="#"
        >
          Login
        </a>
      </nav>
    </header>
  );
}
