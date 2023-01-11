import { Fragment,useContext } from 'react';
import AppContext from '../../context/app-context';
import PostItem from './postitem';
import classes from './posts.module.css';

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


const Posts = (props) => {



  const appCtx=useContext(AppContext);

    return (
      <Fragment>
       
        <ul className={classes.list}>
          {appCtx.posts.map((post) => (
            <PostItem
              key={post.id}
              id={post.id}
              author={post.author}
              text={post.text}
              like ={post.like}
              title= {post.title}
            />
          ))}
        </ul>
      </Fragment>
    );
  };
  
  export default Posts;
  