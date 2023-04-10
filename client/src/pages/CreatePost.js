import React from 'react';
import './CreatePost.css'
import {supabase} from '../client.js'
import {useState} from 'react';

const CreatePost = () => {
    const [post, setPost] = useState({});

    
    const createPost = async(event) => {
        event.preventDefault();

        await supabase.from('Posts')
        .insert({title: post.title, 
                author: post.author, 
                description: post.description, 
                betCount: post.betCount})
        .select();

        window.location = '/';
    }

    const handleChange = (event) => {
        setPost({...post, 
            [event.target.name]: event.target.value,
            [event.target.description]: event.target.value})
    }

    return (
        <div>
            <form onSubmit={createPost}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" onChange={handleChange} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" onChange={handleChange} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost