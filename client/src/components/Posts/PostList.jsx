import React, { useContext, useEffect } from 'react';
import { postContext } from '../../context/PostContext';

const PostList = () => {

    const {posts, getPost, deletePost} = useContext(postContext)
    useEffect(()=>{
        getPost()
    }, [])
    const handleClick = (id) =>{
        deletePost(id)
    }
    return (
        <div>
            <h1 className='PostPageTitle'>POSTS FROM POTENTIAL CLIENTS</h1>
            {posts.map((item)=>(
                <div className='postCard'>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.content}</p>
                    <button onClick={()=>handleClick(item.id)} type="submit">delete post</button>
                </div>
            ))}
        </div>
    );
};

export default PostList;