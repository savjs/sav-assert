import test from 'ava'
import * as assert from '../'
import {isFunction} from 'sav-util'

test('assert#api', (ava) => {
  ava.true(isFunction(assert.AssertError))

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

  ava.true(isFunction(assert.isNotBoolean))
  ava.true(isFunction(assert.isNotString))
  ava.true(isFunction(assert.isNotNumber))
  ava.true(isFunction(assert.isNotObject))
  ava.true(isFunction(assert.isNotArray))
  ava.true(isFunction(assert.isNotFunction))
  ava.true(isFunction(assert.isNotRegExp))
  ava.true(isFunction(assert.isNotDate))
  ava.true(isFunction(assert.isNotNull))
  ava.true(isFunction(assert.isNotUndefined))
  ava.true(isFunction(assert.isNotInt))
  ava.true(isFunction(assert.isNotUint))

  ava.true(isFunction(assert.equal))
  ava.true(isFunction(assert.neq))
  ava.true(isFunction(assert.startWith))
  ava.true(isFunction(assert.notStartWith))
  ava.true(isFunction(assert.inObject))
  ava.true(isFunction(assert.inArray))

  try {
    assert.isFunction(0)
  } catch (err) {
    ava.true(err instanceof assert.AssertError)
    ava.true(err.message === 'ASSERT_IS_Function')
    ava.true(err.code === 'ASSERT_IS_FUNCTION')
  }
})
