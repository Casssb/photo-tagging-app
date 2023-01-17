import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { initialState } from './gameData';

interface charFoundProps {
  gameId: string;
  charId: string;
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    reset: () => initialState,
    gameOn: (state, action: PayloadAction<string>) => {
      state.isGameOn = true;
      state.games.map((game) => {
        if (game.id === action.payload) {
          game.isActive = true;
        }
      });
    },
    gameOver: (state) => {
      state.isGameOver = true;
    },
    setCharFound: (state, action: PayloadAction<charFoundProps>) => {
      state.games.map((game) => {
        if (game.id === action.payload.gameId) {
          game.characters.map((char) => {
            if (char.id === action.payload.charId) {
              char.isFound = true;
            }
          });
        }
      });
    },
    checkForWin: (state) => {
      state.games.forEach((game) => {
        if (
          game.characters.length ===
          game.characters.filter((char) => char.isFound).length
        ) {
          state.isGameOver = true;
        }
      });
    },
    setWinningTime: (state, action: PayloadAction<number>) => {
      state.winningTime = action.payload;
    },
  },
});

export const {
  reset,
  gameOn,
  gameOver,
  setCharFound,
  checkForWin,
  setWinningTime,
} = gameSlice.actions;

export const selectGames = (state: RootState) => state.game.games;

export default gameSlice.reducer;
