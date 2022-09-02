const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  })

  it("return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  })

  it("return empty array [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  })

  it("return [] for []", () => {
    assert.deepEqual(tail([]), [33]);
  })
})