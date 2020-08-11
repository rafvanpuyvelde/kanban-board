import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";

import boardSlice from "./slices/boardSlice";

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const reducer = combineReducers({
  board: boardSlice.reducer,
});

export const store = configureStore({
  reducer,
});

export default store;
