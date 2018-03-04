import { addColor, color, colorList, removeColor } from './colors';

describe('Colors', () => {
  it('should add a color', (done) => {
    const newColor = { name: 'Color' };
    return addColor({}, { color: newColor }).then((c) => {
      expect(c.name).toBe(newColor.name);
      done();
    });
  });

  it('should find a color by id', (done) => {
    return color({}, { id: 1 }).then((c) => {
      expect(c.id).toBe(1);
      done();
    });
  });

  it('should get a list of colors', (done) => {
    return colorList().then((list) => {
      expect(list).toBeInstanceOf(Array);
      done();
    });
  });

  it('should remove a color by id', (done) => {
    return removeColor({}, { id: 2 }).then(() => {
      color({}, { id: 2 }).then((c) => {
        expect(c).toBe(undefined);
        done();
      });
    });
  });
});
