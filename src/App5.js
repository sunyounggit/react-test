
import { useEffect, useState } from "react";
import Movie from './components/Movie';

function App4() {
    const [loading, setLoading] = useState(true);
    const [movies,setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        
        setMovies(json.data.movies)
        setLoading(false);
    };
    useEffect(()=>{
        getMovies();
    },[]);
   // const onChange = (event) => setLoading(event.target.value);
    
    return (
        <div>
            <h1>The Coins! { loading ? "" : `(${movies.length})` }</h1>
            { loading ? (<strong>Loding...</strong>
            ) : (
                <div>
                    {movies.map((movie) => (
                        <Movie coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App4;
