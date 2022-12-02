import React from 'react'
import {Link } from "react-router-dom";
import Navbar from './Navbar'


export default function Admin() {
  return (
    <div>
        <div class="container text-center">

        <Navbar/>

            
        <br/>
            <br/>
            <br/>
          <h1>Espace admin</h1>
        
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div class="row">
                <div class="col">
                <div class="card" style={{width:100+'%'}}>
                    <div class="card-body">
                        <h5 class="card-title">Add book</h5>
                        <Link to={"/add"} className="nav-link">
                         Click here
                        </Link>
                        
                    </div>
                    </div>
                </div>
                <div class="col">
                <div class="card" style={{width:100+'%'}}>
                    <div class="card-body">
                        <h5 class="card-title">Book list</h5>
                        <Link to={"/book"} className="nav-link">
                         Click here
                        </Link>
                    </div>
                </div>
                </div>
            </div> 
            <br/>
            <br/>
            <br/>
            <div class="row">
                <div class="col">
                <div class="card" style={{width:100+'%'}}>
                    <div class="card-body">
                        <h5 class="card-title">Add genre</h5>
                        <Link to={"/addGenre"} className="nav-link">
                         Click here
                        </Link>
                        
                    </div>
                    </div>
                </div>
                <div class="col">
                <div class="card" style={{width:100+'%'}}>
                    <div class="card-body">
                        <h5 class="card-title">Genre list</h5>
                        <Link to={"/genre"} className="nav-link">
                         Click here
                        </Link>
                    </div>
                </div>
                </div>
            </div>   
        </div>
    </div>
  )
}
