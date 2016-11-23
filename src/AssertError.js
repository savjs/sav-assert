import { inherits } from 'sav-util'

export function AssertError (message, code) {
  this.message = message || ''
  this.code = this.message.toUpperCase()
}

inherits(AssertError, Error)
