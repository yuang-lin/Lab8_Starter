// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('phone1', () => {
  expect(functions.isPhoneNumber('(555)333-3333')).toBe(true);
})

test('phone2', () => {
  expect(functions.isPhoneNumber('(111)222-3333')).toBe(true);
})

test('phone3', () => {
  expect(functions.isPhoneNumber('12890')).toBe(false);
})

test('phone4', () => {
  expect(functions.isPhoneNumber('123')).toBe(false);
})

test('email1', () => {
  expect(functions.isEmail('hello@gmail.com')).toBe(true);
})

test('email2', () => {
  expect(functions.isEmail('loveyou@gmail.com')).toBe(true);
})

test('email3', () => {
  expect(functions.isEmail('hello')).toBe(false);
})

test('email4', () => {
  expect(functions.isEmail('ifiwereaboy')).toBe(false);
})

test('password1', () => {
  expect(functions.isStrongPassword('helloguys')).toBe(true);
})

test('password2', () => {
  expect(functions.isStrongPassword('imfine')).toBe(true);
})

test('password3', () => {
  expect(functions.isStrongPassword('hi')).toBe(false);
})

test('password4', () => {
  expect(functions.isStrongPassword('___________')).toBe(false);
})

test('date1', () => {
  expect(functions.isDate('10/10/2020')).toBe(true);
})

test('date2', () => {
  expect(functions.isDate('11/11/2002')).toBe(true);
})

test('date3', () => {
  expect(functions.isDate('1/2/3')).toBe(false);
})

test('date4', () => {
  expect(functions.isDate('3/2/1')).toBe(false);
})

test('hex1', () => {
  expect(functions.isHexColor('FF5733')).toBe(true);
})

test('hex2', () => {
  expect(functions.isHexColor('33FFC3')).toBe(true);
})

test('hex3', () => {
  expect(functions.isHexColor('hi')).toBe(false);
})

test('hex4', () => {
  expect(functions.isHexColor('1')).toBe(false);
})