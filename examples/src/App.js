import React from 'react'
import Examples from './examples'

const App = () => {
    return (
        <div className="row">
            <div className="column">
                <h1>flip-card-react examples (flat)</h1>
                <Examples/>
                <h1>flip-card-react examples (perspective)</h1>
                <Examples perspective/>
            </div>
        </div>
    )
}

export default App
