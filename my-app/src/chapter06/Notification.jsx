import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16,
    },
    messageText:{
        color: "blac",
        fontSize: 16,
    },
};

class Notification extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }
// constructor을 생성.
//Notification에는 state에 아무것도 가지지 않음.
    componentDidMount(){
        console.log(`${this.props.id} componentDidMount() called.`);
    }
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }
    render(){
        return(
            <div style={styles.wrapper}>
                <span style={styles.messageText}>
                    {this.props.message}
                </span>
            </div>
        );
    }
}

export default Notification;

