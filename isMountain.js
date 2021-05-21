function isMountain(height) {
  //ここから書きましょう
  if (height.length < 3) {
    return false;
  }

  let peakPoint = 0;
  for (let i = 1; i < height.length; i++) {
    if (height[i] <= height[i - 1]) {
      peakPoint = i - 1;
      break;
    }
  }
  if (peakPoint == 0 || peakPoint == height.length) {
    return false;
  }
  for (let i = 1; i < height.length - peakPoint; i++) {
    if (height[i + peakPoint] >= height[i - 1 + peakPoint]) {
      return false;
    }
  }
  return true;
}
