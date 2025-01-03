"use client";

import React, { useState, useEffect } from "react";

interface Comment {
  id: string; // Unique ID for each comment
  name: string; // Name of the user
  text: string; // Comment text
  userId: string; // Unique user ID for the comment owner
}

const CommentsSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editedComment, setEditedComment] = useState("");

  // Simulate a unique user ID (in a real app, you'd fetch this from the logged-in user's session)
  const currentUserId = "user-123"; // Example unique ID for the current user

  // Load comments from localStorage on mount
  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Add a new comment
  const handleAddComment = () => {
    if (newComment.trim() === "" || userName.trim() === "") return;

    const newCommentObj: Comment = {
      id: Date.now().toString(), // Generate a unique ID
      name: userName,
      text: newComment,
      userId: currentUserId, // Associate the comment with the current user
    };

    setComments((prevComments) => [...prevComments, newCommentObj]);
    setNewComment("");
    setUserName("");
  };

  // Start editing a comment
  const handleEditComment = (commentId: string, currentText: string) => {
    setEditingCommentId(commentId);
    setEditedComment(currentText);
  };

  // Save the edited comment
  const handleSaveEditedComment = () => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: editedComment }
          : comment
      )
    );
    setEditingCommentId(null);
    setEditedComment("");
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditedComment("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-12">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Comments</h2>

      {/* Add a new comment */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6 shadow-sm">
        <h3 className="text-xl font-medium text-gray-700 mb-4">
          Add a Comment
        </h3>
        <div className="space-y-4">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-none focus:outline-none"
            placeholder="Write your comment here..."
            rows={4}
          />
          <button
            onClick={handleAddComment}
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Comment
          </button>
        </div>
      </div>

      {/* Display all comments */}
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="flex items-start gap-4 p-6 bg-gray-100 rounded-lg shadow-sm border border-gray-200"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-semibold">
                {comment.name.charAt(0).toUpperCase()}
              </div>
              {/* Comment Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-gray-800">
                    {comment.name}
                  </p>
                  {comment.userId === currentUserId &&
                    editingCommentId !== comment.id && (
                      <button
                        onClick={() =>
                          handleEditComment(comment.id, comment.text)
                        }
                        className="text-sm text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                    )}
                </div>
                <div className="mt-2">
                  {editingCommentId === comment.id ? (
                    <div>
                      <textarea
                        value={editedComment}
                        onChange={(e) => setEditedComment(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        rows={3}
                      />
                      <div className="mt-3 flex gap-4">
                        <button
                          onClick={handleSaveEditedComment}
                          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-700 mt-2">{comment.text}</p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentsSection;
