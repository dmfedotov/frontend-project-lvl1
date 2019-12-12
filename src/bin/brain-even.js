#!/usr/bin/env node
import { startGame } from '..';
import { RULES, generateQuestion, calculateAnswer } from '../games/brain-even';

startGame(RULES, generateQuestion, calculateAnswer);
