import Postimg from "../../Asssets/post.jpg";
import "./post.css";
function Post() {
  return (
    <div className="post">
      <img className="postImage" src={Postimg} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti saepe
        quae neque repudiandae, ea culpa beatae cumque aspernatur possimus
        nesciunt suscipit aliquam excepturi. Maiores rerum expedita error, sequi
        iste dolorem. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Deleniti saepe quae neque repudiandae, ea culpa beatae cumque aspernatur
        possimus nesciunt suscipit aliquam excepturi. Maiores rerum expedita
        error, sequi iste dolorem. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Deleniti saepe quae neque repudiandae, ea culpa beatae
        cumque aspernatur possimus nesciunt suscipit aliquam excepturi. Maiores
        rerum expedita error, sequi iste dolorem.
      </p>
    </div>
  );
}

export default Post;
