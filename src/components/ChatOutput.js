import { ReactMarkdown } from "react-markdown/lib/react-markdown";
export default function ChatOutput(props) {
    return (
        <div>
            <br></br>
            <div className="icon-chat line-in-middle">
            <i class={"fa-solid fa-circle-minus fa-4x icon-size green-color border-circle"}></i>
            </div>
            <div className="box sb2">
                <div className="chat-username">
                <ReactMarkdown children={props.todo.username} className="chat-username" />
                </div>
                <div className="chat-text">
                <ReactMarkdown children={props.todo.title} className="chat-text" />
                    </div>
                    {/* <button type="button"
        className={props.todo.sent ? 'btn btn-danger' : 'btn btn-warning'} onClick={props.todo.sent ? props.remove : props.resend} >{props.todo.sent ? 'hapus' : 'kirim ulang'}</button> */}
                </div>
        </div>
    )
}       