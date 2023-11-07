import axios from 'axios';

const BookTable = ({books,fetchBook}) => {
 

  const API_URL = process.env.REACT_APP_api


    const handleDelete = async (id) => {
        try {
            await axios.delete(` ${API_URL}/${id}`)
        }
        catch (err) {
            console.log(err)
        }
        fetchBook()
    }

//styling
    const tableHeaderStyle = {
        padding: '10px',
        fontWeight: 'bold',
      };
      
      const tableCellStyle = {
        padding: '10px',
        border: '1px solid #ddd',
      };
      const actionButtonStyle = {
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        margin: '0 5px',
      };

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "50px" }}>
        <table style={{ borderCollapse: 'collapse', width: '80%', textAlign: 'center', borderRadius: '5px' }}>
          <thead style={{ backgroundColor: '#007BFF', color: 'white' }}>
            <tr>
              <th style={tableHeaderStyle}>Title</th>
              <th style={tableHeaderStyle}>Author</th>
              <th style={tableHeaderStyle}>ISBN</th>
              <th style={tableHeaderStyle}>Genre</th>
              <th style={tableHeaderStyle}>Publication Year</th>
              <th style={tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={tableCellStyle}>{book.title}</td>
                <td style={tableCellStyle}>{book.author}</td>
                <td style={tableCellStyle}>{book.ISBN}</td>
                <td style={tableCellStyle}>{book.genre}</td>
                <td style={tableCellStyle}>{book.pubYear}</td>
                <td style={tableCellStyle}>
                <button style={actionButtonStyle} onClick={() => handleDelete(book.id)} >Delete </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default BookTable