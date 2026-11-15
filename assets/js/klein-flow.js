import * as THREE from 'three';

export function positiveGcd(a, b) {
  a = Math.abs(Math.trunc(a));
  b = Math.abs(Math.trunc(b));
  while (b) {
    const rest = a % b;
    a = b;
    b = rest;
  }
  return a || 1;
}

export function kleinCurveData(p, q) {
  const d = positiveGcd(p, q), pr = p / d, qr = q / d;
  const halfPeriod = Math.abs(pr) % 2 === 1 && Math.abs(qr) % 2 === 1;
  return { d, pr, qr, halfPeriod, T: (halfPeriod ? 1 : 2) * Math.PI / d, coverT: 2 * Math.PI / d };
}

export function formatPi(numerator, denominator) {
  if (denominator === 1) return numerator === 1 ? 'π' : `${numerator}π`;
  return numerator === 1 ? `π/${denominator}` : `${numerator}π/${denominator}`;
}

export function kleinPoint(u, v) {
  const cu = Math.cos(u), su = Math.sin(u), cv = Math.cos(v), sv = Math.sin(v);
  const c2 = cu * cu, c4 = c2 * c2, c6 = c4 * c2;
  const A = 3 * cv - 30 * su + 90 * c4 * su - 60 * c6 * su + 5 * cu * cv * su;
  const B = 3 * cv - 3 * c2 * cv - 48 * c4 * cv + 48 * c6 * cv - 60 * su
    + 5 * cu * cv * su - 5 * c2 * cu * cv * su - 80 * c4 * cu * cv * su + 80 * c6 * cu * cv * su;
  const scale = 1.25;
  return new THREE.Vector3(scale * (-2 / 15) * cu * A, scale * (-1 / 15) * su * B, scale * (2 / 15) * (3 + 5 * cu * su) * sv);
}
