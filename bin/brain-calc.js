#!/usr/bin/env node
import brainGame from '../src/index.js';
import brainCalc from '../src/games/game-calc.js';

// Settings
const rules = 'What is the result of the expression?';

brainGame(rules, brainCalc);
