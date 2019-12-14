#!/usr/bin/env node
import { startGame } from '..';
import { RULES, generateQuestion } from '../games/brain-gcd';

startGame(RULES, generateQuestion);
