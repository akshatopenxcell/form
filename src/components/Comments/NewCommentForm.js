import {  useRef } from 'react';
import classes from './NewCommentForm.module.css';




const NewCommentForm = (props) => {

  const commentTextRef = useRef();

  

  const submitFormHandler = (event) => {
    event.preventDefault();

   
    const commentText= commentTextRef.current.value; 
    const postId= props.postId;
    
    props.onAddedComment({id:postId,'commentText':commentText});
    commentTextRef.current.value=''
    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
