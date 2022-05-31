import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from '../components/Movie';

function Detail(){
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie,setMovies] = useState([]);
    const getMovie = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        
        setMovies(json.data.movie)
        setLoading(false);
    };
    useEffect(()=>{
        getMovie();
    },[]);
    return (
        <div>
            { loading ? (<strong>Loding...</strong>
            ) : (
                <Movie id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.description_full} genres={movie.genres} />
            )}
        </div>
    );
}
export default Detail;