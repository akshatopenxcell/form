import { Button } from '@mui/material';
import classes from './CommentItem.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AppContext from '../../context/app-context';
import { useContext } from 'react';

const CommentItem = (props) => {

  const appCtx=useContext(AppContext);
  const onDeleteComment = ()=>{
    appCtx.removeComment(props.postId,props.commentText)
}

  return (
    <li className={classes.item}>
      <p className={classes.comment}>{props.commentText}{<Button className={classes.deletecomment} variant="outlined" startIcon={<DeleteIcon />} onClick={onDeleteComment}> Delete</Button>}</p>
     
      
    </li>
  );
};

export default CommentItem;
