import React from "react";
import { useState } from 'react';
import emailjs from "@emailjs/browser";

function ContactForm() {
  // these lines define the initial state of the form fields
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  
  function handleNameChange(event) {
    setNameTouched(true);
  }
  
  function handleEmailChange(event) {
    const value = event.target.value.trim();
    // set the email state to the value of the input field (trimmed of whitespace)
    setEmail(value);
    // set to true if a user interacts with the field, even if the field is empty/invalid
    setEmailTouched(true);
    // this line defines a regular expression pattern that matches valid email addresses
    const emailRegex = /^[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]{4,48}@[a-zA-Z0-9]{2,48}\.[a-zA-Z]{2,6}$/;
    // if regex fails, set the emailError state to an error message
    if (!emailRegex.test(value)) {
      setEmailError(
        <p>Please enter a valid email address.</p>
      );
    } else {
      setEmailError('');
    }
  }
  
  function handleMessageChange(event) {
    setMessageTouched(true);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    // this line checks if any of the required form fields are missing or invalid. 
    // if so, it exits the function and prevents the form from being submitted.
    if (emailError || !nameTouched || !emailTouched || !messageTouched) {
      return;
    }
    // this line sends the form data to the emailjs service, which will handle the email delivery.
    emailjs.sendForm("service_nf2qo65","template_5ihnr3e",event.target,"IRRuMfH4y3no3cEB8")
      .then(
        (result) => {
          // if successful
          console.log(result.text);
          window.alert("Your message has been sent successfully. I will contact you as soon as possible.");
        },
        // if there is an error
        (error) => {
          console.log(error.text);
          window.alert("There was an error sending your message. Please try again later.");
        }
      );
  }
  
  return (
    <form onSubmit={handleSubmit} className="contactFormDiv">
      {/* USER NAME INPUT  */}
      {/* the onBlur event is triggered when the user moves away from the user_name input field, and it calls the handleNameChange() to handle the change */}
      <input className="userInput" type="text" name="user_name" placeholder="Your Name Here" onBlur={handleNameChange} />
      {/* a conditional rendering that displays an error message if the name input field has not been touched by the user and is required */}
      {!nameTouched && <p className="required">* This field is required *</p>}
      
      {/* EMAIL ADDRESS INPUT */}
      {/* the onChange event is triggered when the user changes the input value, and it calls the handleEmailChange() to handle the change.  */}
      {/* the onBlur event is triggered when the user moves away from the input field, and it also calls the handleEmailChange() */}
      <input className="emailInput" type="email" name="user_email" placeholder="Your Email Here" value={email} onChange={handleEmailChange} onBlur={handleEmailChange} />
      {/* this is where invalid email addresses are handled */}
      {emailError && <p className="error">{emailError}</p>}
      {/* this is a conditional rendering that displays an error message if the email input field has not been touched by the user and is required. */}
      {!emailTouched && <p className="required">* This field is required *</p>}
      
      {/* MESSAGE INPUT */}
      {/* the onChange event is triggered when the user changes the input value, and it calls the handleMessageChange() to handle the change. */}
      {/* the onBlur event is triggered when the user moves away from the input field, and it also calls the handleMessageChange function. */}
      <textarea className="messageInput" name="message" placeholder="Type a message" onChange={handleMessageChange} onBlur={handleMessageChange} />
      {/* this is a conditional rendering that displays an error message if the message textarea field has not been touched by the user and is required. */}
      {!messageTouched && <p className="required">* This field is required *</p>}
      
      {/* submit button */}
      <input type="submit" value="Send" className="btn" />
    </form>
  );
}

const Contact = () => {
  return (
    <section id="contact" className="wrapper">
      <h2 className="sectionTitle">Contact</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;