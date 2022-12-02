import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function AddBook() {
  const [book,setBook]=useState({
    title:"",
    description:"",
  });

  const handleChange=(e)=>{setBook((prev)=>({...prev,[e.target.name]:e.target.value}))};
  const handleClick = async e =>{
    e.preventDefault()
    try{
      console.log(book.titre)
      await axios.post("http://localhost:8080/api/books/",book)
      alert("book added successfully")
    }catch(err){
      console.log(err)
    }
  }
  const [genres,setGenres]=useState([])
  const getGenres = async()=>{
    try{
      const res = await axios.get("http://localhost:8080/api/genre/");
      console.log(res.data);
      setGenres(res.data);
       console.log(genres);
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
   getGenres();
  },[])
  
  const salma = async (id,e) =>{
    try{
      console.log(id)
     
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <Navbar/>
      <h1> Add Book </h1> 
      <div class="container">
        <div class="row">
          <div class="col-sm">
          </div>
          <div class="col-sm">
          <div class="form-group row">
            <input type="text" class="form-control" placeholder="title" name="title" onChange={handleChange}></input> 
            <br />
            <input type="text" class="form-control" placeholder="description" name="description" onChange={handleChange}></input> 
            <br />
            <input type="text" class="form-control" placeholder="genreId" name="genreId" onChange={handleChange}></input> 

            {/* <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" name="genreId" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                update
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {genres.map(genre=>(<button class="form-control dropdown-item"  onClick={e => salma(genre.id)} >{genre.title}</button>))}

              </div>
            </div> */}

            <button type="submit" class="btn btn-primary" onClick={handleClick}>Add</button> 
          </div>
          </div>
          <div class="col-sm">
          </div>
        </div>
        {/* <button  class="btn btn-primary" onClick={getGenres}>Add</button>  */}

{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  {genres.map(genre=>(<a class="dropdown-item" href="#">{genre.title}</a>))}

  </div>
</div> */}

      </div>
        
       
       
    </div>
  )
}
