import healthLevel from '../health';

test.each([
  ['Маг', 60, 'healthy'],
  ['Мечник', 22, 'wounded'],
  ['Лучник', 10, 'critical'],
])('testing level of health  with %s status and %i value', (_, health, status) => {
  const result = healthLevel({ health });
  expect(result).toBe(status);
});
