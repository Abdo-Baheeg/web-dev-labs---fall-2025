import React from 'react'
import MovieCard from './components/movie_card'
import MovieInput from './components/movie_input'

function App() {

  const [movies, setMovies] = React.useState(() => {
    const savedMovies = localStorage.getItem('movies')
    return savedMovies ? JSON.parse(savedMovies) : []
  })
  
  const [editingIndex, setEditingIndex] = React.useState(null)
  const [editingMovie, setEditingMovie] = React.useState(null)

  
  React.useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies))
  }, [movies])

  const handleAddMovie = (movie) => {
    const newMovies = [...movies, movie]
    setMovies(newMovies)
  }

  const handleEditMovie = (index) => {
    setEditingIndex(index)
    setEditingMovie(movies[index])
  }

  const handleUpdateMovie = (updatedMovie) => {
    const newMovies = [...movies]
    newMovies[editingIndex] = updatedMovie
    setMovies(newMovies)
    setEditingIndex(null)
    setEditingMovie(null)
  }

  const handleCancelEdit = () => {
    setEditingIndex(null)
    setEditingMovie(null)
  }

  const handleDeleteMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index)
    setMovies(newMovies)
  }

  return (
    <>

      <div style={{ padding: '24px', color: '#90caf9', textAlign: 'center' , width: '100%', marginBottom: '20px', borderBottom: '3px solid #1976d2',}}>
        <h1 style={{margin: '0', textShadow: '2px 2px 4px rgba(144, 202, 249, 0.3)', color: '#64b5f6'}}>My Movie Reviews</h1>
      </div>
      <div style={{ display: 'flex', gap: '48px', padding: '20px 40px 40px 40px', maxWidth: '1600px', margin: '0 auto', alignItems: 'flex-start' }}>
        <div style={{ flex: '0 0 480px', position: 'sticky', top: '20px' }}>
          <MovieInput 
            onAddMovie={handleAddMovie}
            onUpdateMovie={handleUpdateMovie}
            onCancelEdit={handleCancelEdit}
            editingMovie={editingMovie}
            isEditing={editingIndex !== null}
          />
        </div>
        <div style={{width : '20px', maxWidth : '20px'}}></div>
        <div className='movies-list' style={{ flex: '1', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'stretch', flexWrap: 'wrap', gap: '28px', paddingRight: '20px' }}>
          {movies.map((movie, index) => (
            <MovieCard 
              key={index} 
              movie={movie} 
              onEdit={() => handleEditMovie(index)}
              onDelete={() => handleDeleteMovie(index)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
