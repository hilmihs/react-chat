import ChatOutput from "./ChatOutput";
import React from "react";
// import reactMarkdown from "react-markdown";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// export default class ChatList extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         console.log(props.data)
//         const list = props.data.map((item) => (<ChatOutput
//             key={item.id}
//             todo={item}
//             remove={() => props.remove(item.id)}
//             resend={() => props.resend(item.id, item.title)} />))
//         const input = ` <p>            
//                      ${list}
//                     </p>`

//     return (
//         <ReactMarkdown source={input} />
//     )
// }
// }
export default function ChatList(props) {
    console.log(props.data)
    const list = props.data.map((item) => (<ChatOutput
        key={item.id}
        todo={item}
        remove={() => props.remove(item.id)}
        resend={() => props.resend(item.id, item.title)} />))
//     const input = ` <p>            
//            {list}
// </p>
//     `
    return (
<p>            
           {list}
</p>
        // <ReactMarkdown source={input} escapeHtml={false} />
    )
}