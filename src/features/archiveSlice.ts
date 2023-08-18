import { produce } from 'immer';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Archive } from '../types/archive';

export interface ArchiveState {
    archives: Archive[];
}

const initialState: ArchiveState = {
    archives: [],
};

export const archiveSlice = createSlice({
    name: 'archive',
    initialState,
    reducers: {
        addArchive: (state, action: PayloadAction<Archive>) => {
            // Use Immer's produce to update state in an immutable way
            return produce(state, (draftState) => {
                draftState.archives.push(action.payload);
            });
        },
        removeArchive: (state, action: PayloadAction<string>) => {
            return produce(state, (draftState) => {
                draftState.archives = draftState.archives.filter(
                    (archive) => archive.id !== action.payload
                );
            });
        }
    },
});

export const { addArchive, removeArchive } = archiveSlice.actions;

export const selectArchives = (state: RootState) => state.archive.archives;

export default archiveSlice.reducer;


