#!/usr/bin/env node
import { startGame } from '..';
import { RULES, generateQuestion } from '../games/brain-prime';

startGame(RULES, generateQuestion);
