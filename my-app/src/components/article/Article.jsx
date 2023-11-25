import React from 'react';
import './article.css';
// import SlotReel from '../../components/slotMachine/slotReel';



const Article = ( { imgUrl, date, title } ) => {
  return (
    <div className="myweb__blog-container_article">
      <div className="myweb__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="myweb__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        {/* <a href={SlotReel}>View Full Project</a> */}
      </div>

    </div>
  )
}

export default Article