#!/usr/bin/env node
import brainGame from '../src/index.js';
import brainGcd from '../src/games/game-gcd.js';

// Settings
const rules = 'Find the greatest common divisor of given numbers.';

brainGame(rules, brainGcd);
