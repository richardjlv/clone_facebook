import React, { Component } from 'react';
import './style.css';

import PostItem from '../PostItem/';

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg'
        },
        date: '04 Jun 2019',
        content: 'O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diogo Fernando',
              avatar: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg'
            },
            content: "E é utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros."
          },
        ],
      },
      {
        id: 4,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe onde posso encontrar um tutorial de javascript?',
        comments: [
          {
            id: 5,
            author: {
              name: 'Daniel Lima',
              avatar: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg'
            },
            content: "Existe um tutorial no site deles"
          },
        ],
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <>
        {posts.map(post => <PostItem key={post.id} {...post} />)}
      </>
    );
  }
}
