import "./FormStyles.css"


import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://formsubmit.co/nhlalala60@gmail.com" method="POST">
            <label>Your Name</label>
            <input type="text" name="name" required></input>
            <label>Email</label>
            <input type="email" name="email" required></input>
            <label>Subject</label>
            <input type="text" name="subject" required></input>
            <input type="hidden" name="_subject" value="Portfolio Website submission!"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" required/>

            <button className="btn" type="submit">Submit</button>
        </form>

       
      
    </div>
  )
}

export default Form;
