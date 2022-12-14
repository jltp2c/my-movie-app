import {toast} from 'react-toastify';
import ReactTooltip from 'react-tooltip';

const Card= ({movie}) => {

const dateFormater = (date) => {
  let [YY, MM,DD]= date.split('-');
 return [DD,MM,YY].join("/")
}

const movieGenres = () =>{
  let genreArray = [];
  for (let i = 0; i < movie.genre_ids.length; i++){
    switch (movie.genre_ids[i]){
      case 28 : 
      genreArray.push("Action");
      break
      case 12 : 
      genreArray.push("Aventure");
      break
      case 16 : 
      genreArray.push("Animation");
      break
      case 35 : 
      genreArray.push("Comedie");
      break
      case 80 : 
      genreArray.push("Policier");
      break
      case 99 : 
      genreArray.push("Documentaire");
      break
      case 18 : 
      genreArray.push("Action");
      break
      case 10751 : 
      genreArray.push("Famille");
      break
      case 14 : 
      genreArray.push("Fantasie");
      break
      case 36 : 
      genreArray.push("Histoire");
      break
      case 27 : 
      genreArray.push("Horreur");
      break
      case 10402 : 
      genreArray.push("Musique");
      break
      case 9648 : 
      genreArray.push("Mystère");
      break
      case 10749 : 
      genreArray.push("Romance");
      break
      case 878 : 
      genreArray.push("Science Fiction");
      break
      case 10770 : 
      genreArray.push("TV movie");
      break
      case 53 : 
      genreArray.push("Thriller");
      break
      case 10752 : 
      genreArray.push("Guerre");
      break
      case 37 : 
      genreArray.push("Western");
      break
      default:
      break
    }
  }
  return genreArray.map((genre) => <li>{genre}</li>)
}



const toggleFav = () => {
  let storedData = window.localStorage.movies ? window.localStorage.movies.split(',') : [];
  if(!storedData.includes(movie.id.toString())){
    storedData.push(movie.id)
  }
  window.localStorage.movies = storedData; 
}


const deleteToggle = () => {
  let storedData =  window.localStorage.movies.split(',');
  let newData = storedData.filter((id)=> id != movie.id)
  window.localStorage.movies = newData
}

const notify = () => {
  toast.success(`"${movie.title}" a été ajouté en favoris !`)
}


return (
    <div className='Card'>
    {
      movie.genre_ids ? <img data-tip="Ajouter !" onClick={()=>{toggleFav() ; notify()}} className="favorite" src="./img/coeurn.png"/> 
      : 
      <img 
        data-tip="Supprimer !"
        onClick={()=>{
        deleteToggle();
        window.location.reload()
        }}
        className="favorite" src="./img/coeur.png"/>
    }
    <ReactTooltip place='left' effect='solid' type='light'/>
     <img className="poster" src={movie.poster_path?"https://image.tmdb.org/t/p/w500/"+movie.poster_path:"./img/film.png"} alt={`poster of ${movie.title}`}/>
     <h1>{movie.title}</h1>
     <p>Date de sortie : { movie.release_date? dateFormater(movie.release_date) : "Pas de date"} </p>
     <h2>{movie.vote_average.toFixed(1)}/10 ⭐ </h2>
     <h3> <span>Synopsis :</span><br/> <br/> {movie.overview ? movie.overview : "Not found"}</h3>
     <ul> 

       {
         movie.genre_ids ? movieGenres() : movie.genres.map((genre) => (<li key={genre}>{genre.name}</li>))
       }
       
     </ul>
    
    
     
    </div>
  )
}

export default Card