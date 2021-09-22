import React from "react";
import PropTypes from "prop-types";
import css from './friends.module.css';

export const FriendList = ({friends}) => (
    <ul className={css.friend_list}>
        {friends.map(({avatar, name, isOnline, id}) => (
            <li className={css.item} key={id}>
                {isOnline === true
                    ? <span className={css.online}></span>
                    : <span className={css.offline}></span>}
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
          </li>
        ))}
    </ul>
)

FriendList.defaultProps = {
    name: "incognito",
    isOnline: true
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number
}
