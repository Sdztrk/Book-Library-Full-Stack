import './App.css';
import BookForm from './components/BookForm';
import BookTable from './components/BookTable';
import axios from 'axios';
import { useEffect,useState } from 'react';


function App() {

  const [books, setBooks] = useState([])

  //api is in .env file
  const API_URL = process.env.REACT_APP_api
  

  //getting all books 
      const fetchBook = async () => {
          const data = await axios.get(API_URL)
          // console.log(data.data.result.rows)
          const fetchedBooks = data.data.result.rows;
          setBooks(fetchedBooks)
      }
      useEffect(() => {
        fetchBook()
    }, [])

  return (
    <div className="App">
      <BookForm fetchBook={fetchBook}  />
      <BookTable books={books} fetchBook={fetchBook}/>
    </div>
  );
}

export default App;
