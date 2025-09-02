import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Reusable Image component with tilt effect
function Image3DTilt({ src, alt }) {
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element

    // calculate rotation between -15deg to +15deg based on cursor position
    const rotateX = ((y / rect.height) - 0.5) * -30; // inverted for natural tilt
    const rotateY = ((x / rect.width) - 0.5) * 30;

    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className="m-3"
      style={{
        perspective: '700px',
        width: '300px',
        height: '300px',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '85%',
          height: '85%',
          borderRadius: '15px',
          boxShadow: '0 20px 30px rgba(0,0,0,0.3)',
          transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
          transition: 'transform 0.1s ease',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

// Parent Section
function Page3() {
  return (
    <section
      className="py-5 page-3"
      id="Skills"
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}   // start hidden
        whileInView={{ opacity: 1, y: 0 }} // animate when in view
        viewport={{ once: true, amount: 0.1 }} // trigger once when 50% visible
        transition={{ duration: 1 }}>
        <motion.h1
          className="fw-bold fs-2 mb-4 text-center heading text-black w-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 2 }}
        >
          𝕊𝕜𝕚𝕝𝕝𝕤
        </motion.h1>
        <div className="text-center">
          <div className="d-flex flex-wrap justify-content-around">
            <Image3DTilt src="html.png" alt="HTML" />
            <Image3DTilt src="CSS.png" alt="CSS" />
            <Image3DTilt src="bootstrap.png" alt="Bootstrap" />
            <Image3DTilt src="js.png" alt="JavaScript" />
            <Image3DTilt src="react.png" alt="React" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Page3;
