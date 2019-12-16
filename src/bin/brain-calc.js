#!/usr/bin/env node
import { startGame } from '..';
import { rules, generateQuestion } from '../games/brain-calc';

startGame(rules, generateQuestion);
