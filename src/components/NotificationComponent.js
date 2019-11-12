import React from 'react';

export default class NotificationComponent extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                show: false
            })
        }, 3000);
    }

    render(){
        if(this.state.show === false) return null;
        return (
            <div className="notification">
                <p>{this.props.message}</p>
            </div>
        );
    }
}