import React, { useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import {
	SearchOutlined,
	AttachFile,
	MoreVert,
	InsertEmoticon,
	Mic,
} from '@material-ui/icons';

import './Chat.css';

function Chat() {
	const [input, setInput] = useState('');
	const sendMessage = () => {};
	return (
		<div className="chat">
			<div className="chat__header">
				<Avatar></Avatar>

				<div className="chat__headerInfo">
					<h3>Room name</h3>
					<p>Last seen at...</p>
				</div>

				<div className="chat__headerRight">
					<IconButton>
						<SearchOutlined></SearchOutlined>
					</IconButton>
					<IconButton>
						<AttachFile></AttachFile>
					</IconButton>
					<IconButton>
						<MoreVert></MoreVert>
					</IconButton>
				</div>
			</div>

			<div className="chat__body">
				<p className="chat__message">
					<span className="chat__name">emmanuel</span>
					this is a message
					<span className="chat__timestamp">{new Date().toUTCString()}</span>
				</p>
				<p className="chat__message chat__receiver">
					<span className="chat__name">emmanuel</span>
					this is a message
					<span className="chat__timestamp">{new Date().toUTCString()}</span>
				</p>
			</div>

			<div className="chat__footer">
				<InsertEmoticon></InsertEmoticon>
				<form>
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Type a message"
					/>
					<button type="submit" onClick={sendMessage}>
						Send a message
					</button>
				</form>
				<Mic></Mic>
			</div>
		</div>
	);
}

export default Chat;
