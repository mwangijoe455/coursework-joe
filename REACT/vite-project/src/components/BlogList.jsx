import BlogPost from './BlogPost';

function BlogList({ posts }) {
  return (
    <section style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      {posts.map(post => (
        <BlogPost
          key={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          content={post.content}
        />
      ))}
    </section>
  );
}

export default BlogList;