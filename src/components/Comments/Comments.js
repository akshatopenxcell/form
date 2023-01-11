import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/app-context';
import classes from './Comments.module.css';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';

// const DUMMY_POSTS=[
//     {
//         id:'p1',author:'person1',text:'Learning React Is Fun' ,like:false,comments:[]
//     },
//     {
//         id:'p2',author:'person2',text:'Learning Node Is Fun',like:true,comments:[]
//     },
//     {
//         id:'p3',author:'person3',text:'Learning C++ Is Fun',like:false,comments:[]
//     },
//     {
//         id:'p4',author:'person4',text:'Learning Html Is Fun',like:true,comments:[]
//     }
// ]

const Comments = (props) => {

  const appCtx=useContext(AppContext);
  let commentsOfCurrentPost=appCtx.posts[appCtx.posts.findIndex(p => p.id === props.postId)].comments;
  const [isAddingComment, setIsAddingComment] = useState(false);
 // const [commentsObj,setCommnetsObj]=     useState([]);
  const [commentsObj,setCommnetsObj]=     useState(commentsOfCurrentPost);

  const postId= props.postId;

  useEffect(()=>{
    commentsOfCurrentPost=appCtx.posts[appCtx.posts.findIndex(p => p.id === props.postId)].comments;
    setCommnetsObj(commentsOfCurrentPost);
  },[commentsOfCurrentPost])

  const startAddCommentHandler=(event)=>{
    setIsAddingComment(true);
  }

  const onAddedCommentHandler=(commentObj)=>{

    setCommnetsObj((oldState)=>{

      let index = oldState.indexOf(commentObj.commentText);
        if (index === -1) {
          return [...oldState,commentObj.commentText]
        }
        else{
          return [...oldState]
        }
        
    });

    //update comment object in store
    appCtx.addComment(props.postId,commentObj.commentText)
  }

 


  let  comments= null;

  if (commentsObj.length ===0) {
    comments= <p className='centered'>No Comments Are Added Yet</p>;
  }
  else{
    comments= <CommentsList comments={commentsObj}  postId={props.postId}></CommentsList>
  }

 

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}

    {isAddingComment && <NewCommentForm onAddedComment={onAddedCommentHandler} postId={props.postId} />}
    {comments}
    </section>
  );
};

export default Comments;
