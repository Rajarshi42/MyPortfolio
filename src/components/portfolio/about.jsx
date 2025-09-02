import { motion } from "framer-motion";

export function Page2() {

    function disableRightClick(e) {
        e.preventDefault();
        alert("Right click is disabled for this image");
    }

    function resumeClick() {
        window.open("./MyResume.pdf", "_blank", "noopener,noreferrer");
    }

    return (
        <section className="page-2 py-5" id="About">
            <div className="container">
                <motion.div
                    className="row align-items-center g-5 flex-column flex-lg-row glass-about"
                    initial={{ opacity: 0, y: 250 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.01 }} // on 10% page veiw
                    transition={{ duration: 1 }}
                >
                    {/* Heading */}
                    <motion.h1 
                    className="fw-bold fs-2 mb-4 text-center heading text-black w-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1 }}
                    >
                        𝔸𝕓𝕠𝕦𝕥 𝕄𝕖
                    </motion.h1>

                    {/* Image Column */}
                    <motion.div
                        className="col-12 col-lg-6 d-flex justify-content-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            onContextMenu={disableRightClick}
                            src="./aboutImg2.jpg"
                            className="about-img img-fluid rounded shadow-lg"
                            style={{
                                objectFit: "scale-down",
                                width: "100%",
                                maxHeight: "360px",
                            }}
                            alt="MyPicture"
                        />
                    </motion.div>

                    {/* Text Column */}
                    <div className="col-12 col-lg-6 text-center text-lg-start">
                        <p className="fs-6 fs-md-5">
                            Hi, I'm <b className="main-logo">P.Rajarshi</b>, a{" "}
                            <b>B.Tech</b> graduate turned Front-End Developer.
                            After working for <b>1 year</b> and <b>4 months</b> in a
                            <b> non-IT </b> role, I decided to pursue my passion for
                            technology and learned <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>,{" "}
                            <b>JavaScript</b>, and <b>React</b>.
                        </p>
                        <p className="fs-6 fs-md-5">
                            I specialize in building responsive, user‑friendly web
                            interfaces and love crafting clean and efficient code.
                        </p>
                        <p className="fs-6 fs-md-5">
                            Beyond coding, I capture moments through <b>photography</b> and
                            experiment with <b>cooking</b>, which allows me to express
                            creativity outside of development.
                        </p>
                        <p className="fs-6 fs-md-5">
                            My ultimate goal is to grow as a Front-End Developer,
                            work on exciting projects, and contribute to impactful solutions.
                        </p>

                        <button className="about-btn btn w-100 fw-bold" onClick={resumeClick}>
                            𝚁𝚎𝚜𝚞𝚖𝚎
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}