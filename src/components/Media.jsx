import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Media = props => {
  const { min, max } = props.numbers

  return (
    <Card title='Média dos Números' blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Media)
