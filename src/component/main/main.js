import React, { useEffect, useState } from 'react'
function Main() {
    const [movie, setMovie] = useState([]);
    
    useEffect(()=>{
        fetch('https://www.omdbapi.com/?s=fast&apikey=f03ebcd4')
        .then(res => res.json())
        .then(data => {
            setMovie(data.Search);
        })
    }, [])

  return (
    <>
        <div className='mainBox'>  
            {movie.length > 0 && movie.map((mov) =>     
            (<div>
                <img src={mov.Poster}/>
                <div className='pBox'>
                <p>Title: {mov.Title}</p>
                </div>
            </div>)
            )}
        </div>
    </>
  )
}

export default Main;