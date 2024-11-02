import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice' ; 
import transformReducer from './TransformState';
import backdropReducer from './BackdropSlice' ;  
import sunLightReducer from './SunLightSlice' ;  

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    transformState : transformReducer,
    BackdropState : backdropReducer,
    SunLightState : sunLightReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch