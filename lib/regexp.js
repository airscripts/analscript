import { ANAL_CHARACTERS, GRAMMAR } from './constants.js';

export const matcher = new RegExp(`^[${GRAMMAR}]+$`, 'u');
export const sequence = new RegExp(`${ANAL_CHARACTERS}`, 'g');
