
//https://nomad-movies.nomadcoders.workers.dev/

import internal from "stream";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";
import MovieInfor, { getMovieInfor } from "../../../../components/movie-infor";

// export const metadata = {
//     title: "MOIVES"
// };


interface IPraams {
    params: {id:string};   
    searchParams:{word:string}; 
}

export async function generateMetadata( {
    params:{id},
    searchParams:{word}
} : IPraams ){
    
    const movie = await getMovieInfor(id);

    return {

        title: movie.title
    }

}

export default async function Page({
    params:{id},
    searchParams:{word}
}: IPraams ){

    //===이러면 순차의 진행이기 때문에 총 6초 즉 직열 방식이 된다. 걸리는 시간 두배
    //const movie = await getMovieInfor(id);
    //  const videos = await getVideoInfor(id);

    //=== 병렬 처리 방식 한번에 여러개를 동시에 가져올수 있다. 아마도 async를 여러개 불러올 경우 한번에 처리하기 위한 방법인듯...
    //const [movie, videos] = await Promise.all([getMovieInfor(id), getVideoInfor(id)]);
    
    return (
        <div>
            <Suspense fallback={<h1>Loading movie infor</h1>}>
                <MovieInfor id={id}/>
            </Suspense>
            <Suspense fallback={<h1>Loading video infor</h1>}>
                <MovieVideos id={id}/>
            </Suspense>
        </div>
    );
}