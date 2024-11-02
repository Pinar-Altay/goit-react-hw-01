
// src/components/Profile.jsx

import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
      
    <div className={styles.profileCard}>
           
    
      <div className={styles.profileInfo}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
          
      <ul className={styles.statsList}>
        
        <li className={styles.statsItem}>
          <span className={styles.label}>Followers</span> <br></br>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span> <br></br>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span> <br></br>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
              
      </ul>
          
    </div>
  );
};

export default Profile;
