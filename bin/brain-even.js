#!/usr/bin/env node
import brainGame from '../src/index.js';
import brainEven from '../src/games/game-even.js';

// Settings
const easy = 3;
const normal = 6;
const hard = 10;
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

brainGame(rules, brainEven, easy, normal, hard);
