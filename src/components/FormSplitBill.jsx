import { useState } from "react";
import Button from "./Button";


const FormSplitBill = ({selectedfriend ,onSplitBill}) => {

    const [billValue , setBillValue] = useState('')
    const [paidByUser , setPayByUser] = useState('')
    const [whoIsPaying , setWhoIsPaying] = useState('user')
    const paidByFriend = billValue ? billValue - paidByUser : '';

    const friend = selectedfriend

    const handleSplitBill =(e)=>{
        e.preventDefault();

        if(!billValue || !paidByUser ) return;

        onSplitBill(
            whoIsPaying === 'user'?
            paidByFriend :
            -paidByUser
        )
    }

    return (
        <form className="form-split-bill" onSubmit={handleSplitBill}>
            <h2>Split the bill to {friend.name}</h2>

            <label>🪙Bill Value</label>
            <input type="text"
             value={billValue}
             onChange={e=> setBillValue(Number(e.target.value))}
             />

            <label>👤Your Expense</label>
            <input type="text" 
               value={paidByUser}
               onChange={e=> setPayByUser(
                Number(e.target.value) > billValue ?
                paidByUser : Number(e.target.value)
                )}
            />

            <label>🧑‍🤝‍🧑{friend.name}'s Expense</label>
            <input type="text" disabled value={paidByFriend}/>

            <label>💵Who's paying the bills</label>
            <select value={whoIsPaying} onChange={e=> setWhoIsPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{friend.name}</option>
            </select>

            <Button>Split Bill</Button>
        </form>
    );
}

export default FormSplitBill;
