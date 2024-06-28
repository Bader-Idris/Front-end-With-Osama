/*
  If your commenting system is meant to be associated with specific posts or articles,
  you might need a table to store information about those posts.
  This table could include fields such as post ID, title, content, author,
  timestamp, etc.
*/
pool.query(`
CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  author_id INT NOT NULL,
  FOREIGN KEY(author_id) REFERENCES users(id)
);
`)
