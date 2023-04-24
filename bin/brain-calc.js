#!/usr/bin/env node
import brainGame from '../src/index.js';
import brainCalc from '../src/games/game-calc.js';

// Settings
const easy = 3;
const normal = 6;
const hard = 10;
const rules = 'What is the result of the expression?';

brainGame(rules, brainCalc, easy, normal, hard);
