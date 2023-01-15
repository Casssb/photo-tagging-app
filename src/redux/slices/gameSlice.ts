import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { initialState } from './gameData';

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
});

export const {} = gameSlice.actions;

export const selectGames = (state: RootState) => state.game.games;

export default gameSlice.reducer;
