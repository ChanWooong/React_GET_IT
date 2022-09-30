import React from "react";
import Comment from "./Comment";
const comments = [
    {
        name:"오찬웅",
        comment:"안녕하세요!",

    },
    {
    name: "유재석",
        comment: "걷지말고 달려라!",

    },
    {
        name: "최정훈",
        comment: "주저하는 연인들을 위해.",

    },
];

function CommentList(props){
    return(
        <div>
        {comments.map((comment) => {
            return(
                <Comment name={comment.name} comment={comment.comment} />
            );
        })}
        </div>
    );
}
export default CommentList;