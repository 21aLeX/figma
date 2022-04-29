import {createSlise} from '@reduxjs/toolkit'

const PostSlise = createSlise({
    name:'posts',
    inintialState:{
        posts:[],
    },
    reducers:{
        addPost(state, action){
            state.posts.push({
                id:action.playload.id,
                author: action.playload.author,
                text: action.playload.text,
                ...
            })
        },
        tooglePost(state, action){},
    }
})

export const {addPost, tooglePost} = PostSlise.actions

export default PostSlise.reducer