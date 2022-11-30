import React, {useEffect, useState} from 'react';
import AnimeCard from './AnimeCard';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import WatchList from './WatchList';

function AnimeList() {
    const [animeData, setAnimeData] = useState([]);
    const [episodeCount, setEpisodeCount] = useState(0);
    const [watchList, setWatchList] = useState([]);
    const [copyAnimeData, setCopyAnimeData] = useState([]);
    const [rating, setRating] = useState([copyAnimeData]);
    const [type, setType] = useState([copyAnimeData]);
    const [typeCat, setTypeCat] = useState("");
    const [ratingCat, setRatingCat] = useState("");


    const setData = (data) => {
        setAnimeData(data);
    };

    const onAdd = (anime) => {
        if (!watchList.includes(anime)) {
            setWatchList([...watchList, anime])
            setEpisodeCount((val) => val + anime.episodes);
        }

    };

    const onRemove = (anime) => {
        if (watchList.includes(anime)) {
            setEpisodeCount((val) => val - anime.episodes);
        }
        setWatchList(watchList.filter((x) => x.mal_id !== anime.mal_id));
    }

    function sortAsc(animeData) {
        const sortedList = [...animeData].sort((a, b) => {
            return a.score - b.score;
        })
        return setAnimeData(sortedList)
    }

    function sortDesc(animeData) {
        const sortedList = [...animeData].sort((a, b) => {
            return b.score - a.score;
        })
        return setAnimeData(sortedList)
    }



    function buttonHandler(string, num) {
        if (num === 1) {
            setRatingCat(string)

            if (type !== copyAnimeData && rating !== copyAnimeData) {
                const r = copyAnimeData.filter((x) => {return x.rating === string});
                const rr = r.filter((x) => {return x.type === typeCat});
                setRating(rr);
                return setAnimeData(rr)                

            } else {

            const r = type.filter((x) => {return x.rating === string});
            setRating(r);
            return setAnimeData(r)
            }
        } else {
            setTypeCat(string)


            if (type !== copyAnimeData && rating !== copyAnimeData) {
                const t = copyAnimeData.filter((x) => {return x.type === string});
                const tt = t.filter((x) => {return x.rating === ratingCat});
                setRating(tt);
                return setAnimeData(tt)                

            } else {

            const t = rating.filter((x) => {return x.type === string});
            setType(t);
            return setAnimeData(t);
            }
        }
    
    }

    function resetHandler() {
        setAnimeData(copyAnimeData)
        setRating(copyAnimeData)
        setType(copyAnimeData)
    }




    const search = async (i) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?&page=` + i
    );

    return await response.json();

  };

      useEffect(() => {
        var data1;
        var data2;
        var data3;
        search(1).then(json1 => {
            search(2).then(json2 => {
                search(3).then(json3 => {
                data3 = json3
                data2 = json2
                data1 = json1
                var result = {
                    'data': data1.data.concat(data2.data).concat(data3.data)
                  };
                
                var aaa = JSON.parse(JSON.stringify(result.data))
                setData(aaa)
                setCopyAnimeData(aaa)
                setType(aaa)
                setRating(aaa)

                });

                });
        });
        },
        []);

    return (
        
        <main className='block col-2'>
        <WatchList watch = {watchList} count = {episodeCount} />

            <div className='row'>
            <div>
            <h2 align="center">Sort</h2>
            <Button onClick={() => {sortDesc(animeData)}}>Descending Score</Button>
            <Button onClick={() => {sortAsc(animeData)}}>Ascending Score</Button>

            </div>
            <div>
                <h2 align="center">Filter</h2>
                Rating: 
                <Button onClick={() => {buttonHandler("PG - Children", 1)}}>PG</Button>
                <Button onClick={() => {buttonHandler("PG-13 - Teens 13 or older", 1)}}>PG-13</Button>
                <Button onClick={() => {buttonHandler("R - 17+ (violence & profanity)", 1)}}>R-17+</Button>
                <Button onClick={() => {buttonHandler("R+ - Mild Nudity", 1)}}>R+ </Button>
                <div>
                Type: 
                <Button onClick={() => {buttonHandler("TV", 2)}}>TV</Button>
                <Button onClick={() => {buttonHandler("Movie", 2)}}>Movie</Button>
                <Button onClick={() => {buttonHandler("OVA", 2)}}>OVA</Button>
                <Button onClick={() => {resetHandler()}}>Reset</Button>
                </div>
            </div>
            </div>
            <div>
                <h2></h2>
            </div>
            
            <Grid container spacing={2}>
                {animeData.map((anime) => {
                    return (
                    <Grid item>
                    <AnimeCard key={anime.mal_id} anime={anime} onAdd={onAdd}>
                    </AnimeCard>
                    <Button onClick={() => {onAdd(anime)}}>Add to Watch list</Button>
                    <div>
                    <Button onClick={() => {onRemove(anime)}}>Remove from Watch list</Button>
                    </div>
                    </Grid>                    )
                }
                )}
                
            </Grid>
        </main>

    );
};

export default AnimeList;