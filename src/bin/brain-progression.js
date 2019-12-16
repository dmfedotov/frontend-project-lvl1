#!/usr/bin/env node
import { startGame } from '..';
import { rules, generateQuestion } from '../games/brain-progression';

startGame(rules, generateQuestion);
