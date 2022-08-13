import ChatOutput from "./ChatOutput";
import React from "react";

export default function ChatList(props) {
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