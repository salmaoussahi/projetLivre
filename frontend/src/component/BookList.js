import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import SearchBar from './SearchBar'

export default function BookList() {
  const [books,setBooks]=useState([])
  //Afficher tous les books au début
  useEffect(()=>{
    const getBooks = async()=>{
      try{
        const res = await axios.get("http://localhost:8080/api/books/");
        setBooks(res.data);
      }
      catch(err){
        console.log(err)
      }
    };getBooks();
  },[])

  //Supprimmer un livre
  const handleClickDelete = async (id,e) =>{
    console.log(id)
    try{
      await axios.delete(`http://localhost:8080/api/books/${id}`) 
      const res = await axios.get("http://localhost:8080/api/books/");
      setBooks(res.data);
    }catch(err){
      console.log(err)
    }
  }

  //Mettre a jour un book
  const [book,setBook]=useState({
    title:"",
    description:"",
  });
  const handleChange=(e)=>{setBook((prev)=>({...prev,[e.target.name]:e.target.value}))};
  const handleClick = async (id,e) =>{
    try{
      console.log(book.titre)
      await axios.put(`http://localhost:8080/api/books/${id}`,book)
      const res = await axios.get("http://localhost:8080/api/books/");
      setBooks(res.data);
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
        <Navbar/>
       <h1>Book List </h1> 
        <SearchBar/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {books.map(book=>(
             <tr key={book.id}>
      <th scope="row">{book.id}</th>
      <td>{book.title}</td>
      <td>{book.description }</td>
      <td>
      <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
        Update
      </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Update Book</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <div class="form-group row">
              <input type="text" class="form-control" placeholder="title" name="title" onChange={handleChange}></input> 
              <input type="text" class="form-control" placeholder="description" name="description" onChange={handleChange}></input> 
              <input type="text" class="form-control" placeholder="genreId" name="genreId" onChange={handleChange}></input> 
              </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary" onClick={e => handleClick(book.id)}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <button type="button" onClick={e => handleClickDelete(book.id)} class="btn btn-danger">Delete</button>
      </td>
    </tr>
        )
          
          )}
   
    
  </tbody>
</table>
        
    </div>
  )
}
