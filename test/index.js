import assert from 'assert';
import helloWorld from '../src';

describe('Test Hello World', () => {
  it('Should print Hello World', () => {
    assert.equal(
      helloWorld('TOASTER BONANZA'),
      'Hello world says: TOASTER BONANZA!',
      'Unexpected output'
    );
  });
});
