import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
export default function ChatOutput(props) {
    return (
        <div>
            <br></br>
            <div className="line">
            <div className="icon-chat">
                <i class={"fa-solid fa-circle-minus fa-4x icon-size green-color border-circle"}></i>
            </div></div>
            <div className="box sb2">
                <div className="chat-username">
                    <ReactMarkdown children={props.todo.username} remarkPlugins={[remarkGfm]} className="chat-username" />
                </div>
                <div className="chat-text">
                    <ReactMarkdown children={props.todo.title} remarkPlugins={[remarkGfm]} className="chat-text" />
                </div>
            </div>
        </div>
    )
}       