import "./rightbar.css";
import { Users } from "../../dummyData";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            src="./assets/gift.png"
            alt="Birthday Image"
            className="birthdayImg"
          />
          <span className="birthdayText">
            <b>Lallan</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>

        <img src="./assets/ad.png" alt="" className="rightbarAd" />

        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <li className="rightbarFriend" key={user.id}>
              <div className="rightbarProfileImgContainer">
                <img
                  src={user.profilePicture}
                  alt={user.username}
                  className="rightbarProfileImg"
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
