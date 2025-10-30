const MessageItem = (props) => {

    const renderMessage = () => {
        if(props.sender === "Me") {
            return (
                <div className="flex justify-end message-animation">
                    <div className="max-w-xs lg:max-w-md">
                        <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl rounded-tr-md p-3 shadow-sm">
                            <p>{props.message}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 mr-3 text-right">{props.time}</p>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="flex justify-start message-animation">
                    <div className="max-w-xs lg:max-w-md">
                        <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm border border-gray-100">
                            <p className="text-gray-800">{props.message}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 ml-3">{props.time}</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            {renderMessage()}
        </>
    );
}

export default MessageItem;