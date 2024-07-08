import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title: "HOME"
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}


export default async function HomePage(){
    // const [isLoading, setIsLoading] = useState(true);
    // const [movies, setMovies] = useState([]);
    // const getMovies = async () => {
    //     const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    //     const json = await response.json();
    //     setMovies(json);
    //     setIsLoading(false);
    // }
    
    // useEffect(() => {
    //     getMovies();
    // }, []);

    
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {
                movies.map(movie => 
                    (
                        //<li key={movies.id}><Link href={`/movies/${movies.id}`}>{movies.title}</Link> </li>
                        // <div key={movies.id}>
                        //     <img src={movies.poster_path} alt={movies.title} />
                        //     <Link href={`/movies/${movies.id}`}>{movies.title}</Link>
                        // </div>
                        
                        <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
                    )
                )
            }
        </div>
    );
} 