let colors = [
  {
    id: 1,
    name: 'Red'
  },
  {
    id: 2,
    name: 'Green'
  },
  {
    id: 3,
    name: 'Blue'
  }
];

let length = colors.length;

export const addColor = (root, { color }) => {
  const newColor = { id: ++length, name: color.name };
  colors = [...colors, newColor];
  return Promise.resolve(newColor);
};

export const color = (root, { id }) => {
  const colorFromId = colors.find((c) => c.id === id);
  return Promise.resolve(colorFromId);
};

export const colorList = () => {
  return Promise.resolve(colors);
};

export const removeColor = (root, { id }) => {
  colors = colors.filter((c) => c.id !== id);
  return Promise.resolve(id);
};
