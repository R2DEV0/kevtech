import React, { FC, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

interface ChatMessage {
    sender: string;
    message: string;
}

const Chat: FC = () => {
    const [chatOpen, setChatOpen] = useState<boolean>(false);
    const [prompt, setPrompt] = useState<string>("");
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const MakeCall = async () => {
        setChatHistory(p => [...p, { 'sender': 'You', 'message': prompt }]);
        const res = await axios.post('/api/openai', {input: prompt});
        if(res.data.statusCode === 200){
            setChatHistory(p => [...p, { 'sender': 'Chatbot', 'message': res.data.data }]);
            setPrompt("");
        } else {
            setChatHistory(p => [...p, { 'sender': 'Chatbot', 'message': 'Something went wrong. Please try again.' }]);
        }
    }

    useEffect(() => {
        if (chatEndRef.current && chatOpen) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatHistory, chatOpen]);

    return(
        <div className={`chat ${chatOpen ? 'chat-open' : 'chat-closed'}`} onClick={() => { !chatOpen && setChatOpen(true)}}>
            { chatOpen ?
                <div className='open-chat-body'>
                    <div className='chat-sec flex flex-col justify-center items-center'>
                        <div>
                            { chatHistory.map((chat, i) => {
                                return(
                                    <div key={i} className={`p-2 mb-2 chat-box ${chat.sender}`}>
                                        <p><strong>{chat.sender}:</strong></p>
                                        <p className='mt-1'>{chat.message}</p>
                                    </div>
                                )
                            })}
                            <div ref={chatEndRef}></div>
                        </div>
                    </div>
                    <div className='input-sec flex flex-col justify-center items-center'>
                        <input type='text' className='chat-input w-[95%]' value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
                        <div className='mt-2 flex items-center justify-between space-x-5'>
                            <button type='button' className='submit-button' onClick={MakeCall}>SUBMIT</button>
                            <button type='button' className='close-chat' onClick={() => setChatOpen(false)}>CLOSE</button>
                        </div>
                    </div>
                </div>
                :
                <div className='flex justify-center items-center'>
                    <FontAwesomeIcon icon={faComment} className='text-3xl'/>
                </div>
            }
        </div>
    )
};

export default Chat;