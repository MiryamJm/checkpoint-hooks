import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
const MovieCard = ({movie}) => {
  return (
    <div>
        <div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={movie.main_img}/>
      <h1>{movie.title}</h1>
      <StarRatingComponent
        name="ratel"
        starCount={5}
        value={movie.rate}
      /><br/>
      <span class="minutes">{movie.duration}</span>
      <p class="type">{movie.genre}</p>
    </div>
    <div class="movie_desc">
      <p class="text">
        {movie.description}
      </p>
    </div>
   
  </div>
  <div class="blur_back "></div>
</div>
    </div>
  )
}

export default MovieCard