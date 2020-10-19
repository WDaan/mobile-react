import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

export default class Header extends Component {

  render() {
    return (
      <Navbar style={{ backgroundColor: '#4A5568', marginBottom: '10px' }}>
        <Navbar.Brand className='white--text'>WDaan</Navbar.Brand>
      </Navbar>
    )
  }
}