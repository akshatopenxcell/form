import CommentItem from './CommentItem';
import classes from './CommentsList.module.css';

const CommentsList = (props) => {
  
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        // <CommentItem key={comment.id} commentText={comment.commentText} />
        <CommentItem  commentText={comment}  postId={props.postId}/>
      ))}
    </ul>
  );
};

export default CommentsList;
