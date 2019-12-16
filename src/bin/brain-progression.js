#!/usr/bin/env node
import { startGame } from '..';
import { RULES, generateQuestion } from '../games/brain-progression';

startGame(RULES, generateQuestion);
