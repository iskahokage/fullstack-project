import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { JSON_API } from '../consts';
export const postContext = createContext();

const INIT_STATE = {
    posts: [],
}

const reducer = (state=INIT_STATE, action)=>{
    switch (action.type) {
        case "GET_POST":
            return{
                ...state,
                posts: action.payload.data
            }
        default:
            break;
    }
}
const PostContextProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const getPost = async () =>{
        let post = await axios(`${JSON_API}/posts`)
        dispatch({
            type: "GET_POST",
            payload: post
        })
    }

    const addPost = (newPost) => {
        axios.post(`${JSON_API}/posts`, newPost);
    };

    const deletePost = async (id) => {
        await axios.delete(`${JSON_API}/posts/${id}`)
        getPost()
    }

    return (
        <postContext.Provider
            value={{
                posts: state.posts,
                getPost, 
                addPost,
                deletePost
            }}
        >
            {children}
        </postContext.Provider>
    );
};

export default PostContextProvider;