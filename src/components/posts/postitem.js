import { Link } from 'react-router-dom';
import classes from './postitem.module.css';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useContext, useState } from 'react';
import AppContext from '../../context/app-context';


const PostItem = (props) => {

  const appCtx=useContext(AppContext);
  const [isLiked,setIsLiked]=useState(props.like);
  const path='/post/view/' +props.id;

  const likeHandler=()=>{
    setIsLiked(!isLiked);
    //also need to change in store'data
    appCtx.toggleFav(props.id)
  }

  const btntext= (!isLiked  ?  'Like': 'Unlike');
  const btnIcon= (!isLiked  ?  <FavoriteBorderIcon />: <FavoriteIcon className={classes.favoriteicon}/>);

  return (
  
    <div className={classes.card}>
    <Link to={path} style={{textDecoration: 'none'}}>
      <li className={classes.item}>
        <figure>
          <blockquote>
            <p>{props.title}</p>
          </blockquote>
          <figcaption>{props.author}</figcaption>
        </figure>

      </li>
    </Link>

    {/* {!isLiked  && <Button onClick={likeHandler} variant="outlined" startIcon={<FavoriteBorderIcon />}>Like</Button>}
    {isLiked  && <Button onClick={likeHandler}  variant="outlined" startIcon={<FavoriteIcon />}>UnLike</Button>}
     */}
     
     <Button onClick={likeHandler}  variant="outlined" startIcon={btnIcon}>{btntext}</Button>
    </div>

  );
};

export default PostItem;
