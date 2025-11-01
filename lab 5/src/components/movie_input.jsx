import React from "react";

class Movie {
  constructor(title, review, rating) {
    this.title = title;
    this.review = review;
    this.rating = rating;
  }}


const MovieInput = ({ onAddMovie, onUpdateMovie, onCancelEdit, editingMovie, isEditing }) => {
  const [title, setTitle] = React.useState("");
  const [review, setReview] = React.useState("");
  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);

  // Update form fields when editing a movie
  React.useEffect(() => {
    if (isEditing && editingMovie) {
      setTitle(editingMovie.title);
      setReview(editingMovie.review);
      setRating(Number(editingMovie.rating) || 0);
    }
  }, [isEditing, editingMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = new Movie(title, review, rating);
    
    if (isEditing) {
      onUpdateMovie(movieData);
    } else {
      onAddMovie(movieData);
    }
    
    setTitle("");
    setReview("");
    setRating(0);
  };

  const handleCancel = () => {
    setTitle("");
    setReview("");
    setRating(0);
    onCancelEdit();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '500px', margin: '0 auto', backgroundColor: '#0d47a1', padding: '32px', borderRadius: '12px', border: '2px solid #1976d2', boxShadow: '0 6px 16px rgba(25, 118, 210, 0.4)' }}>
      {isEditing && (
        <h3 style={{ color: '#90caf9', marginTop: '0', marginBottom: '20px', textAlign: 'center' }}>Edit Movie Review</h3>
      )}
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ marginBottom: '16px', padding: '14px', backgroundColor: '#e3f2fd', color: '#0d47a1', border: '2px solid #42a5f5', borderRadius: '6px', fontSize: '1em', outline: 'none' }}
        />
        <textarea
        placeholder="Movie Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        required
        style={{ marginBottom: '16px', padding: '14px', backgroundColor: '#e3f2fd', color: '#0d47a1', border: '2px solid #42a5f5', borderRadius: '6px', fontSize: '1em', minHeight: '120px', fontFamily: 'inherit', outline: 'none', resize: 'vertical' }}
        />
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          <label style={{ color: '#90caf9', display: 'block', marginBottom: '8px', fontSize: '1em' }}>Rating:</label>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '2em' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                style={{
                  color: star <= (hoverRating || rating) ? '#FFD700' : '#555',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  userSelect: 'none'
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button type="submit" style={{ padding: '14px', backgroundColor: '#1976d2', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '1.1em', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(25, 118, 210, 0.3)', flex: '1' }}>
            {isEditing ? 'Update Movie' : 'Add Movie'}
          </button>
          {isEditing && (
            <button type="button" onClick={handleCancel} style={{ padding: '14px', backgroundColor: '#42a5f5', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '1.1em', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(25, 118, 210, 0.3)', flex: '1' }}>
              Cancel
            </button>
          )}
        </div>
    </form>
  );
}


export default MovieInput;