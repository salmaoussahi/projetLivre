import React from 'react'
import login from '../login.png'
import register from '../register.png'
import { Routes, Route, Link } from "react-router-dom";


export default function FirstPage() {
  return (
    <div>
        <div class="container text-center">


            <h1>Book application</h1>
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
                        <h5 class="card-title">Sign In</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Sign into your account</h6>
                        <img src={login} style={{width:50+'%'}}/>
                        <Link to={"/signin"} className="nav-link">
                         Click here
                        </Link>
                        
                    </div>
                    </div>
                </div>
                <div class="col">
                <div class="card" style={{width:100+'%'}}>
                    <div class="card-body">
                        <h5 class="card-title">Register</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Create Account</h6>
                        <img src={register} style={{width:50+'%'}}/>
                        <Link to={"/register"} className="nav-link">
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
