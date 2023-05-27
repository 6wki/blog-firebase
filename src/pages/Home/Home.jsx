import React, { useEffect, useState } from "react";
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../../Firebase";
import { auth } from "../../Firebase";
import WelcomeUser from "./WelcomeUser/WelcomeUser";

const Home = ({ isAuth }) => {
  const [postsList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    window.location.reload();
  };
  return (
    <div className="homePage theContainer">
      <div className="secondContainer">
        <WelcomeUser />
        {postsList.map((post) => {
          return (
            <div className="post">
              <div className="postHeader">
                <div className="title">
                  <h1>{post.title}</h1>
                </div>
                <div className="deletePost">
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      &#128465;
                    </button>
                  )}
                </div>
              </div>
              <div className="postTextContainer">{post.postText}</div>
              <h3>@{post.author.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
