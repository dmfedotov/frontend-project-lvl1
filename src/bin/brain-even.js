#!/usr/bin/env node
import { startGame } from '..';
import { rules, generateQuestion } from '../games/brain-even';

startGame(rules, generateQuestion);
