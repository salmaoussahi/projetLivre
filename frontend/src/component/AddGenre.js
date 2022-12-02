import React,{useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'


export default function AddGenre() {
    const [genre,setGenre]=useState({
        title:"",
      });

      const handleChange=(e)=>{setGenre((prev)=>({...prev,[e.target.name]:e.target.value}))};
      const handleClick = async e =>{
        e.preventDefault()
        try{
          await axios.post("http://localhost:8080/api/genre/",genre)
          alert("Genre added successfully")
        }catch(err){
          console.log(err)
        }
      }
  return (
    <div>
        <Navbar/>
      <h1> Add Genre </h1> 
      <div class="container">
        <div class="row">
          <div class="col-sm">
          </div>
          <div class="col-sm">
          <div class="form-group row">
            <input type="text" class="form-control" placeholder="title" name="title" onChange={handleChange}></input> 
            <br />
           
            <button type="submit" class="btn btn-primary" onClick={handleClick}>Add</button> 
          </div>
          </div>
          <div class="col-sm">
          </div>
        </div>
      </div>
    </div>
  )
}
