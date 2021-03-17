const { encrypt, decrypt } = require('./../modulos/encrypt');

describe('encrypt', () => {
  test('encrypt message', () => {
    expect(encrypt(['Hola', 'Mundo'])).toBe('PEOVNBMPI');
  });
});