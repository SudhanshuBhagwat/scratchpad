import { configureStore } from "@reduxjs/toolkit";
import TicTacToeReducer from "../features/TicTacToe/store/TicTacToeSlice";

export const store = configureStore({
  reducer: {
    ticTacToe: TicTacToeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
