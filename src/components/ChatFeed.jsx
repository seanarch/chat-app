import React from 'react'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

export default function ChatFeed(props) {

    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.userName;

            return (
                <div className="" key={`msg_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {isMyMessage ? <MyMessage message={message} /> : <TheirMessage message={message} lastMessage={lastMessageKey} />}
                    </div>
                    <div className="read-reciepts" style={{ marginright: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}></div>
                </div>
            )
        })
    }

}
