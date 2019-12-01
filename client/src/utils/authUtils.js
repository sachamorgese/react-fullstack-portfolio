// @flow
import type { RoleType } from '../types/component';

const ADMIN = 'admin';
const MOD = 'mod';

export function isAdmin(role: RoleType): boolean {
  return role === ADMIN;
}

export function isMod(role: RoleType): boolean {
  return role === ADMIN || role === MOD;
}
