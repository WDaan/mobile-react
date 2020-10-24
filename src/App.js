import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Home from './views/Home'
import MovieDetail from './views/MovieDetail'

const App = () => {
    return (

        <Router>
            <Switch>
                <Route path='/movie/:id' component={MovieDetail} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>

    )

}

export default App