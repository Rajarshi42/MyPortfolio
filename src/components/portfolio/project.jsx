import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
export function Page4() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const submit = (values) => {
        const templateParams = {
            user_name: values.user_name,
            user_email: values.user_email,
            message: values.message,
            //     console.log(values);
            //     alert('form submited');
            //     reset();
        };
        // 1. Send to YOU (admin)
        emailjs.send(
            "Rajarshi_26",      // Service ID
            "Rajarshi_2603",  // Template ID for admin
            templateParams,
            "9LnOnFzrXoG8Ym0AY" // Public Key
        )
            .then(() => {
                console.log("✅ Message sent to me!");
            })
            .catch((error) => {
                console.error("❌ Failed to send to me:", error);
            });
        emailjs.send(
            "Rajarshi_26", // replace with your Service ID
            "Rajarshi_26", // replace with your Template ID
            templateParams,
            "9LnOnFzrXoG8Ym0AY" // replace with your Public Key
        )
            .then(
                (response) => {
                    console.log("Sucess!", response.status, response.text);
                    alert("Message sent successfully ✅");
                    reset();
                },
                (error) => {
                    console.error("Failed...", error);
                    alert("Failed: " + JSON.stringify(error));
                }
            );

    };
    return (
        <>
            <section className="py-5 page-3" id="Projects">
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 50 }}   // start hidden
                    whileInView={{ opacity: 1, y: 0 }} // animate when in view
                    viewport={{ once: true, amount: 0.1 }} // trigger once when 50% visible
                    transition={{ duration: 1 }}>
                    <div className="text-center">
                        <h2 className="fw-bold fs-2 mb-3 text-center heading text-black pt-5">ℙ𝕣𝕠𝕛𝕖𝕔𝕥𝕤</h2>
                        <div className="timeline-container">
                            <div className="timeline-line"></div>

                            <motion.div
                                className="timeline-step glass-project"
                                initial={{ opacity: 0, y: 50 }}   // start hidden
                                whileInView={{ opacity: 1, y: 0 }} // animate when in view
                                viewport={{ once: true, amount: 0.7 }} // trigger once when 70% visible
                                transition={{ duration: 1 }}>
                                <div className="content">
                                    <h4 className=" text-bg-dark rounded-pill p-1 text-start">
                                        <a href="https://github.com/Rajarshi42/MyPortfolio">
                                            <span className="bi bi-github px-3 text-white"></span>
                                        </a>
                                        Portfolio Website
                                    </h4>
                                    <p style={{ color: "#cbdef0ff" }}>Designed and developed a modern, responsive portfolio website using React.js and Bootstrap CSS. The site highlights my professional journey. It features an intuitive layout, interactive UI elements, and form validation on the contact page, providing visitors with a seamless browsing experience across devices.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="timeline-step glass-project"
                                initial={{ opacity: 0, y: 50 }}   // start hidden
                                whileInView={{ opacity: 1, y: 0 }} // animate when in view
                                viewport={{ once: true, amount: 0.7 }} // trigger once when 70% visible
                                transition={{ duration: 1 }}>
                                <div className="content">
                                    <h4 className=" text-bg-dark rounded-pill p-1 text-start"> <a href="#Projects" style={{ pointerEvents: "none" }}><span className=" bi bi-github px-3 text-white" ></span></a>DiscRadar </h4>
                                    <p style={{ color: "#cbdef0ff" }}>DiscRadar is a life analytics and discipline tracking app that helps people moniter their daily habits, choices, and time usage in a stock-market style graph.</p>
                                    <p className=" text-dark text-start">Note: This website is not yet created. It is currently under planning.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="timeline-step glass-project"
                                initial={{ opacity: 0, y: 50 }}   // start hidden
                                whileInView={{ opacity: 1, scale: 1 }} // animate when in view
                                viewport={{ once: true, amount: 0.7 }} // trigger once when 70% visible
                                transition={{ duration: 1 }}>
                                <div className="content">
                                    <h4 className=" text-bg-dark rounded-pill p-1 text-start"><a href="#Projects" style={{ pointerEvents: "none" }}><span className=" bi bi-github px-3 text-white"></span></a>Dispatch Rasta</h4>
                                    <p style={{ color: "#cbdef0ff" }}>Dispatch Rasta is a peer-to-peer (P2P) parcel delivery platform that connects travelers with senders who want to deliver mini parcels, food, or items quickly and at a lower cost than traditional couriers.
                                        Cheaper than courier services (sender saves money).
                                        Travelers earn from their regular travel.
                                        Easy, quick, and flexible parcel delivery option.
                                    </p>
                                    <p className=" text-dark text-start">Note: This website is not yet created. It is currently under planning.</p>
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </motion.div>
            </section>
            <section className="py-5 page-4" id="Contact">
                <motion.div
                    className="container p-2 justify-content-center d-flex"
                    initial={{ opacity: 0, y: 50 }}   // start hidden
                    whileInView={{ opacity: 1, y: 0 }} // animate when in view
                    viewport={{ once: true, amount: 0.3 }} // trigger once when 50% visible
                    transition={{ duration: 1 }}>
                    <div className="glass-contact" style={{ maxWidth: "700px" }}>
                        
                        <h2 className="fw-bold fs-2 mb-4 text-center heading text-black">𝔾𝕖𝕥 𝕚𝕟 𝕥𝕠𝕦𝕔𝕙</h2>
                        <p className=" text-body px-4">* For business enquiry</p>
                        <form onSubmit={handleSubmit(submit)}>

                            {/* Name */}

                            <div className=" input-box">
                                <i className="bi bi-person"></i>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="UserName"
                                    {...register("user_name", { required: true })}
                                    className="form-control"
                                />
                                {
                                    errors.user_name?.type === "required" && (
                                        <div className="form-text text-danger">* user name is required</div>
                                    )}
                            </div>

                            {/* Email */}

                            <div className=" input-box">
                                <i className="bi bi-envelope"></i>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Email"
                                    {...register("user_email", {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9]+(\.?[a-zA-Z0-9]+)*@gmail\.com$/,
                                    })}
                                    className=" form-control"
                                />
                                {errors.user_email?.type === "required" && (
                                    <div className="form-text text-danger">* enter your email</div>
                                )}
                                {errors.user_email?.type === "pattern" && (
                                    <div className="form-text text-danger">* incorrect email</div>
                                )}
                            </div>

                            {/* Text area for message */}

                            <div className="input-box">
                                <textarea
                                    name="message"
                                    placeholder="EnterMessage..."
                                    {...register("message", { required: true })}
                                    className="form-control"
                                    rows="4"
                                />
                                {errors.message?.type === "required" && (
                                    <div className="form-text text-danger">* write message</div>
                                )}
                            </div>
                            <br />

                            <button type="submit" className="submit-btn w-100 fw-bold">
                                Submit
                            </button>
                        </form>
                    </div>
                </motion.div>
            </section>
        </>
    )
}