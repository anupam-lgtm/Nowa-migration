export function applyOpacity(opacityPercentage, hexColor) {
  const opacity = Math.min(100, Math.max(0, opacityPercentage)) / 100;
  hexColor = hexColor.replace("#", "");
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
