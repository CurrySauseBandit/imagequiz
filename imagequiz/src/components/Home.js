import React, { useState } from 'react';
import flowers from "./Data";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Image'
import ReactDOM from 'react-dom'
const Home = () => {
    return(
              
             ReactDOM.render(
                <Comment
                  author={comment.author}
                />,
                document.getElementById('root')
              )
        
    );
}

function ListItem(props) {
    return <li>{props.values}</li>
}

function flowerList(props) {
    const flowies = props.flowers
    const listItems = flowers.map((picture) =>
    <ListItem key = {flowers.name} value = {flowers.picture} />
    );
    return <ul>
        {listItems}
    </ul>
}

function Avatar(props) {
    return (
        <img 
        className = "Avatar"
        src = {props.user.picture}
        alt = {props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }

  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
         <div className="UserInfo-name">
          {props.author.name}
        </div>
        <div className="Comment-text">{props.text}</div>
      </div>
    );
  }

  const comment = {
    author: {
      name: flowers[0].name,
      avatarUrl: flowers[0].picture,
    },
  };

  const comment1 = {
    author: {
      name: flowers[1].name,
      avatarUrl: flowers[1].picture,
    },
  };





export default Home;