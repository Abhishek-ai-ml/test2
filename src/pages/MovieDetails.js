import React from 'react'

const MovieDetails = (props) => {
    let movie = props.movie;
    let actorsData = props.actorsData;
    let dim = "";
    let lang = "";
    let time = "";
    let genre = "";


    movie.Languages.map( (language) => {lang+=language+", "});
    lang=lang.slice(0,-2);
    
    movie.Dimension.map( (dimension) => {dim+=dimension+", ";});
    dim=dim.slice(0,-2);
    
    movie.Genre.map( (gen) => {genre+=gen+", "});
    genre=genre.slice(0,-2);

    time+=parseInt(movie.RunTime/60);
    time+="h ";
    time+=movie.RunTime%60;
    time+="m";

    const actorsMap ={};
    actorsData.map( actor => {
        actorsMap[actor.id] = actor;
    });

  return (
    <div>
        <div className='w-9/12 mx-auto relative top-36 mb-[200px]'>
            <div className='flex w-full px-28 py-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] movie-bg group rounded-3xl transition duration-200 ease-in'>
                <div className='w-[50%]'>
                    <img src={movie.Poster} className='w-[50%] h-[300px] rounded-lg group-hover:scale-110 group-hover:translate-x-16 transition duration-200 ease-in'/>
                </div>

                <div className='flex flex-col gap-y-4 -ml-20 justify-center'>
                    <h1 className='text-3xl text-blue-900 font-extrabold group-hover:text-4xl transition-all duration-200 ease-in'>{movie.Title}</h1>

                    <div className='flex gap-x-4 items-center justify-start'>
                        <div className='px-5 py-2 border-blue-900 border-4 rounded-lg text-blue-900 font-bold group-hover:bg-blue-900 group-hover:text-white'>{dim}</div>
                        <div className='px-5 py-2 border-blue-900 border-4 rounded-lg text-blue-900 font-bold group-hover:bg-blue-900 group-hover:text-white'>{lang}</div>
                    </div>

                    <div className='text-blue-900 text-2xl font-bold'>{time}</div>

                    <div className='text-blue-900 text-xl font-bold'>{genre}</div>

                    <div>
                        <button className='text-xl text-blue-900 border-blue-900 border-4 px-5 py-2 rounded-lg font-bold group-hover:bg-blue-900 group-hover:text-white'>Book Tickets</button>
                    </div>
                </div>
            </div>

            <div className='w-9/12 mt-10 mb-10'>
                <div className='text-3xl text-blue-900 font-bold'>About the movie</div>
                <p className='text-md mt-2'>{movie.About}</p>
            </div>

            <div className='cast-container w-9/12 mt-10'>
                    <h1 className='text-3xl text-blue-900'>Cast</h1>
                    <br/>
                    <div className='flex gap-x-8 -ml-20'>
                    {
                        movie.Casts.map(actorId => (
                            <div key={actorId} className='mt-16'>
                                <img src={actorsMap[actorId].image}/>
                                <div className='cast'>{actorsMap[actorId].name}</div>
                            </div>
                        ))
                    }
                    </div>
             </div>
        </div>
    </div>
  )
}

export default MovieDetails
