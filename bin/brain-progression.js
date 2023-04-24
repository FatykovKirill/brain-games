#!/usr/bin/env node
import brainGame from '../src/index.js';
import brainProgression from '../src/games/game-progression.js';

// Settings
const easy = 3;
const normal = 6;
const hard = 10;
const rules = 'What number is missing in the progression?';

brainGame(rules, brainProgression, easy, normal, hard);
