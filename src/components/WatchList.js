import React from 'react';




function WatchList(props) {


    const watchList = props.watch
    const episodeCount = props.count
    
    return (
    <aside className="block col-1">
    <h2>Watch List</h2>
    <div>
        {watchList.length ? (
        <>
            {watchList.map((anime) => (
                <p>
                    {anime.title}: {anime.episodes}
                </p>
            ))}
            <h3>Total Episodes: {episodeCount}</h3>
            </>
        ) : (
            <h3>No anime added yet</h3>
        )}
        
        
    </div>
    
    </aside>

    )
}


export default WatchList;