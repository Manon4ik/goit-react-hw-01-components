import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css'
export default function Profile({ avatar, username, tag, location, stats }) {
    return (
        <div className={s.profile}>
            <div class="description">
                <div className={s.imageHolder}>
                    <img
                        src={avatar}
                        alt="User avatar"
                        className={s.avatar}
                    />
                </div>
                <p className={s.name}>{username}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li className={s.item}>
                    <span className={s.label}>Followers</span>
                    <span class="quantity"><b>{stats.followers}</b></span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>Views</span>
                    <span class="quantity"><b>{stats.views}</b></span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>Likes</span>
                    <span class="quantity"><b>{stats.likes}</b></span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
}
