import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import SearchBar from './SearchBar'

export default function GenreList() {
  const [genres,setGenres]=useState([])
  //Afficher tous les books au début 
  useEffect(()=>{
    const getGenres = async()=>{
      try{
        const res = await axios.get("http://localhost:8080/api/genre/");
        setGenres(res.data);
      }
      catch(err){
        console.log(err)
      }
    };getGenres();
  },[])

  //Supprimmer un livre
  // const handleClickDelete = async (id,e) =>{
  //   console.log(id)
  //   try{
  //     await axios.delete(`http://localhost:8080/api/books/${id}`) 
  //     const res = await axios.get("http://localhost:8080/api/books/");
  //     setBooks(res.data);
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  //Mettre a jour un book
  // const [book,setBook]=useState({
  //   title:"",
  //   description:"",
  // });
  // const handleChange=(e)=>{setBook((prev)=>({...prev,[e.target.name]:e.target.value}))};
  // const handleClick = async (id,e) =>{
  //   try{
  //     console.log(book.titre)
  //     await axios.put(`http://localhost:8080/api/books/${id}`,book)
  //     const res = await axios.get("http://localhost:8080/api/books/");
  //     setBooks(res.data);
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  return (
    <div>
        <Navbar/>
       <h1>Genre List </h1> 
        <SearchBar/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>

    </tr>
  </thead>
  <tbody>
  {genres.map(genre=>(
    <tr key={genre.id}>
      <th scope="row">{genre.id}</th>
      <td>{genre.title}</td>        
    </tr>
        )
          
          )}
   
    
  </tbody>
</table>
        
    </div>
  )
}
