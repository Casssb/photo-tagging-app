import game1 from '../../assets/images/planetiso.webp';
import game1lg from '../../assets/images/planetisolg.webp';
import game1char1 from '../../assets/images/game1-claptrap.png';
import game1char2 from '../../assets/images/game1-wario.png';
import game1char3 from '../../assets/images/game1-master-chief.png';

import game2 from '../../assets/images/isowrd-and-isorcery.webp';
import game2lg from '../../assets/images/isowrd-and-isorcerylg.webp';
import game2char1 from '../../assets/images/game2-geralt.png';
import game2char2 from '../../assets/images/game2-donkey.png';
import game2char3 from '../../assets/images/game2-willow.webp';

import game3 from '../../assets/images/prehisoria.webp';
import game3lg from '../../assets/images/prehisorialg.webp';
import game3char1 from '../../assets/images/game3-sonic.png';
import game3char2 from '../../assets/images/game3-marty-mcfly.png';
import game3char3 from '../../assets/images/game3-predator.png';

import game4 from '../../assets/images/pirates-of-the-isobbean.webp';
import game4lg from '../../assets/images/pirates-of-the-isobbeanlg.webp';
import game4char1 from '../../assets/images/game4-link.png';
import game4char2 from '../../assets/images/game4-inigo-montoya.png';
import game4char3 from '../../assets/images/game4-monkey-d-luffy.png';

export interface character {
  name: string;
  id: string;
  isFound: boolean;
  imageSrc: string;
}

export interface game {
  name: string;
  imageSrc: string;
  imageSrcLg: string;
  id: string;
  isActive: boolean;
  characters: Array<character>;
}

export interface guessPopUp {
  isOpen: boolean;
  isGuessCorrect: boolean;
  message: string;
}

export interface gameState {
  isGameOn: boolean;
  isGameOver: boolean;
  winningTime: number | null;
  guessPopUp: guessPopUp;
  games: Array<game>;
}

export const initialState: gameState = {
  isGameOn: false,
  isGameOver: false,
  winningTime: null,
  guessPopUp: {
    isOpen: false,
    isGuessCorrect: false,
    message: '',
  },
  games: [
    {
      name: 'Planet ISO',
      imageSrc: game1,
      imageSrcLg: game1lg,
      id: 'game1',
      isActive: false,
      characters: [
        {
          name: 'Claptrap',
          id: 'char1',
          isFound: false,
          imageSrc: game1char1,
        },
        {
          name: 'Wario',
          id: 'char2',
          isFound: false,
          imageSrc: game1char2,
        },
        {
          name: 'Master Chief',
          id: 'char3',
          isFound: false,
          imageSrc: game1char3,
        },
      ],
    },
    {
      name: 'ISOwrd & ISOrcery',
      imageSrc: game2,
      imageSrcLg: game2lg,
      id: 'game2',
      isActive: false,
      characters: [
        {
          name: 'Geralt',
          id: 'char1',
          isFound: false,
          imageSrc: game2char1,
        },
        {
          name: 'Donkey',
          id: 'char2',
          isFound: false,
          imageSrc: game2char2,
        },
        {
          name: 'Willow',
          id: 'char3',
          isFound: false,
          imageSrc: game2char3,
        },
      ],
    },
    {
      name: 'PrehISOria',
      imageSrc: game3,
      imageSrcLg: game3lg,
      id: 'game3',
      isActive: false,
      characters: [
        {
          name: 'Sonic',
          id: 'char1',
          isFound: false,
          imageSrc: game3char1,
        },
        {
          name: 'Marty McFly',
          id: 'char2',
          isFound: false,
          imageSrc: game3char2,
        },
        {
          name: 'Predator',
          id: 'char3',
          isFound: false,
          imageSrc: game3char3,
        },
      ],
    },
    {
      name: 'Pirates of the ISObbean',
      imageSrc: game4,
      imageSrcLg: game4lg,
      id: 'game4',
      isActive: false,
      characters: [
        {
          name: 'Link',
          id: 'char1',
          isFound: false,
          imageSrc: game4char1,
        },
        {
          name: 'Inigo Montoya',
          id: 'char2',
          isFound: false,
          imageSrc: game4char2,
        },
        {
          name: 'Monkey D Luffy',
          id: 'char3',
          isFound: false,
          imageSrc: game4char3,
        },
      ],
    },
  ],
};
