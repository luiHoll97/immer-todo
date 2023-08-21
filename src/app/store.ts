import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import archivesReducer from '../features/archiveSlice';


export const store = configureStore({
  reducer: {
    archive: archivesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
