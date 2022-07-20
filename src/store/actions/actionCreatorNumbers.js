import {
  NUM_MIN_CHANGED, 
  NUM_MAX_CHANGED
} from './types'

export const changeMinNumber = newNumber => {
  return {
    type: NUM_MIN_CHANGED,
    payload: newNumber
  }
}

export const changeMaxNumber = newNumber => {
  return {
    type: NUM_MAX_CHANGED,
    payload: newNumber
  }
}
