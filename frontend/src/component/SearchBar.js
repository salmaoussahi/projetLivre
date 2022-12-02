import React from 'react'

export default function SearchBar() {
    
  return (
    <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Genre" aria-label="Genre"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

    <input class="form-control mr-sm-2" type="search" placeholder="Livre" aria-label="Livre"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  )
}
