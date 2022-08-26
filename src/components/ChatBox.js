import { Component, useEffect } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import { io } from "socket.io-client";

const apiUrl = "http://13.212.114.9:3000"
const socket = io.connect(`${apiUrl}`)

export default class ChatBox extends Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }

    componentDidMount() {
        fetch(`${apiUrl}/chat`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data, `awal`)
                this.setState({
                    data: data.data.map(item => {
                        item.sent = true
                        return item
                    })
                })
            })
             
    }

    componentDidUpdate() {
    socket.on("receive_message", (data) => {
        fetch(`${apiUrl}/chat`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data, `kedua`)
                this.setState({
                    data: data.data.map(item => {
                        item.sent = true
                        return item
                    })
                })
            })
    })    
}
    addChat = (username, title) => {
        socket.emit("send_message", { title: `${title}`, username: `${username  }` })
        const id = Date.now()
        this.setState(state => ({ data: [...state.data, { id, username, title }] }))
        fetch(`${apiUrl}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, username, title })
        }).then((response) => response.json())
            .then((data) => {
                this.setState(state => ({
                    data: state.data.map((item) => {
                        if (item.id == id) {
                            item.sent = false
                        }
                        return item
                    })
                }))
            }).catch((e) => {

            })
       

    }
    removeChat = (id) => {
        console.log(`sampai sini`, id)

        fetch(`${apiUrl}/chat/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((data) => {
            });

    }
    resendChat = (id, username, title) => {
        fetch(`${apiUrl}/chat/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, username, title })
        }).then((response) => response.json())
            .then((data) => {
                this.setState(state => ({
                    data: state.data.map((item) => {
                        if (item.id == id) {
                            item.sent = true
                        }
                        return item
                    })
                }))

            });

       

    }

    
    render() {
        return (
            <div>
                <div className="card"> <div className="card-header">
                    <br></br>
                    <h3 className="text-center align-middle">React Chat</h3>
                </div></div>

                <ChatList data={this.state.data} remove={this.removeChat} resend={this.resendChat} />

                <ChatForm add={this.addChat} />
            </div>
        )
    }
}