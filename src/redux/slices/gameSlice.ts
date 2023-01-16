import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { initialState } from './gameData';

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    reset: () => initialState,
    gameOn: (state) => {
      state.isGameOn = true;
    },
    gameOver: (state) => {
      state.isGameOver = true;
    },
  },
});

export const { reset, gameOn, gameOver } = gameSlice.actions;

export const selectGames = (state: RootState) => state.game.games;

export default gameSlice.reducer;
