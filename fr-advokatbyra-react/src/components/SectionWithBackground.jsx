import React from "react";
import PropTypes from "prop-types";

const SectionWithBackground = ({ children, bgColor, padding }) => {
  return (
    <section className={`${bgColor} ${padding} w-full`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
};

SectionWithBackground.propTypes = {
  children: PropTypes.node.isRequired,  
  bgColor: PropTypes.string.isRequired, 
  padding: PropTypes.string.isRequired, 
};

export default SectionWithBackground;
