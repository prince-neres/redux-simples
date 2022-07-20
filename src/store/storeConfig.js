import { createStore, combineReducers} from 'redux'
import reducersNumbers from './reducers/reducersNumbers'

const reducers = combineReducers({
  numbers: reducersNumbers
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig
