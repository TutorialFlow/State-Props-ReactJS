import React from 'react';

class Timestamp extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {date: new Date()};
        this.updateProps = this.updateProps.bind(this);
    }

    updateProps = () => {
        this.setState({date: new Date()});
        this.props  = {val:new Date()};
    }

    render() {
        return(
            <div>
                <div>
                    <p>Current Timestamp from props : {this.props.val.getTime()}</p>    
                    <p>Current Timestamp from state : {this.state.date.getTime()}</p>  
                </div>
                <br/>
                <button onClick={this.updateProps}>Update Props & State</button>
            </div>
        );
    }
}
export default Timestamp;