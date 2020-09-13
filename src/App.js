import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';

import axios from './axios';

import Chat from './Chat';
import Sidebar from './Sidebar';

import './App.css';

function App() {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const getMessages = async () => {
			try {
				const { data } = await axios.get('/messages/sync');
				setMessages(data);
			} catch (error) {}
		};

		getMessages();

		return () => {
			// cleanup
		};
	}, []);

	useEffect(() => {
		const pusher = new Pusher('cb6d04112788a3c2de25', {
			cluster: 'us2',
		});

		const channel = pusher.subscribe('messages');
		channel.bind('inserted', function newMessage(newMessage) {
			setMessages([...messages, newMessage]);
		});
		return () => {
			// cleanup
			channel.unbind_all();
			channel.unsubscribe();
		};
	}, [messages]);

	console.log(messages);
	return (
		<div className="app">
			<div className="app__body">
				<Sidebar></Sidebar>
				<Chat></Chat>
			</div>
		</div>
	);
}

export default App;
