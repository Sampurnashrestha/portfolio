import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <div className='contact_h1'>Contact</div>
      <form>
        <div className='uppercontact'>
          <label htmlFor="name">Name: </label>
          <input type="text" placeholder="Enter your Name " required />
          <label htmlFor="address">Address: </label>
          <input type="text" placeholder="Enter your Address" required />
          <label htmlFor="email"> Email: </label>
          <input type="email" placeholder="Enter your Email " required />
          <br />
        </div>
        <div className='lowwercontact'>
        <label htmlFor="message">Message: </label>
        <textarea placeholder="Message for me" required />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact
