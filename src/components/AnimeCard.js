import { Paper, ImageListItem, Grid} from '@material-ui/core';


const AnimeCard = (props) => {
    const title = props.anime.title.slice(0,25)
    const score = props.anime.score
    const imageUrl = props.anime.images.jpg.image_url
    const rating = props.anime.rating
    const type = props.anime.type
    const episodes = props.anime.episodes
   return (
   <ImageListItem>
        <Grid container item xs={12}>
            <Paper>
                <img src={imageUrl} alt={title} style={{maxHeight: 300 }} />
                <div>
                    {title}
                </div>
                <div>
                    Score: {score}
                </div>
                <div>
                    {rating}
                </div>
                <div>
                    {type}
                </div>
                <div>
                    Episodes: {episodes}
                </div>
                <div>

                </div>
            </Paper>

        </Grid>
    </ImageListItem>
   )
};

export default AnimeCard;