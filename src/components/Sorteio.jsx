import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Sorteio = props => {
  const { min, max } = props.numbers
  const random = parseInt(Math.random() * (max - min)) + min

  return (
    <Card title='Sorteio de um Número' purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{random}</strong>
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

export default connect(mapStateToProps)(Sorteio)
