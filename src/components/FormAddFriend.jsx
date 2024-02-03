import { useState } from "react";
import Button from "./Button";


const FormAddFriend = ({onAddFriend}) => {

  const [friendName, setFriendName] = useState('');
  const [friendPic , setFriendPic] = useState('')

  const handleAddFriend = (e) =>{
    e.preventDefault();

    if( !friendName || !friendPic) return;

    const AddFriend = {
      id : crypto.randomUUID,
      name: friendName,
      image:`https://i.pravatar.cc/48?u=${friendPic}`,
      balance: 0
    }

    onAddFriend(AddFriend)

    console.log(AddFriend)
    setFriendName('')
    setFriendPic('')
  }

    return (
        <form className="form-add-friend" onSubmit={handleAddFriend}>
          <label>🧑‍🤝‍🧑Friend</label>
           <input type="text"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
           />

           <label>🖼️Picture</label>
            <input type="text" 
            value={friendPic}
            onChange={e => setFriendPic(e.target.value)}
            />
          <Button>Submit</Button>
        </form>
    );
}

export default FormAddFriend;
