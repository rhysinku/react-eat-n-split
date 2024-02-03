import Button from "./Button";
const Friend = ({friend ,onSelectFriend , selectedfriend}) => {
    const isSelected = selectedfriend?.id === friend.id

    return (
        <li key={friend.id} className={isSelected? 'selected' : ''}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance > 0 && <p className="green">{friend.name} owes you ₱{Math.abs(friend.balance)} </p>}
            {friend.balance < 0 && <p className="red">you owes {friend.name} ₱{Math.abs(friend.balance)}  </p>}
            {friend.balance === 0 && <p>balance is even </p>}

            <Button onClick={()=>onSelectFriend(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
        </li>
    );
}

export default Friend;



