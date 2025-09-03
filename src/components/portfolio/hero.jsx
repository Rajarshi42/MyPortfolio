import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Page1() {
    useEffect(() => {
        window.history.scrollRestoration = "manual";
    }, []);

    const text = "𝕎𝕖𝕓 𝔻𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣";
    const letters = Array.from(text);

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const [verify, setVerify] = useState("");
    function enquiryClick() {
        setVerify("* WhatsApp Business is currently unavailable. Please go to contact");
        const timer = setTimeout(() => {
            setVerify("");
        }, 6000);
        return () => clearTimeout(timer);
    }

    return (
        <header
            className="pt-5 tab-pane page-1"
            id="Home"
            style={{ minHeight: "100vh" }}
        >
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="text-center glass-hero px-3">
                    {/* Greeting */}
                    <h1 className="fw-bolder display-6">𝑯𝒊,</h1>

                    {/* Name Section */}
                    <span className="d-flex flex-wrap justify-content-center align-items-center mb-2">
                        <h1 className="fw-bolder mb-0 display-6">𝑰'𝒎&nbsp;</h1>
                        <motion.h1
                            initial={{ opacity: 0 }}    // starting state
                            animate={{ opacity: 1 }}    // animate to this state
                            transition={{ duration: 1.5 }}    // duration of animation
                            className="fw-bolder mb-0 text-black display-6 text-wrap "
                        >
                           𝙍𝙖𝙟𝙖𝙧𝙨𝙝𝙞 
                        </motion.h1>
                    </span>

                    {/* Animated Developer Title */}
                    <motion.div
                        style={{
                            display: "flex",
                            flexWrap: "wrap", //  prevents overflow
                            overflow: "hidden",
                        }}
                        className="justify-content-center fs-3 fs-md-2"
                        initial="hidden"
                        animate="visible"
                    >
                        {letters.map((letter, index) => (
                            <motion.h1
                                key={index}
                                variants={letterVariants}
                                transition={{
                                    duration: 0.05,
                                    delay: (1 / letters.length) * index,
                                }}
                                className="fw-bolder mb-2 px-1 text-black"
                            >
                                {letter}
                            </motion.h1>
                        ))}
                    </motion.div>

                    {/* Portfolio Info */}
                    <p className="text-black fs-6 fs-md-5 mt-3">
                        This site is my portfolio website created using HTML, CSS & React
                    </p>

                    {/* Responsive Button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="my-4 btn btn-success bi bi-whatsapp px-4 py-2 w-100 w-md-auto"
                        onClick={enquiryClick}
                    >
                        &nbsp; Enquire now
                    </motion.button>

                    {/* WhatsApp Enquiry Message */}
                    <span className="d-block mt-2 text-danger text-bg-dark small">{verify}</span>
                </div>
            </div>
        </header>
    );
}
