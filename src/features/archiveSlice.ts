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
            state.archives.push(action.payload);
        },
        removeArchive: (state, action: PayloadAction<string>) => {
            state.archives = state.archives.filter(
                (archive) => archive.id !== action.payload
            );
        }
    }
});

export const { addArchive, removeArchive } = archiveSlice.actions;

export const selectArchives = (state: RootState) => state.archive.archives;

export default archiveSlice.reducer;


