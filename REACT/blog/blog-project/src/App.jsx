import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import blogData from './blog';

function App() {
  return (
    <div>
      <Header />
      <BlogList posts={blogData} />
      <Footer />
    </div>
  );
}

export default App;