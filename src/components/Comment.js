import { useState } from "react";

const Comment = ({ comment, onEdit, onDelete, onReply }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(comment.id, editText);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(comment.id);
  };

  const handleReply = () => {
    onReply(comment.id);
  };

  return (
    <div className="comment">
      {isEditing ? (
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <p>{comment.text}</p>
      )}
      <div className="comment-actions">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleReply}>Reply</button>
      </div>
      {comment.replies && (
        <div className="replies">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              onEdit={onEdit}
              onDelete={onDelete}
              onReply={onReply}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
