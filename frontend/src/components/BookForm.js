import axios from 'axios';
import React, { useState } from 'react';

const BookForm =({fetchBook})=> {
  //states
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    ISBN: '',
    genre: '',
    pubYear: '',
  });

  //onchange function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const API_URL = process.env.REACT_APP_api


  const postBook = async(newBook) => {

    const {title,author,ISBN, genre,pubYear} = newBook
    try{
      await axios.post(API_URL,{title,author,ISBN,genre,pubYear})
      fetchBook()
      setFormData({title: '',
      author: '',
      ISBN: '',
      genre: '',
      pubYear: '',})
    }
    catch(err){
      alert(err)
    }
  }

//function to submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    postBook(formData)

  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Book Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label htmlFor="ISBN">ISBN:</label>
          <input
            type="text"
            id="ISBN"
            name="ISBN"
            value={formData.ISBN}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        <div>
          <label htmlFor="pubYear">Publication Year:</label>
          <input
            type="text"
            id="pubYear"
            name="pubYear"
            value={formData.pubYear}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>

        <button type="submit" style={{ width: '100%', backgroundColor: '#007BFF', color: 'white', border: 'none', padding: '10px', cursor: 'pointer', marginTop:"20px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookForm;