import React from 'react'
import { Profile } from './Components/Profile/Profile'
// name title articles followers and ratings
export const App = () => {
  const userDetails = [{
    name: "John",
    title: "Frontend Developer",
    articles: 25,
    followers: 101,
    ratings: 7
  },
  {
    name: "Jack",
    title: "Frontend Developer",
    articles: 25,
    followers: 101,
    ratings: 7
  },
  {
    name: "Rocky",
    title: "Frontend Developer",
    articles: 25,
    followers: 101,
    ratings: 7
  },]
  return (
    <div>
      {
        userDetails?.map(user => <Profile user={user} />)
      }
    </div>
  )
}
