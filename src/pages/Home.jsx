import React, { useState } from 'react'
import '../styles/home.css';

const Home = () => {
  const [formd, fillForm] = useState({ title: "", description: "", status: "ACTIVE" });
  const formSubmit = async (e) => {
    e.preventDefault();
    let data = await fetch('https://mcs-intern-backend.onrender.com/api', {
      method: "post",
      body: JSON.stringify(formd),
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    })
    let result = await data.json();
    if (result) {
      alert("Form submitted successfully...");
      fillForm({
        title: "",
        description: "",
        status: ""
      })
    }
    window.location.reload(true);
  }
  const infoFill = (e) => {
    fillForm((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value
      }
    })
  }
  return (
    <div className='body'>
      <div className="note">PLEASE CLICK <span style={{marginLeft: "6px", marginRight: "6px"}}><a style={{ textDecoration: "none" }} href='/tasks'> HERE </a></span> TO SEE TASKS!</div>
      <div className='form'>
        <form onSubmit={formSubmit} className='form-in'>
          <input type='text' value={formd.title} name="title" placeholder='Title...' autoComplete='off' onChange={infoFill} className='title' required />
          <input type='text' value={formd.description} name="description" placeholder='Description...' autoComplete='off' onChange={infoFill} className='description' required />
          <input type='submit' value="Add task" className='btnsubmit'/>
        </form>
      </div>
    </div>
  )
}

export default Home