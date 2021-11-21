import { MoreVert } from "@material-ui/icons";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="./assets/person/1.jpeg"
              alt="Profile Picture"
            />
            <span className="postUsername">Jane Doe</span>
            <span className="postDate">5 mins ago</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">Hey ! It's my first post</span>
          <img className="postImg" src="./assets/post/1.jpeg" alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="./assets/like.png"
              alt="Like Button"
            />
            <img
              className="likeIcon"
              src="./assets/heart.png"
              alt="Heart Button"
            />

            <spam className="postLikeCounter">32 people like it</spam>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
