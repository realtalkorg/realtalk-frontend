import ConversationItem from './ConversationItem.jsx';

const ConversationList = () => {
    return (
        <div className="flex-1 overflow-y-auto">
            <div className="p-2 space-y-1">
                {/*ConversationItem gen here*/}
                <ConversationItem/>
            </div>
        </div>
    );
}
export default ConversationList;