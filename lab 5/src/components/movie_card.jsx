import React from "react";

const MovieCard = ({ movie, onEdit, onDelete }) => {
  // Render stars based on rating (1-5)
  const renderStars = (rating) => {
    const numRating = Number(rating) || 0;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= numRating ? '#FFD700' : '#555', fontSize: '1.5em' }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="movie-card" style={{ border: '2px solid #1976d2', padding: '20px', borderRadius: '12px', maxWidth: '350px', minWidth: '300px', backgroundColor: '#0d47a1', color: '#e3f2fd', boxShadow: '0 4px 12px rgba(25, 118, 210, 0.4)', transition: 'transform 0.2s, box-shadow 0.2s' }}>
        <div className="movie-details" style={{ textAlign: 'center', marginBottom: '16px' }}>
            <h2 className="movie-title" style={{color: '#90caf9', marginTop: '0', marginBottom: '12px', fontSize: '1.5em'}}>{movie.title}</h2>
            <p className="movie-review" style={{color: '#e3f2fd', lineHeight: '1.6', marginBottom: '16px', padding: '0 8px'}}>{movie.review}</p>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', padding: '8px'}}>
              {renderStars(movie.rating)}
            </div>
        </div>
        <div className="movie-actions" style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={onEdit} style={{ backgroundColor: '#1976d2', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', flex: '1', }}>edit</button>
            <button onClick={onDelete} style={{ backgroundColor: '#42a5f5', color: '#ffffff', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', flex: '1' }} >delete</button>
        </div>
    </div>
  );
}

export default MovieCard;