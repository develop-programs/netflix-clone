import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "./Reducers/modal";
import RecommendationsSlice from "./Reducers/Suggestion";
import MyListSlice from "./Reducers/MyList";
// ...

export const store = configureStore({
  reducer: {
    Modal: ModalSlice,
    Recommendations: RecommendationsSlice,
    MyList: MyListSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
