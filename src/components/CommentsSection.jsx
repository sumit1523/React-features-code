import { useState } from "react";
import CommentList from "./CommentList";

const CommentsSection = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "This is the first comment", replies: [] },
    { id: 2, text: "This is the second comment", replies: [] },
  ]);

  const handleEdit = (id, newText) => {
    const editComment = (comments) =>
      comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, text: newText };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: editComment(comment.replies) };
        }
        return comment;
      });

    setComments(editComment(comments));
  };

  const handleDelete = (id) => {
    const deleteComment = (comments) =>
      comments.filter((comment) => {
        if (comment.id === id) {
          return false;
        }
        if (comment.replies.length > 0) {
          comment.replies = deleteComment(comment.replies);
        }
        return true;
      });

    setComments(deleteComment(comments));
  };

  const handleReply = (id) => {
    const replyText = prompt("Enter your reply:");
    if (!replyText) return;

    const replyComment = (comments) =>
      comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              { id: Date.now(), text: replyText, replies: [] },
            ],
          };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: replyComment(comment.replies) };
        }
        return comment;
      });

    setComments(replyComment(comments));
  };

  return (
    <div className="comments-section">
      <CommentList
        comments={comments}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onReply={handleReply}
      />
    </div>
  );
};

export default CommentsSection;
