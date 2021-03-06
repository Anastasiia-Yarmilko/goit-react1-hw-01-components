import React from "react";
import PropTypes from "prop-types";
import css from "./index.module.css";
import defaultImage from "./defaultImage.png";

export const Profile = ({ name, tag, location, avatar, followers, views, likes }) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={css.avatar}
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@ {tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.stats_item}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{followers}</span>
                </li>
                <li className={css.stats_item}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li className={css.stats_item}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.defaultProps = {
    name: "Incognito",
    tag: "Incognito",
    location: "Entire world",
    avatar: defaultImage,
    followers: 0,
    views: 0,
    likes: 0
};

Profile.propTypes = {
    tag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
};