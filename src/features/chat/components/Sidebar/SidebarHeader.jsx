import {TeamOutlined} from "@ant-design/icons";

const SidebarHeader = () => {
    return (
        <div className="p-6 border-b border-indigo-500">
            <div className="flex items-center space-x-3 justify-between">
                {/*<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">*/}
                {/*    <span className="text-indigo-600 font-bold text-lg">💬</span>*/}
                {/*    <TeamOutlined/>*/}
                {/*</div>*/}

                <div>
                    <h1 className="font-bold text-2xl">ChatApp</h1>
                </div>
                <TeamOutlined className="text-2xl"/>
            </div>
        </div>
    );
}

export default SidebarHeader;