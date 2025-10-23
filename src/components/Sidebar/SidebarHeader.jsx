const SidebarHeader = () => {
    return (
        <div className="p-6 border-b border-indigo-500">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-indigo-600 font-bold text-lg">💬</span>
                </div>
                <div>
                    <h1 className="font-bold text-xl">ChatApp</h1>
                    <p className="text-indigo-200 text-sm">Kết nối mọi lúc</p>
                </div>
            </div>
        </div>
    );
}

export default SidebarHeader;