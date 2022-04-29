import React from 'react';
import Avatar from './Avatar';
import s from '../Card.module.css';

const PostForm = () => {
    return (
        <div className={s.rectangle}>
        <div className={s.group}>

            <Avatar />
            <div className={s.time}>17:57</div>
            
        </div>
        <div className={s.newHashteg}>#Новое</div>
        <div className={s.expertHashtag}>#Эксперт</div>
    </div>
    );
};

export default PostForm;