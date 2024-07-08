import styles from "../styles/movie-video.module.css";


const URLs = "https://nomad-movies.nomadcoders.workers.dev/movies/";
async function getVideoInfor(id : string) {
    //await new Promise((resolve) => setTimeout(resolve, 3000));
    //throw new Error("aaa");
    const response = await fetch(`${URLs}${id}/videos`);
    const json = await response.json();
    return json;
}

export default async function MovieVideos({id}:{id:string}){
    const videos = await getVideoInfor(id);
    return (
        <div className={styles.container}>
            {
                videos.map( data => (
                    <iframe key={data.id} src={`https://www.youtube.com/embed/${data.key}`} title={data.title} allow=""></iframe>
                ) )
            }
        </div>
    );
}