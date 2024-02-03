
import { useState } from 'react';
import './App.scss'
import Button from './components/Button';
import FormAddFriend from './components/FormAddFriend';
import FriendList from './components/FriendList';
import FormSplitBill from './components/FormSplitBill';

function App() {

  const [ToggleBtn, setToggleBtn] = useState(false);
  const [selectedfriend , setSelectedfriend] = useState(null)
  const [friendList , setFriendList] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ])
  const handleToggle = ()=>{
    setToggleBtn(toggle => !toggle)
  }

  const handleAddFriend =(newFriend)=>{
    setFriendList(addFriend => [...addFriend, newFriend])
    setToggleBtn(toggle => !toggle)
  }
  
  const handleSelectedFriend =(friend) =>{
    // setSelectedfriend(friend)
    setSelectedfriend(selected => selected?.id === friend?.id ? null : friend)
  }

  const handleSplitBill = (value) =>{
    console.log(value)
    setFriendList((friends) => 
      friends.map(friend => friend.id === selectedfriend.id ?
        {...friend , balance: friend.balance + value} : friend)
    )}

  return (
    <div className='app'>
    <div className="sidebar">
      <FriendList initialFriends={friendList} onSelectFriend={handleSelectedFriend} selectedfriend={selectedfriend}/>

     {ToggleBtn &&  <FormAddFriend onAddFriend={handleAddFriend}  />}

      <Button onClick={handleToggle}>{!ToggleBtn ? 'Add Friend' : 'Close'}</Button>
    </div>

    {selectedfriend &&  <FormSplitBill selectedfriend={selectedfriend} onSplitBill={handleSplitBill}/>}
    </div>

    
  )
}

export default App
