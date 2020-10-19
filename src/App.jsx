import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Home from './views/Home'
import MovieDetail from './views/MovieDetail'


export default class App extends Component {

    render() {
        return (
            <>
                <Router>
                    <div>
                        <Switch>
                            <Route path='/movie/:id' component={MovieDetail} />
                            <Route path='/' component={Home} />
                        </Switch>
                    </div>
                </Router>
            </>
        )
    }
}