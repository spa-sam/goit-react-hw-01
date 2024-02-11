import css from './FriendListItem.module.css';
// import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      {/* <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p> */}
      <p className={isOnline ? css.online : css.offline}> {isOnline ? 'Online' : 'Offline'}</p>
    </li>
  );
};
