import React, { useState } from 'react';
import { EmptyLayout } from '@/layouts/emptylayout/emptylayout';
import { Card } from '@/components/Card/Card';
import { FormInput } from '@/components/forminput/FormInput';
import { Button } from '@/components/buttons/Button';
import { useMovieStore, type Movie } from '@/stores/moviesstore';
import './AddMovie.css';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(0);
  const [poster, setPoster] = useState('');
  const [classification, setClassification] = useState('');
  const { movies, setMovies } = useMovieStore()
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(title === '' || duration === 0 ||  poster === '' || classification === '') {
      alert('Por favor, completa todos los campos');
      return;
    }
    
    const newMovie: Movie = {
      id: movies.length + 1,
      title,
      duration,
      poster,
      classification
    };

	setMovies([...movies, newMovie]);
	setTitle('');
	setDuration(0);
	setPoster('');
	setClassification('');
	alert('Pelicula agregada correctamente');
  };

  return (
	<EmptyLayout>
		<Card className="AddMovie">
			<h2>Nuevo estreno</h2>
			<form onSubmit={handleSubmit}>
				<FormInput label="Titulo" type="text" name="title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
				<FormInput label="Clasificacion" type="text" name="classification" value={classification} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setClassification(e.target.value)} />
				<FormInput label="Duracion (minutos)" type="number" name="duration" value={duration} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDuration(Number(e.target.value))} />
				<FormInput label="Poster URL" type="url" name="poster" value={poster} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPoster(e.target.value)} />
				<Button buttonType="primary" className="AddMovie__submit-btn">Agregar Pelicula</Button>
			</form>
		</Card>
	</EmptyLayout>);
};

export default AddMovie;
