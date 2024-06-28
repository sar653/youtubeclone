import React from "react";


const commentsData = [

    { name: "Ak", text: "Lorem ipsum fhjj kjbnn", replies: [] },
   
    { name: "Ak", text: "Lorem ipsum fhjj kjbnn", replies: [] },
    { name: "Ak", text: "Lorem ipsum fhjj kjbnn", replies: [] },
   
    { name: "Ak", text: "Lorem ipsum fhjj kjbnn", replies: [] },
    { name: "Ak", text: "Lorem ipsum fhjj kjbnn", replies: [] },
    { name: "Ak", text: "Lorem ipsum fhjj kjbnn", replies: [] }
   ,
     {
      name: "Ak",
      text: "Lorem ipsum fhjj kjbnn",
      replies: [
        {
          name: "Ak",
          text: "Lorem ipsum fhjj kjbnn",
          replies: [
            { name: "Ak", text: "Lorem ipsum fhjj kjbnn",replies:[] },
            { name: "Ak", text: "Lorem ipsum fhjj kjbnn", replies: [ { name: "Ak", text: "Lorem ipsum fhjj kjbnn", replies: [  { name: "Ak", text: "Lorem ipsum fhjj kjbnn", replies: [] },] },] },
          ],
        },
      ],
    },
  ];


  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div>
        <div className="flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYogPKR1mzQ6msptbTwja31pVhuddqGPHCvA&s"
            className="w-12 h-12"
            alt="ty"
          ></img>

        
          <div >

          <p className="font-bold">@{name}</p>
            <p>{text}</p>
          </div>
        </div>
      </div>
    );
  };


  const CommentsList=({comments})=>{
    return comments.map((comment,index)=> (<div>
        <Comment  key={index} data={comment}/>
        <div className="pl-4 border border-l-black ml-5">
        <CommentsList comments={comment.replies}></CommentsList>
        </div>
</div>))}
const CommentsContainer = () => {
 

 
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList  comments={commentsData}></CommentsList>
    </div>
  );
};

export default CommentsContainer;
