import React from 'react';
import './style.css';

function PostHeader({ author, date }) {
  return (
    <div className="Header">
      <img className="avatar" src={author.avatar} />
      <div>
        <span className="detail_name">{author.name}</span>
        <span className="detail_date">{date}</span>
      </div>
    </div>
  );
};

function PostComment({ comments }) {
  return (
    <>
      {comments.map(comment => {
        return (
          <div key={comment.id} className="comments">
            <img src={comment.author.avatar} />
            <div>
              <span className="detail_name">{comment.author.name}</span>
              <p>{comment.content}</p>
            </div>
          </div>
        )
      })
      }
    </>
  );
};

export default function PostItem({ author, date, content, comments }) {
  return (
    <div className="Post">
      <PostHeader author={author} date={date} />
      <p>{content}</p>
      <div className='divider' />
      <PostComment comments={comments} />
    </div>
  );
}
