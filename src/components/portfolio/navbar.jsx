import { useEffect } from "react";
import Collapse from "bootstrap/js/dist/collapse"; // ✅ import Bootstrap's Collapse

export function Navbar() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    if (!navbarCollapse) return;

    // Handler: collapse menu on nav link click
    const handleLinkClick = () => {
      if (navbarCollapse.classList.contains("show")) {
        new Collapse(navbarCollapse).hide();
      }
    };

    // Handler: collapse menu when clicking outside navbar
    const handleOutsideClick = (e) => {
      if (
        navbarCollapse.classList.contains("show") &&
        !e.target.closest(".navbar")
      ) {
        new Collapse(navbarCollapse).hide();
      }
    };

    // Attach events
    navLinks.forEach((link) => link.addEventListener("click", handleLinkClick));
    document.addEventListener("click", handleOutsideClick);

    // Cleanup on unmount
    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleLinkClick)
      );
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="Background">
      <nav className="navbar navbar-expand-lg navBarBlur fixed-top shadow-sm">
        <div className="container-fluid">
          <a
            className="navbar-brand fw-bold fs-3 text-black"
            href="#Home"
          >
            &lt;𝕽𝖆𝖏𝖆𝖗𝖘𝖍𝖎/&gt;
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active btn-gradient ">
                <a
                  href="#Home"
                  className="nav-link text-dark fw-bold text-center"
                >
                  Home
                </a>
              </li>
              <li className="nav-item btn-gradient">
                <a
                  href="#About"
                  className="nav-link text-dark fw-bold text-center"
                >
                  About
                </a>
              </li>
              <li className="nav-item btn-gradient">
                <a
                  href="#Skills"
                  className="nav-link text-dark fw-bold text-center"
                >
                  Skills
                </a>
              </li>
              <li className="nav-item btn-gradient">
                <a
                  href="#Projects"
                  className="nav-link text-dark fw-bold text-center"
                >
                  Projects&nbsp;
                </a>
              </li>
              <li className="nav-item btn-gradient">
                <a
                  href="#Contact"
                  className="nav-link text-dark fw-bold text-center"
                >
                  Contact &nbsp;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
