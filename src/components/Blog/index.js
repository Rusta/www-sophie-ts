import React from 'react'
import moment from 'moment'

const dateFormat = 'YYYY-DD-MMTHH:mm:00.000Z'

const Blog = (page) => {
  const date = moment(page.data.date, dateFormat);
  const dateFriendly = date.format('dddd Do MMMM YYYY (HH:mm a)');
  const daysAgo = date.fromNow();
  return (
    <div key={page.path} className="entry">
      <h2 className="entry-title">{page.data.title}</h2>
      {date.isValid() && (
        <div className="entry-meta">
          <span className="entry-date">{dateFriendly}</span>
          <span className="entry-ago">{daysAgo}</span>
        </div>
      )}
      <div className="entry-body">
        {page.data.image && (
          <div className="entry-image">
            <img alt={page.data.title} src={page.data.image} />
          </div>
        )}
        <div className="entry-content" dangerouslySetInnerHTML={{ __html: page.data.body }} />
      </div>
    </div>
  );
};

Blog.propTypes = {

}

export default Blog
