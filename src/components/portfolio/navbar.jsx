import { useEffect } from "react";
export function Navbar() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Background">
            <nav className="navbar navbar-expand-lg navBarBlur fixed-top shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-3 text-black logo" href="#Home">&lt;𝕽𝖆𝖏𝖆𝖗𝖘𝖍𝖎/&gt;</a>
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
                                <a href="#Home" className="nav-link text-dark  fw-bold ">
                                    &nbsp; &nbsp;Home&nbsp; &nbsp;
                                </a>
                            </li>
                            <li className="nav-item btn-gradient">
                                <a href="#About" className="nav-link text-dark fw-bold">
                                    &nbsp; About&nbsp; &nbsp;
                                </a>
                            </li>
                            <li className="nav-item btn-gradient">
                                <a href="#Skills" className="nav-link text-dark fw-bold">
                                    &nbsp; &nbsp; Skills &nbsp; &nbsp;
                                </a>
                            </li>
                            <li className="nav-item btn-gradient">
                                <a href="#Projects" className="nav-link text-dark fw-bold">
                                    &nbsp;Projects&nbsp;
                                </a>
                            </li>
                            <li className="nav-item btn-gradient" style={{ marginRight: "70px" }}>
                                <a href="#Contact" className="nav-link text-dark fw-bold">
                                    &nbsp; Contact &nbsp;
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}
