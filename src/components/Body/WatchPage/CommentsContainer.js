import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const CommentData = [
  {
    name: "AK",
    text: "Lorem sadasd asd",
    replies: [
      {
        name: "AK",
        text: "Lorem sadasd asd",
        replies: [
          {
            name: "AK",
            text: "Lorem sadasd asd",
            replies: [
              {
                name: "AK",
                text: "Lorem sadasd asd",
                replies: [],
              },
              {
                name: "AK",
                text: "Lorem sadasd asd",
                replies: [
                  {
                    name: "AK",
                    text: "Lorem sadasd asd",
                    replies: [
                      {
                        name: "AK",
                        text: "Lorem sadasd asd",
                        replies: [
                          {
                            name: "AK",
                            text: "Lorem sadasd asd",
                            replies: [
                              {
                                name: "AK",
                                text: "Lorem sadasd asd",
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
              {
                name: "AK",
                text: "Lorem sadasd asd",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "AK",
        text: "Lorem sadasd asd",
        replies: [],
      },
    ],
  },
  {
    name: "AK",
    text: "Lorem sadasd asd",
    replies: [],
  },
  {
    name: "AK",
    text: "Lorem sadasd asd",
    replies: [],
  },
  {
    name: "AK",
    text: "Lorem sadasd asd",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-400 p-2 rounded-lg">
      <AccountCircleIcon fontSize="large" className="h-5" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        
          <div>
            <Comment data={comment} key={index} />
            <div className="pl-5 border border-l-black ml-5">
              <CommentList comments={comment.replies} />
            </div>
          </div>
        
      ))}
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div>
      <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments</h1>
        <CommentList comments={CommentData} />
      </div>
    </div>
  );
};

export default CommentsContainer;
