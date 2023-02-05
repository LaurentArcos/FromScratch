import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Countries = () => {

  const [data, setData]= useState([]);

  useEffect (() =>{
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => setData(response.data));
  }, [])

  return (
    <div className="countries">
      <h1>COUNTRIES</h1>
      <ul>
        {data.map((country) => (
          <li key={country.name}>{country.translations.fra.commons}</li>
          ))}
      </ul>
    </div>
  );
};

export default Countries;