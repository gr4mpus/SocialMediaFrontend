import { MoreVert } from "@material-ui/icons";
import "./post.css";
import { Users } from "../../dummyData";

export default function Post({ post }) {
  const user = Users.filter((u) => u.id == post.id)[0];

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profilePicture}
              alt="Profile Picture"
            />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>

          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt={post.desc} />
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

            <span className="postLikeCounter">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
