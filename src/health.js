// eslint-disable-next-line linebreak-style
export default function healthLevel(lifeStatus) {
  if (lifeStatus.health > 50) {
    return 'healthy';
  }
  if (lifeStatus.health <= 50 && lifeStatus.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
