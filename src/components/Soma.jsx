import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Soma = props => {
  const { min, max } = props.numbers

  return (
    <Card title='Soma dos Números' green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{min + max}</strong>
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

export default connect(mapStateToProps)(Soma)
