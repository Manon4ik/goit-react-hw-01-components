import PropTypes from "prop-types";
import s from '../FriendList/FriendListItem.module.css'

export default function FriendListItem({ isOnline, avatar, name }) {

    return (
        <li className={s.item}>
            <span className={isOnline ? s.green : s.red}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
}

FriendListItem.prototypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}