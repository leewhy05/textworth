import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


const Form = () => {
    const [state, handleSubmit] = useForm("odutayoayomide85@gmail.com");
    if (state.succeeded) {
        return <p>Thanks for Booking!</p>;
    }
  return (
    <div>
       <form  action="https://formspree.io/odutayoayomide85@gmail.com"
  method="POST">
       <label>
    Your email:
    <input type="email" name="email"/>
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <button type="submit">Send</button>
       </form>
    </div>
  )
}

export default Form