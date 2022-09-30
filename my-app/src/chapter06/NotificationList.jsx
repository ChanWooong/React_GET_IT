import React from "react";
import Notification from "./Notification"

const reservedNotifications = [
    {   
        id : 1,
        message:"안녕하세요!",
    },
    {
        id : 2,
        message: "반갑습니다~",
    },
    {
        id : 3,
        message: "오늘 저녁에 회의가 예정되어있습니다.",
    },
];

var timer;
class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notifications : [],
        };
    }
// constructor을 생성.
//Notification에는 state에 아무것도 가지지 않음.
    componentDidMount(){
        const {notifications} =this.state;
        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                //주목! [state 업데이트를 위해서 setState()함수를 사용!]
                this.setState({
                    notifications:notifications,
                });
            }
            else {
                this.setState({
                    notifications:[],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((notifications)=>{
                    return(
                        <Notification 
                        key = {notifications.id}
                        id = {notifications.id}
                        message={notifications.message} />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;

