const ConversationItem = () => {
    return (
        <>
            <div className="chat-item bg-white/10 rounded-lg p-3 cursor-pointer hover:bg-white/20 transition-colors" >
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center font-bold">MA</div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white online-dot"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold truncate">Minh Anh</h3>
                            <span className="text-xs text-white/70">2 phút</span>
                        </div>
                        <p className="text-sm text-white/70 truncate">Hôm nay có rảnh không? 😊</p>
                    </div>
                </div>
            </div>

            <div className="chat-item rounded-lg p-3 cursor-pointer hover:bg-white/20 transition-colors">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center font-bold">👥</div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">3</div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold truncate">Nhóm Dự Án</h3>
                            <span className="text-xs text-white/70">15 phút</span>
                        </div>
                        <p className="text-sm text-white/70 truncate">Tuấn: Đã hoàn thành task...</p>
                    </div>
                </div>
            </div>

            <div className="chat-item rounded-lg p-3 cursor-pointer hover:bg-white/20 transition-colors">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center font-bold">LH</div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold truncate">Lan Hương</h3>
                            <span className="text-xs text-white/70">1 giờ</span>
                        </div>
                        <p className="text-sm text-white/70 truncate">Cảm ơn bạn nhiều nhé! 💕</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConversationItem;