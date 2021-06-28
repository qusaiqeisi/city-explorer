import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export class Alerttext extends Component {
    render() {
        return (
            <div>
                {this.props.alert &&
                    <Alert variant={'danger'}>
                        Error: 'invalid input! try another input '
                    </Alert>
                }
            </div>
        )
    }
}

export default Alerttext