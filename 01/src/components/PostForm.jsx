import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        if (post.title && post.body) {
            const newPost = {
                ...post, id: Date.now()
            }
            create(newPost)
            setPost({title: '', body: ''})
        }
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Post name"
            />
            <MyInput
                type="text"
                placeholder="Post description"
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <MyButton onClick={addNewPost}>Create Post</MyButton>
        </form>
    );
};

export default PostForm;