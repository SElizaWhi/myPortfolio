import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/contactForm";
import "./contact.css"
import Card from "react-bootstrap/Card";


function Contact() {
  return (
    <section>
      <div className="container text-center">
        <Link to="https://www.linkedin.com/in/sophie-e-white/">
          <img src="/images/LinkedIn_logo_initials.png" alt="LinkedIn" />
        </Link>
        <Link to="https://www.linkedin.com/in/sophie-e-white/">
          <img src="/images/github.png" alt="LinkedIn" />
        </Link>
        <br />
        <br />
        <Card style={{ width: "20rem" }}>
          <Card.Header>Contact me!</Card.Header>
          <ContactForm />
        </Card>
      </div>
    </section>
  );
}

export default Contact;
