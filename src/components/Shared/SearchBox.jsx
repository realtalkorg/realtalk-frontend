const SearchBox = () => {
    return (
        <div className="p-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Tìm kiếm cuộc trò chuyện..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <span className="absolute right-3 top-2.5 text-white/70">🔍</span>
            </div>
        </div>
    );
}

export default SearchBox;