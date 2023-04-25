#!/usr/bin/env node
import brainGame from '../src/index.js';
import brainPrime from '../src/games/game-prime.js';

// Settings
const easy = 3;
const normal = 6;
const hard = 10;
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

brainGame(rules, brainPrime, easy, normal, hard);
