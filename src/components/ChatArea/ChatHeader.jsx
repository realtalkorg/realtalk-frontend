const ChatHeader = () => {
    return (
        <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div id="current-avatar"
                             className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center font-bold text-white">MA
                        </div>
                        <div id="current-status"
                             className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white online-dot"></div>
                    </div>
                    <div>
                        <h2 id="current-name" className="font-bold text-gray-800">Minh Anh</h2>
                        <p id="current-activity" className="text-sm text-green-600">Đang hoạt động</p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors hover-lift">📞
                    </button>
                    <button
                        className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors hover-lift">📹
                    </button>
                    <button
                        className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors hover-lift">ℹ️
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;