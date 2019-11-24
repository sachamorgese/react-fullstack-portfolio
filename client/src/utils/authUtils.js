const ADMIN = 'admin';
const MOD = 'mod';

export function isAdmin(role) {
  return role === ADMIN;
}

export function isMod(role) {
  return role === ADMIN || role === MOD;
}
