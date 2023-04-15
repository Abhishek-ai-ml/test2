import React from 'react'

const MovieDetails = (props) => {
    let movie = props.movie;
  return (
    <div>
      <div>
            <div>
                <img src={movie.Poster}/>
            </div>
            
            <div></div>
      </div>
    </div>
  )
}

export default MovieDetails
