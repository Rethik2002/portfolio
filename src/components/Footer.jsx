import React from "react";
import { ContactList } from "../Data/ContactList";
import "../Styles/Footer.css";
import { IoMdHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <h2>GET IN TOUCH</h2>
      <div className="contacts">
        {ContactList.map((contact) => {
          return (
            <a
              key={contact.id}
              className="contact_icon"
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.icon}
            </a>
          );
        })}
      </div>
      <p>
        made with <IoMdHeart className="love" /> by Rethik
      </p>
    </footer>
  );
};

export default Footer;
