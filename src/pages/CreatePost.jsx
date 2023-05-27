import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../Firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  // Setting the title of the Article
  const [title, setTitle] = useState("");
  // Setting the Content of the Article
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();

  const postsCollectionRef = collection(db, "posts");
  // Creating post and adding it to the DB
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    // Navigate to home after posting the Article
    navigate("/");
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage theContainer">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Enter Title ..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="hello world ..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          ></textarea>
        </div>
        <button onClick={createPost}>Submite Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
