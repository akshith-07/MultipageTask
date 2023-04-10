
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
function Rick() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ricky">
      <h1>Rick n Morty</h1>
        <Link to='/'>
            <button className='button'>Move to Profile</button>
        </Link>
         <Link to='/calculator'>
            <button className='button1'>Move to Calculator</button>
        </Link>
      {Data?.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt="" />
          <p>Name: {character.name}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
      ))}
    </div>
  );
}

export default Rick