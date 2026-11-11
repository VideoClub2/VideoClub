
import MovieForm from '../components/MovieForm';
import PageLayout from '../components/PageLayout';

export default function AddMovie() {
  return (
    <PageLayout
      title="Añade tu película"
      description="Incorpora una nueva película a nuestro videoclub."
    >
      <MovieForm />
    </PageLayout>
  );
}
