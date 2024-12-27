import PropTypes from "prop-types";
import s from '../FriendList/FriendList.module.css'
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {

    return (
        <section className="friends">
            <ul className={s.friendList}>
                {friends.map(({ id, isOnline, avatar, name }) => (
                    <FriendListItem
                        key={id}
                        isOnline={isOnline}
                        avatar={avatar}
                        name={name}
                    />
                ))}
            </ul>
        </section>
    );
}

FriendList.prototypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool,
            avatar: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
}
