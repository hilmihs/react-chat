import { Component } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

export default class ChatBox extends Component {
    constructor(props){
        super(props)
        this.state = {data: [{title: "masak"}, {title: "coding"}, {title: "makan"}]}
    }
    addChat = (title) => {
        this.setState(state => ({data: [...state.data, {title}] }))
    }
    render() {
        return (<div>
            <div className="card-header">
            <h3>React Chat</h3></div>
            <ChatList data={this.state.data} />
            <ChatForm add={this.addChat}/>
            
        </div> )
    }
}