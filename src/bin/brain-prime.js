#!/usr/bin/env node
import { startGame } from '..';
import { rules, generateQuestion } from '../games/brain-prime';

startGame(rules, generateQuestion);
