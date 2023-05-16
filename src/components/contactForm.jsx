import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function ContactForm() {
  const [state, handleSubmit] = useForm("mwkjzeya");
  if (state.succeeded) {
    return <p>Thanks contacting me, I will get back to you as soon as possible!</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control id="name" type="text" name="name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label htmlFor="message">Message</Form.Label>
        <Form.Control as="textarea" id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </Form.Group>
      <Button type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
