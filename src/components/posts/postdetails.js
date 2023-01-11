import { useContext } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import AppContext from '../../context/app-context';
import Comments from '../Comments/Comments';
import classes from './postdetails.module.css';

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


const PostDetails = (props)=>{

    const appCtx=useContext(AppContext);
    const params= useParams();
    const {postId} = params;
    const match=  useRouteMatch();
    const path=match.url+'/comments'

    const post= appCtx.posts.find( (post)=> post.id ===postId)

   
    return (
        <>
        <h1 >{post.title}</h1>
        <figure className={classes.quote}>
        <p>{post.text}</p>
        <figcaption>{post.author}</figcaption>
        </figure>
        
        <Route path={match.url} exact>
            <div className="centered">
                <Link className="btn--flat" to={path}>Load Comments</Link>
            </div>
        </Route>

        <Route path={path}>
            <Comments postId={postId}></Comments>
        </Route>
        </>
    )
}

export default PostDetails;