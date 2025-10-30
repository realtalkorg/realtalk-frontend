import {useState} from "react";

const MessageInput = (props) => {
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(message.trim() === "") return;
        props.handleSendMessage(message);
        setMessage("");
    }

    return (
        <div className="bg-white border-t border-gray-200 p-4">
            <form id="message-form" className="flex items-end space-x-3">
                <button type="button"
                        className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors hover-lift">📎
                </button>
                <div className="flex-1 relative">
                        <textarea
                            id="message-input"
                            placeholder="Nhập tin nhắn..."
                            className="chat-input w-full resize-none border border-gray-300 rounded-2xl px-4 py-3 pr-12 focus:border-indigo-500 transition-colors max-h-32"
                            rows="1"
                            onChange={(event) => setMessage(event.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    if(message.trim() === "") return;
                                    props.handleSendMessage(message);
                                    setMessage("");
                                }
                            }}
                        ></textarea>
                    <button type="button"
                            className="absolute right-3 top-3 text-gray-500 hover:text-indigo-600 transition-colors">😊
                    </button>
                </div>
                <button type="submit"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all hover-lift shadow-lg"
                        onClick = {handleSubmit}
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                    </svg>
                </button>
            </form>
        </div>
    );
}

export default MessageInput;