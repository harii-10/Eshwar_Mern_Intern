import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './slices/userslice';

function Home() {
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({ name: '', age: '' });

  function handlechange(event) {
    const { name, value } = event.target;
    setformdata((curr) => ({
      ...curr,
      [name]: value
    }));
  }

  console.log(formdata);

  const add = (event) => {
    event.preventDefault();
    dispatch(addUser(formdata));
  };
s
  return (
    <div className='home_content'>
      <h1>Home</h1>
      <form onSubmit={add}>
        <br />
        <label>Name:</label>
        <input name="name" type="text" value={formdata.name} onChange={handlechange} />
        <br />
        <br />
        <label>Age:</label>
        <input name="age" type="number" value={formdata.age} onChange={handlechange} />
        <br />
        <br />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default Home;
