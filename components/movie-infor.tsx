import styles from "../styles/movie-info.module.css";

const URLs = "https://nomad-movies.nomadcoders.workers.dev/movies/";

export async function getMovieInfor(id : string) {
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`${URLs}${id}`);
    const json = await response.json();
    return json;
}

export default async function MovieInfor({id}:{id:string}){
    const movie = await getMovieInfor(id);
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
                <p>{movie.overview}</p>
                <a href={movie.homepage} target="_blank">Hompage &rarr;</a>
            </div>

        </div>
    );
}