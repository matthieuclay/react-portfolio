import React from "react";

const SocialNetwork = () => {
  const magnetEffect = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((icon) => {
      icon.addEventListener("mouseover", (e) => {
        icon.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      icon.addEventListener("mouseleave", () => {
        icon.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={magnetEffect}
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={magnetEffect}
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={magnetEffect}
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
