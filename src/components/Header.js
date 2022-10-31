import axios from 'axios';
import {useEffect, useState}from 'react';
import Card from './Card';

function Header() {


  const [data,setData] = useState([]);
  const [input,setInput] = useState("a");
  const [buttonNote, setButtonNote] = useState("topMovie")


  useEffect( () =>{ 
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e4ac38a97a4c49236afd2027d7a1a1e1&language=fr-FR&query=${input}&page=1`)
      .then(res => {
         setData((res.data.results)) 
      })
  
  },[input])

  return (
    <div className='headerContainer'>
        <h1>Bibliothèque de film</h1>
        <input 
        type="text" 
        placeholder='Recherche ton film'
        onChange={(e)=>setInput(e.target.value)}
        />
        <div className="buttons">
          <button id='topMovie' onClick={()=>setButtonNote('topMovie')}>Top ↑ </button>
          <button id='badMovie'onClick={()=>setButtonNote('badMovie')}>Flop ↓ </button>
        </div>
        <div className="containerCards">

          {
              data.slice(0,24)
              .sort((a,b) => {
                if (buttonNote === "topMovie"){
                
                  return b.vote_average - a.vote_average
                  
                } else if (buttonNote === "badMovie"){
              
                  return a.vote_average-b.vote_average 
               
                }
              })
              .map((movie) => <Card key={movie.id} movie={movie}/>)
          }
      </div>
         
        
    </div>
  )
}

export default Header