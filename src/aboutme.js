import React, {Component} from 'react';
import Comment from './comment';

//comment object
const commentObj = {
	img: '64.jpg',
	date: new Date(),
	author: {
		name: 'Sanjay Verma',
		comment: 'Senior Software Engineer',
		company: 'Ranosys'
	}
};

class AboutMe extends Comment {
	render() {
		return (
			<Comment img={commentObj.img} date={commentObj.date} author={commentObj.author} />
		);
	}
}

export default AboutMe;