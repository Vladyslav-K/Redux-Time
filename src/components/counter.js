import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="container text-center">

      <div className="container">
        <h2>{counter}</h2>
      </div>

      <div className="btn-group">
        <button
          onClick={dec}
          className="btn btn-primary">
          DEC
      </button>

        <button
          onClick={inc}
          className="btn btn-primary">
          INC
      </button>

        <button
          onClick={rnd}
          className="btn btn-primary">
          RND
      </button>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps, actions)(Counter)