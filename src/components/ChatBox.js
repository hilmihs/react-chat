import { Component } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";


export default class ChatBox extends Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }

    componentDidMount() {
        fetch('http://localhost:3000/todos')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    data: data.map(item => {
                    item.sent = true
                    return item
                    })
                })
            });
    }

    addChat = (title) => {
        const id = Date.now()
        // this.setState(state => ({ data: [...state.data, { id, title, sent: true }] }))
        fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ id, title })
        }).then((response) => response.json())
            .then((data) => {
                this.setState(state => ({ data: state.data.map((item) => {
                    if(item.id == id) {
                        item.sent = false
                    }
                    return item
                }) }))
            }).catch((e) => {

            })

    }
    removeChat = (id) => {
        console.log(`sampai sini`, id)
        
        console.log(this.state.data)
        fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((data) => {
                // this.setState(state => ({ data: state.data.filter((item) => item.id != id) }))
            });

    }
    resendChat = (id, title) => {
        fetch(`http://localhost:3000/todos/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, title })
        }).then((response) => response.json())
            .then((data) => {
                console.log(data, id, title)
                this.setState(state => ({ data: state.data.map((item) => {
                    if(item.id == id) {
                        item.sent = true
                    }
                    return item
                }) }))
           
            });

    }
    render() {
        return (
            <div>
               <div className="card"> <div className="card-header"> 
                        <br></br>   
                        <h3 className="text-center align-middle">React Chat</h3>
                        </div></div>
                   
                    <ChatList data={this.state.data} remove={this.removeChat} resend={this.resendChat}/>

                    <ChatForm add={this.addChat} />
                </div>
            )
    }
}