import { Routes, Route } from 'react-router-dom';
import DirectorList from './components/DirectorList';
import DirectorDetail from './components/DirectorDetail';
import MovieDetail from './components/MovieDetail';
import AddDirector from './components/AddDirector';
import AddMovie from './components/AddMovie';
import Layout from './components/Layout'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DirectorList />} />
        <Route path="directors/:directorId" element={<DirectorDetail />}>
          <Route path="movies/:movieId" element={<MovieDetail />} />
        </Route>
        <Route path="add-director" element={<AddDirector />} />
        <Route path="directors/:directorId/add-movie" element={<AddMovie />} />
      </Route>
    </Routes>
  );
}
export default App; 