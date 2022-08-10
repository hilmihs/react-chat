import ChatOutput from "./ChatOutput";

export default function ChatList(props) {
    console.log(props.data)
    const list = props.data.map((item) => (<ChatOutput 
        key={item.id} 
        todo={item} 
        remove={() => props.remove(item.id)} 
        resend={() => props.resend(item.id, item.title)} />))

        return (
           
            <p>
                 
                {list}
            </p>
           
        )
}