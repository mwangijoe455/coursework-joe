function BlogPost({ title, author, date, content }) {
  return (
    <article style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
      <h2>{title}</h2>
      <p><strong>By:</strong> {author} | <strong>Date:</strong> {date}</p>
      <p>{content}</p>
    </article>
  );
}

export default BlogPost;