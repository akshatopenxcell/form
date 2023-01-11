import React, { useCallback, useEffect, useState } from "react";

export const AppContext = React.createContext({
    posts: [],
    users: [],
    userLoggedIn:false,
    toggleFav: (postId) => { },
    addComment:(postId,commentData) =>{ },
    removeComment:(postId,commentData) =>{ },
});



export const AppContextProvider = (props) => {

    const [postList, setProductsList] = useState([
        {
            id: 'p1',
            title: 'Green mouse',
            text: 'A Green Mouse.',
            author: 'Mouse',
            like: false,
            comments: []
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            text: 'A pretty blue t-shirt.',
            author: 'Blue',
            like: false,
            comments: []
        },
        {
            id: 'p3',
            title: 'Yellow Sun light',
            text: 'Yellow sun light with wind',
            author: 'Sun',
            like: true,
            comments: []
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            text: 'Street style! An orange hat.',
            author: 'hat',
            like: false,
            comments: []
        },
        {
            id: 'p5',
            title: 'Teal coloured sea',
            text: 'Teal coloured sea with beautiful mountains',
            author: 'Teal',
            like: true,
            comments: []
        },
        {
            id: 'p6',
            title: 'Black Sheep',
            text: 'A black sheep is roaming in shipyard',
            author: 'Black',
            like: true,
            comments: []
        },
        {
            id: 'p7',
            title: 'Ocean Pink',
            text: 'Ocean Pink Mask',
            author: 'Pink',
            like: true,
            comments: []
        },
    ])


    const toggleFavHandler = (postId) => {

        setProductsList(currentPostList => {
            const postIndex = currentPostList.findIndex(p => p.id === postId);
            const newFavStatus = !currentPostList[postIndex].like;
            
            const updatedProducts = [...currentPostList];
            updatedProducts[postIndex] = {
              ...currentPostList[postIndex],
              like: newFavStatus
            };
            return updatedProducts;
          });
    }

    const addCommentHandler =(postId,commentData)=>{
        setProductsList(currentPostList => {
            const postIndex = currentPostList.findIndex(p => p.id === postId);
            currentPostList[postIndex].comments.push(commentData);
            
            const updatedProducts = [...currentPostList];
            updatedProducts[postIndex] = {
              ...currentPostList[postIndex],
              comments:  currentPostList[postIndex].comments
            };
            return updatedProducts;
          });
    }

    const removeCommentHandler=(postId,commentData)=>{

        setProductsList(currentPostList => {
            const postIndex = currentPostList.findIndex(p => p.id === postId);
            currentPostList[postIndex].comments.push(commentData);

            const newComments=   currentPostList[postIndex].comments.filter((comment)=> comment!=commentData)
            
            const updatedProducts = [...currentPostList];
            updatedProducts[postIndex] = {
              ...currentPostList[postIndex],
              comments:  newComments
            };
            return updatedProducts;
          });
    }

    const contextvalue = {
        posts: postList,
        users: [],
        toggleFav: toggleFavHandler,
        addComment:addCommentHandler,
        removeComment:removeCommentHandler,
    }

    return (
        <AppContext.Provider value={contextvalue}>
            {props.children}
        </AppContext.Provider>)
}

export default AppContext;