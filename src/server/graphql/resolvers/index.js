import { addColor, color, colorList, removeColor } from './colors';

export default {
  Query: {
    hello: () => Promise.resolve({ message: 'Hello, World!' }),
    color,
    colorList
  },
  Mutation: {
    addColor,
    removeColor
  }
};
