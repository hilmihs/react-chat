export default function ChatOutput(props) {
    return (
        <div className="box sb2">
    <p>
       <p> {props.todo.title} </p>
       <button type="button"
        className={props.todo.sent ? 'btn btn-danger' : 'btn btn-warning'} onClick={props.todo.sent ? props.remove : props.resend} >{props.todo.sent ? 'hapus' : 'kirim ulang'}</button>
    </p></div>
    )
}