import { useState } from 'react';



const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

    const [newBook, setNewBook] = useState ({
        title: '',
        author: '',

    });

    const handleInputChange = (event) => { 
        const name = event.target.name;
        const value = event.target.value;

        setNewBook({...newBook,[name]: value })
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook]);
        console.log(newBook)
        setNewBook({
            title: '',
            author: '', 
        });

            console.log(books)
    }


return (
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form will go here */}
    <form onSubmit={handleSubmit}>
      <label>Title:
      <input 
        type="text" 
        name="title" 
        value={newBook.title } 
        onChange={handleInputChange}
      />
      </label>
      <label>Author:
        <input 
          type="text" 
          name="author" 
          value={newBook.author} 
          onChange={handleInputChange}
        /> 
        </label>
        <button type="submit" >Submit</button>
    </form>
  </div>
  <div className="bookCardsDiv">
    {/* Book cards will display here */}
    {books.map((book, index) => ( <div className="bookcard" key={index}><h2>Title: {book.title}</h2><h2>Author: {book.author}</h2></div> ))}
    </div>

  
</div>
)
};

export default Bookshelf

