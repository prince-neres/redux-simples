import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { changeMinNumber, changeMaxNumber } from '../store/actions/actionCreatorNumbers'

const Intervalo = props => {
  const { min, max } = props.numbers

  return (
    <Card title='Intervalo de Números' red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo</strong>
          <input
            type='number'
            value={min}
            onChange={e => props.changeMin(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo</strong>
          <input
            type='number'
            value={max} 
            onChange={e => props.changeMax(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    numbers: state.numbers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMin(newNumber) {
      const action = changeMinNumber(newNumber)
      dispatch(action)
    },
    changeMax(newNumber) {
      const action = changeMaxNumber(newNumber)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)
