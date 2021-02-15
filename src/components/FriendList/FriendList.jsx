import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <li className={styles.item} key={id}>
          <span className={isOnline ? `${styles.online}` : `${styles.offline}`}></span>
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendList;