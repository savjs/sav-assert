import {types, typeValue, isObject as utilIsObject } from 'sav-util'

const prefix = 'ASSERT_'

function testAssert(expr, msg) {
	if (!expr) {
		throw new Error(msg)
	}
}

function makeIsType(needType) {
	return (val)=> {
		testAssert(types[`is${needType}`](val), `${prefix}_IS_${needType}`)
	}
}

export const isBoolean 		= makeIsType('Boolean')
export const isString  	 	= makeIsType('String')
export const isNumber  		= makeIsType('Number')
export const isObject  		= makeIsType('Object')
export const isArray   		= makeIsType('Array')
export const isFunction 	= makeIsType('Function')
export const isRegExp 		= makeIsType('RegExp')
export const isDate 		= makeIsType('Date')
export const isNull 		= makeIsType('Null')
export const isUndefined 	= makeIsType('Undefined')
export const isInt 			= makeIsType('Int')
export const isUint 		= makeIsType('Uint')

function makeIsNotType(needType) {
	return (val)=> {
		testAssert(!types[`is${needType}`](val), `${prefix}_NOT_${needType}`)
	}
}

export const isNotBoolean	 	= makeIsNotType('Boolean')
export const isNotString	  	= makeIsNotType('String')
export const isNotNumber	  	= makeIsNotType('Number')
export const isNotObject	  	= makeIsNotType('Object')
export const isNotArray	   		= makeIsNotType('Array')
export const isNotFunction		= makeIsNotType('Function')
export const isNotRegExp	 	= makeIsNotType('RegExp')
export const isNotDate	 		= makeIsNotType('Date')
export const isNotNull	 		= makeIsNotType('Null')
export const isNotUndefined		= makeIsNotType('Undefined')
export const isNotInt	 		= makeIsNotType('Int')
export const isNotUint	 		= makeIsNotType('Uint')


function makeHasType(needType) {
	return (obj, val)=> {
		if (utilIsObject(obj)) {
			testAssert(types[`is${needType}`](obj[val]), `${prefix}_HAS_${needType}`)
		}
	}
}

export const hasBoolean	 	= makeHasType('Boolean')
export const hasString	  	= makeHasType('String')
export const hasNumber	  	= makeHasType('Number')
export const hasObject	  	= makeHasType('Object')
export const hasArray	   	= makeHasType('Array')
export const hasFunction	= makeHasType('Function')
export const hasRegExp	 	= makeHasType('RegExp')
export const hasDate	 	= makeHasType('Date')
export const hasNull	 	= makeHasType('Null')
export const hasUndefined	= makeHasType('Undefined')
export const hasInt	 		= makeHasType('Int')
export const hasUint	 	= makeHasType('Uint')



export function equal(a, b) {
	testAssert(a === b, `${prefix}_EQUAL`)
}

export function neq(a, b) {
    testAssert(!(a === b), `${prefix}_NEQ`)
}

export function startWith(str, b) {
    isString(str)
    isString(b)
    testAssert(str.substr(0, b.length) === b, `${prefix}_STAET_WITH`)
}

export function notStartWith(str, b) {
    isString(str)
    isString(b)
    testAssert(str.substr(0, b.length) !== b, `${prefix}_NOT_STAET_WITH`)
}

export function inObject(obj, key) {
    isObject(obj)
    isString(key)
    testAssert(key in obj, `${prefix}_IN_OBJECT`)
}

export function inArray(arr, val) {
    isArray(arr)
    testAssert(arr.indexOf(val) !== -1, `${prefix}_IN_ARRAY`)
}
