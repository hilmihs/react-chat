import ChatOutput from "./ChatOutput";

export default function ChatList(props) {
    const list = props.data.map(item => (<ChatOutput todo={item} />))

        return (
            <ol>
                {list}
            </ol>
        )
}