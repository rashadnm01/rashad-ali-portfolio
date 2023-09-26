import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./CSS Files/Contact.css";

function Contact() {
  return (
    <section className="contact-wrap" id="Contact">
      <div className="content">
        <h1>
          Contact <span style={{ color: "#FF004F" }}>.</span>{" "}
        </h1>
        <p>
          Hey, send me an email if you want to connect! Additionally, you can
          find me on{" "}
          <a
            className="linked-in"
            href="https://www.linkedin.com/in/rashad-ali-0955ab21b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn{" "}
          </a>
          , shoot a message if you have to!
        </p>
        <a className="email" href="mailto:rashadnm01@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#FF004F", marginRight: "5px" }}
          />
          rashadnm01@gmail.com{" "}
        </a>
      </div>
    </section>
  );
}

export default Contact;
