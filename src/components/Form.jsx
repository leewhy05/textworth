import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';



const Form = ({closeModal}) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', selectedDate: null, selectedTime: "12:00" });
  const [showModal, setShowModal] = useState(false);
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
        toast.success('Form submitted successfully!'); closeModal(false); // Close the modal after successful form submission
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
      <label className='fw-bold fs-4 text-danger'>NAME:</label><br />
      <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

      <label className='fw-bold fs-4 text-danger'>EMAIL:</label><br />
      <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

      <label className='fw-bold fs-4 text-danger'>PHONE NUMBER:</label><br />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required /><br /><br />

      <label className='fw-bold fs-4 text-danger'>SELECT DATE:</label><br />
      <DatePicker selected={formData.selectedDate} onChange={handleDateChange} dateFormat="dd/MM/yyyy" /><br /><br />
      <label className='fw-bold fs-4 text-danger'>SELECT TIME:</label>
<TimePicker
  onChange={(time) => setFormData({ ...formData, selectedTime: time })}
  value={formData.selectedTime}
/> <br /> <br />


      <button type="submit" className='fw-bold bg-primary rounded text-white fs-4'>Submit</button>
    </form>
    </div>
  )
}

export default Form