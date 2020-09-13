import React from 'react';
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons';
import { IconButton, Avatar } from '@material-ui/core';

import SidebarChat from './SidebarChat';

import './Sidebar.css';

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__header">
				<Avatar></Avatar>
				<div className="sidebar__headerRight">
					<IconButton>
						<DonutLarge></DonutLarge>
					</IconButton>
					<IconButton>
						<Chat></Chat>
					</IconButton>
					<IconButton>
						<MoreVert></MoreVert>
					</IconButton>
				</div>
			</div>
			<div className="sidebar__search">
				<div className="sidebar__searchContainer">
					<SearchOutlined></SearchOutlined>
					<input placeholder="Search or start a new chat" type="text" />
				</div>
			</div>
			<div className="sidebar__chats">
				<SidebarChat></SidebarChat>
				<SidebarChat></SidebarChat>
				<SidebarChat></SidebarChat>
			</div>
		</div>
	);
}

export default Sidebar;
