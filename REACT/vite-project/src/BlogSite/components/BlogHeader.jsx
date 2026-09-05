function BlogHeader({ title, subtitle }) {
  return (
    <header className="blog-header">
      <h1>{title}</h1>
      <div className="subtitle">{subtitle}</div>
    </header>
  );
}

export default BlogHeader;
