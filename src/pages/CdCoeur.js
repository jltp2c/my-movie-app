import React, { Fragment } from 'react';
import Navigation from '../components/Navigation';
import {useState, useEffect} from 'react'
import axios from 'axios';
import Card from '../components/Card';

function CdCoeur() {


const [listData,setListData] = useState([])

useEffect(()=>{
  let moviesId = window.localStorage.movies ? window.localStorage.movies.split(',') : []
  console.log(moviesId);

  for (let i = 0; i < moviesId.length ; i++){
  axios
  .get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=e4ac38a97a4c49236afd2027d7a1a1e1&language=fr-FR`)
  .then(res => setListData(list => [...list,res.data]))
  }

}, [])

  return (

    
    <div className='favoriteContainer'>
      <Navigation/>
      
      <div className="result">

        {
          listData.length > 0 ? (
            listData.map((movie) => <Card movie={movie} key={movie.id}/>)
          ) : (<h2> Aucun coup de coeur 💔 pour le moment </h2>)
        }
      </div>
    </div>
  
  )
}

export default CdCoeur