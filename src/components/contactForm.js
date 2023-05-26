import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';


function ContactForm() {
  return (
    <Form className='form'>
    <Form.Label className="contactTitle">Contact Form</Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="inputText"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword" >
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="password" placeholder="Email" className="inputText"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" className="formText" />
      </Form.Group>
      <Button variant="secondary" type="submit" className='formButton' size="lg">
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;