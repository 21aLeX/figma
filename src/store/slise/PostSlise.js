
import { createSlice } from '@reduxjs/toolkit';


const PostSlise = createSlice({
    name:'posts',
    initialState:{
        posts:[],
    },
    reducers:{
        addPost(state, action){
            state.posts.push.apply(state.posts,action.payload)
            console.log(state.posts)
        },
        tooglePost(state, action){},
    }
})

export const {addPost, tooglePost} = PostSlise.actions

export default PostSlise.reducer