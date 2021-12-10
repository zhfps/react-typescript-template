import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
const Connter = (props:any) => {
  const { value, onIncrement, onDecrement } = props
  console.log(onIncrement)
  return (
    <p>
          Clicked: {value} times
      {' '}
      <button onClick={onIncrement}>
            +
      </button>
      {' '}
      <button onClick={onDecrement}>
            -
      </button>
      {' '}
      <button onClick={onIncrement}>
            Increment if odd
      </button>
      {' '}
      <button onClick={onDecrement}>
            Increment async
      </button>
    </p>
  )
}
const mapStateToProps = (state:any) => ({ value: state.count })
const mapDispatchToProps = (dispatch:Dispatch) => ({
  onIncrement: () => dispatch({ type: 'INCREMENT' }),
  onDecrement: () => dispatch({ type: 'DECREMENT' })
})
export default connect(mapStateToProps, mapDispatchToProps)(Connter)
