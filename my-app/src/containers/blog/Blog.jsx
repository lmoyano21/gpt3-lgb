import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className="myweb__blog section__padding" id="blog">
      <div className="myweb__blog-heading">
        <h1 className="gradient__text">A los is happening, We are blogging about it</h1>
      </div>
      <div className="myweb__blog-container">
      <div className="myweb__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore how it is?" />
      </div>
      <div className="myweb__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2023" title="Slot Machine" />
        <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore how it is?" />
      </div>
      </div>
    </div>
  )
}

export default Blog