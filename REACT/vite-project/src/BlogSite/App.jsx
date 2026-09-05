import './App.css';
import blogData from './blog.json';  
import BlogHeader from './components/BlogHeader.jsx';
import BlogFooter from './components/BlogFooter.jsx';
import PostList from './components/PostList.jsx';

function App() {
  const { title, subtitle, posts, footer } = blogData;

  return (
    <div className="blog-container">
      <BlogHeader title={title} subtitle={subtitle} />
      <PostList posts={posts} />
      <BlogFooter text={footer} />
    </div>
  );
}

export default App;