import React from "react";

const commentData = [
  {
    name: "shafi",
    text: "this video is nice i like it",
    replies: [],
  },
  {
    name: "shafi",
    text: "this video is nice i like it",
    replies: [
      {
        name: "shafi",
        text: "this video is nice i like it",
        replies: [
          {
            name: "shafi",
            text: "this video is nice i like it",
            replies: [
              {
                name: "shafi",
                text: "this video is nice i like it",
                replies: [
                  {
                    name: "shafi",
                    text: "this video is nice i like it",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user img "
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">Name: {name} </p>
        <p>Comment: {text} </p>
      </div>
    </div>
  );
};

const Commnentslist = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <Commnentslist comments={comment.replies} />
      </div>
    </div>
  ));
};

const Commentscontainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <Commnentslist comments={commentData} />
    </div>
  );
};
export default Commentscontainer;
