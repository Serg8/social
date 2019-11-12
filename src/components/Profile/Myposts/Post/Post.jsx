import React from 'react';
import s from './Post.module.scss';

function Post(props) {

  return (
      <div>
        <div className={s.item}>{ props.message }</div>
        <div>likes - { props.like }</div>
      </div>
  );
}

export default Post;