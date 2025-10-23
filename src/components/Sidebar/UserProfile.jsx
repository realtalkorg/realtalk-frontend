const UserProfile = () => {
    return (
        <div className="p-4 border-t border-indigo-500">
            <div className="flex items-center space-x-3">
                <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center font-bold">BẠN</div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold">Bạn</h3>
                    <p className="text-xs text-white/70">Đang hoạt động</p>
                </div>
                <button className="text-white/70 hover:text-white transition-colors">⚙️</button>
            </div>
        </div>
    );
}

export default UserProfile;