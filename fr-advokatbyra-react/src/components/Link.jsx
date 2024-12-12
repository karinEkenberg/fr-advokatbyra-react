import React from "react";
import PropTypes from "prop-types";

const Link = ({ href, children, className }) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={`text-links font-bold hover:text-red-500 underline ${className}`}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Link.defaultProps = {
  className: "",
};

export default Link;
