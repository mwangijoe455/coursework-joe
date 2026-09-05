function PostCard({ post }) {
  const { title, date, readTime, excerpt, tags } = post;

  return (
    <div className="post-card">
      <h2 className="post-title">{title}</h2>
      <div className="post-meta">
        <span> {date}</span>
        <span> {readTime}</span>
      </div>
      <div className="post-excerpt">
        <p>{excerpt}</p>
      </div>
      {tags && tags.length > 0 && (
        <div className="post-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="tag">#{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostCard;