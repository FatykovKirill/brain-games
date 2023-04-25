#!/usr/bin/env node
import brainGame from '../src/index.js';
import brainProgression from '../src/games/game-progression.js';

// Settings
const rules = 'What number is missing in the progression?';

brainGame(rules, brainProgression);
