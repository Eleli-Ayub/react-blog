import "./singlepost.css";
import image from "../../Asssets/post.jpg";
function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImage" width="100%" src={image} alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className=" singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className=" singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Ayub</b>{" "}
          </span>
          <span className="singlePostDater">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis officia
          asperiores eaque dolores accusamus ad animi eos eveniet? Reprehenderit
          neque quis aliquid doloribus quidem saepe eius expedita impedit
          inventore at? Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ipsum, nisi sint. Tempore vel fugit deleniti quo nisi voluptate
          alias delectus! Molestias quis quas illo porro eos! Eum aut labore
          assumenda? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Omnis officia asperiores eaque dolores accusamus ad animi eos eveniet?
          Reprehenderit neque quis aliquid doloribus quidem saepe eius expedita
          impedit inventore at? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Ipsum, nisi sint. Tempore vel fugit deleniti quo
          nisi voluptate alias delectus! Molestias quis quas illo porro eos! Eum
          aut labore assumenda?
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
