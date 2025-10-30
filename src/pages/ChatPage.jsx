import SidebarHeader from '../features/chat/components/Sidebar/SidebarHeader.jsx';
import SearchBox from '../features/chat/components/Shared/SearchBox.jsx';
import ConversationList from '../features/chat/components/Sidebar/ConversationList.jsx';
import UserProfile from "../features/chat/components/Sidebar/UserProfile.jsx";
import ChatHeader from '../features/chat/components/ChatArea/ChatHeader.jsx';
import MessageList from '../features/chat/components/ChatArea/MessageList.jsx';
import MessageInput from '../features/chat/components/ChatArea/MessageInput.jsx';
import './ChatPage.css'
import {useState} from "react";

const ChatPage = () => {

    const [chatMessages, setChatMessages] = useState([]);

    const handleSendMessage = (message) => {
        const newMessage = {
            message: message,
            sender: "Me",
            time: new Date().toLocaleTimeString('vi-VN', {
                hour: '2-digit',
                minute: '2-digit'
            })
        }

        // ... is copy all old data
        setChatMessages([...chatMessages, newMessage]);
    }

    return (
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
            <div className="flex h-screen max-w-6xl mx-auto bg-white shadow-2xl">
                {/*components gen here*/}
                <div className="w-80 bg-gradient-to-b from-indigo-600 to-purple-700 text-white flex flex-col">
                    {/*{SIDEBAR COMPONENT}*/}
                    <SidebarHeader/>
                    <SearchBox/>
                    <ConversationList/>
                    <UserProfile/>
                </div>

                <div className="flex-1 flex flex-col">
                    {/*MAIN CHAT AREA COMPONENT*/}
                    <ChatHeader/>
                    <MessageList
                        chatMessages = {chatMessages}
                    />
                    <MessageInput
                        handleSendMessage = {handleSendMessage}
                    />
                </div>
            </div>
        </div>
    );
}
export default ChatPage;