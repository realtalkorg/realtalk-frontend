import MessageItem from './MessageItem.jsx';

const MessageList = (props) => {

    return (
        <div id="messages-container" className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-gradient-to-b from-gray-50 to-white">
            {/*messages gen here*/}
            {props.chatMessages.map((item) => {
                return (<MessageItem
                    message = {item.message}
                    sender = {item.sender}
                    time = {item.time}
                />);
            })}
        </div>
    );
}

export default MessageList;