import React from 'react';
import PostList from './posts/PostList'


const posts = [
  {
      "id": 1,
      "author": "admin",
      "title": "frist",
      "subject": "some data",
      "date_post": "2020-05-19T23:57:37.564821Z",
      "comments": [
          {
              "user": "abdu",
              "comment": "my comments",
              "date_comment": "2020-05-19T23:59:06.780895Z"
          },
          {
              "user": "abdu",
              "comment": "dash",
              "date_comment": "2020-05-20T09:47:48.883681Z"
          }
      ]
  },
  {
      "id": 2,
      "author": "admin",
      "title": "one",
      "subject": "my home",
      "date_post": "2020-05-19T23:57:52.073089Z",
      "comments": []
  },
  {
      "id": 3,
      "author": "abdu",
      "title": "three update",
      "subject": "testing stuff",
      "date_post": "2020-05-19T23:58:13.217148Z",
      "comments": [
          {
              "user": "abdu",
              "comment": "test 1234",
              "date_comment": "2020-05-19T23:59:27.984736Z"
          },
          {
              "user": "admin",
              "comment": "done",
              "date_comment": "2020-05-19T23:59:49.050032Z"
          }
      ]
  },
  {
      "id": 4,
      "author": "admin",
      "title": "new",
      "subject": "data",
      "date_post": "2020-05-20T08:14:00.317250Z",
      "comments": [
          {
              "user": "abdu",
              "comment": "comments",
              "date_comment": "2020-05-20T09:48:18.110392Z"
          }
      ]
  },
  {
      "id": 5,
      "author": "admin",
      "title": "android",
      "subject": "dummy",
      "date_post": "2020-05-21T11:46:08.951608Z",
      "comments": [
          {
              "user": "admin",
              "comment": "one three",
              "date_comment": "2020-05-20T09:48:04.835021Z"
          }
      ]
  },
  {
      "id": 6,
      "author": "admin",
      "title": "android",
      "subject": "dummy",
      "date_post": "2020-05-21T11:48:12.836454Z",
      "comments": []
  },
  {
      "id": 7,
      "author": "admin",
      "title": "android",
      "subject": "dummy",
      "date_post": "2020-05-21T11:49:05.319452Z",
      "comments": []
  },
  {
      "id": 8,
      "author": "admin",
      "title": "android",
      "subject": "dummy",
      "date_post": "2020-05-21T11:49:09.667292Z",
      "comments": []
  },
  {
      "id": 9,
      "author": "abdu",
      "title": "my post",
      "subject": "any data",
      "date_post": "2020-05-21T14:01:52.138852Z",
      "comments": []
  }
]
const App = ()=> {
  return(
    <PostList posts={posts}/>
  )
}

export default App;
