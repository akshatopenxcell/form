import './App.css';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";


//import BasicForm from './components/Form/BasicForm';
//import Layout from './components/layout/Layout';
//import Posts from './components/posts/posts';
//import PostDetails from './components/posts/postdetails';


const Layout= React.lazy(()=> import('./components/layout/Layout')) ;
const BasicForm= React.lazy(()=> import('./components/Form/BasicForm')) ;
const Posts= React.lazy(()=> import('./components/posts/posts')) ;
const PostDetails= React.lazy(()=> import('./components/posts/postdetails')) ;


function App() {
  return (
    <Layout>

      <Suspense fallback={<div className="centered">Loading...</div>}>
      <Switch>
        
        <Route path='/' exact>
          <Redirect to='/newuser'></Redirect>
        </Route>

        <Route path='/newuser' exact>
         <BasicForm></BasicForm>
        </Route>

        <Route path='/posts' exact>
          <Posts></Posts>
        </Route>

        <Route path='/post/view/:postId'>
            <PostDetails></PostDetails>
        </Route>
        
        <Route path='*'>
          <Redirect to='/newuser'></Redirect>
        </Route>
      </Switch>
     
      </Suspense>
    </Layout>
  );
}

export default App;
