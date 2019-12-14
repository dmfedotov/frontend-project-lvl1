#!/usr/bin/env node
import { startGame } from '..';
import { RULES, generateQuestion } from '../games/brain-calc';

startGame(RULES, generateQuestion);
