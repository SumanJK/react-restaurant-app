import React from "react";
import { useState, useEffect } from 'react';
import "./Search.css"

const Search = ({handleSearch,setPage}) => {

  let [text, setText]= useState("");

  return (
      <div className="searchDivContainer">
        <div className="searchDiv">
          <input type="text" placeholder="Search for restaurants" onChange={(e)=>{setText(e.target.value),setPage(1)}}/>
          <button onClick= {()=>handleSearch(text)}>
            <img src="https://img.icons8.com/ios-glyphs/20/000000/search--v1.png"/>
          </button>
        </div>
      </div>
  );
};

export default Search;
