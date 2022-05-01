import React from 'react';
import s from './Card.module.css';
import Avatar from './Avatar';
import CloseMessage from './CloseMessage';
import Options from './Options';
import Select from './Select';
import SendMessage from './SendMessage';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

const ListCard = () => {
    const list = useSelector(state => state.posts.posts);
    console.log(list)
    const dispatch = useDispatch()
    return (
        <div>

            {list.map((list, index) => (

                <div key={index + 1}>
                    <div className={s.rectangle}>
                    <div className={s.group118}>

                        <Avatar />
                        <div className={s.time}>{list.date.substr(11, 5)}</div>
                        <div className={s.frame121}>
                            <div className={s.right}>
                                <div className={s.rightText}>Правый</div>
                            </div>
                            <div className={s.center}>
                                <div className={s.centerText}>Центр</div>
                            </div>
                            <div className={s.left}>
                                <div className={s.leftText}>Левый</div>
                            </div>
                        </div>

                        <div className={s.icon2}>
                            <div className={s.select}>
                                <Select />
                            </div>
                            <div className={s.options}>
                                <Options />
                            </div>
                            <div className={s.closeMessage}>
                                <CloseMessage />
                            </div>
                            <div className={s.sendMessage}>
                                <SendMessage />
                            </div>
                        </div>
                        <div className={s.group98}>
                            <div className={s.author}> {list.author}</div>
                            <div className={s.network}>{list.channel}</div>
                        </div>

                        <div className={s.frame13}>
                            <div className={s.text}>{list.content}</div>
                            <div className={s.next}>Далее</div>
                        </div>
                    </div>
                    {list.attachments.map((list, index) =>(list.url && list.type =='image')
                    ? <img key={index + 1} className={s.img} src={list.url}></img> 
                    :<div key={index + 1}></div>) 
                   
                    }
                    <div className={s.newHashteg}>#Новое</div>
                    <div className={s.expertHashtag}>#Эксперт</div>
                    </div>
                </div>
            )
            )
            }
        </div>
    );
};

export default ListCard;