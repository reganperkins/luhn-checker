const chai = require('chai');
const { assert } = chai;
const luhn = require('../lib/luhn');
const { check } = luhn;

const validTestNumbers = [
  49927398716,
  '1234567812345670'
];

const invalidTestNumbers = [
  49927398717,
  '1234567812345678',
];

describe('Luhn check', () => {
  it('should return true if the account number is valid', () => {
    assert.isTrue(check(validTestNumbers[0]));
  });
  it('should return false if the account number is invalid', () => {
    assert.isFalse(check(invalidTestNumbers[0]));
  });
  it('should return true if the account number is valid and passed as a string', () => {
    assert.isTrue(check(validTestNumbers[1]));
  });
  it('should return false if the account number is invalid and passed as a string', () => {
    assert.isFalse(check(invalidTestNumbers[1]));
  });
});
