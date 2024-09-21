import Comment from "./Comment";

const CommentList = ({ comments, onEdit, onDelete, onReply }) => {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onEdit={onEdit}
          onDelete={onDelete}
          onReply={onReply}
        />
      ))}
    </div>
  );
};

export default CommentList;
