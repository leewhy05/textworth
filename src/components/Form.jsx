import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', selectedDate: null });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xpwazepj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Form submitted successfully!');
      } else {
        toast.error('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date });
  };
  return (
    <div>
       <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

      <label>Phone Number:</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required /><br /><br />

      <label>Select Date:</label>
      <DatePicker selected={formData.selectedDate} onChange={handleDateChange} dateFormat="dd/MM/yyyy" /><br /><br />

      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Form