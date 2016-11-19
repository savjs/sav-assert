import test from 'ava'
import * as assert from '../'
import {isFunction} from 'sav-util'

test('assert#api', (ava) => {
  ava.true(isFunction(assert.isBoolean))
  ava.true(isFunction(assert.isString))
  ava.true(isFunction(assert.isNumber))
  ava.true(isFunction(assert.isObject))
  ava.true(isFunction(assert.isArray))
  ava.true(isFunction(assert.isFunction))
  ava.true(isFunction(assert.isRegExp))
  ava.true(isFunction(assert.isDate))
  ava.true(isFunction(assert.isNull))
  ava.true(isFunction(assert.isUndefined))
  ava.true(isFunction(assert.isInt))
  ava.true(isFunction(assert.isUint))
})
