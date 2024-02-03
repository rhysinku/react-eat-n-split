import Friend from "./Friend.";

const FriendList = ({initialFriends ,onSelectFriend ,selectedfriend }) => {


    return (
        <ul>
        {initialFriends.map((friend) => (
       <Friend friend={friend} key={friend.id} onSelectFriend={onSelectFriend}  selectedfriend={selectedfriend} />
        ))}
      </ul>
    );
}

export default FriendList;


