import { addColor, color, colorList, removeColor, updateColor } from './colors';

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

  it('should return a rejected promise when it cannot remove the color', (done) => {
    return removeColor({}, { id: 99 }).catch((e) => {
      expect(e).toBe('Cannot remove color: 99');
      done();
    });
  });

  it('should update a color by id', (done) => {
    const newColor = { name: 'Purple' };
    return updateColor({}, { id: 1 }, { color: newColor }).then((c) => {
      expect(c.name).toBe(newColor.name);
      done();
    });
  });

  it('should return a rejected promise when it cannot update the color', (done) => {
    const newColor = { name: 'Purple' };
    return updateColor({}, { id: 99 }, { color: newColor }).catch((e) => {
      expect(e).toBe('Cannot update color: 99');
      done();
    });
  });
});
