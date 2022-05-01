import { configureStore } from '@reduxjs/toolkit';
import PostSlise from './slise/PostSlise';

export default configureStore({
    reducer:{
posts: PostSlise,
    }
})