/**
 * Created by xuan on 16/4/16.
 */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions/todos'
import Header from '../components/Header'

class App extends Component {
    render () {
        return (
          <div>
              <div className="cx-nav">
                  <Header/>
              </div>
              <div className="cx-back">
                  <div className="cx-container pa-tb-40">
                      {this.props.children}
                  </div>

              </div>
          </div>
        )
    }

}

export default App

