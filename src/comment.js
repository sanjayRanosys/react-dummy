import React, { Component } from 'react';
import './comment.css'
import Clock from './clock';

//convert date into proper format
function getDate(d) {
	return d.toLocaleDateString();
}

//component for Avatar(image) of user
function Avatar(props) {
	return (
		<div className="comment-img">
			<img src={props.img} alt="Kitty" />
		</div>
	);
}

//component for user profile
function Profile(props) {
	return (
		<div className="comment-user-profile">
			<Avatar img={props.img} />
			<div className="comment-date">
				{getDate(props.date)}
			</div>
		</div>
	);
}

class comment extends Component {
	render() {
		return (
			<div className="comment-main">
				<Profile img={this.props.img} date={this.props.date} />
				<div className="comment-author-name">
					{this.props.author.name}
				</div>
				<div className="comment-author-comment">
					{this.props.author.comment}
				</div>
				<div className="comment-author-comment">
					{this.props.author.company}
				</div>
				<Clock />
			</div>
		);
	}
}

export default comment