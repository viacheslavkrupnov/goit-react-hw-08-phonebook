import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';
import s from '../app.module.css';

import photo1 from './images/photo1.jpg';
import photo2 from './images/photo2.jpg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 200px)',
    maxWidth: 'calc(100vh - 200px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '700px',
    position: 'relative',
  },
};

const HomeView = () => {
  const loggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {!loggedIn && (
        <>
          <h1 className={s.title_home}>Welcome to Phonebook.app!</h1>
          <div className={styles.container}>
            <img src={photo1} alt={'telephone'} />
          </div>
        </>
      )}

      {loggedIn && (
        <div className={styles.container}>
          <img src={photo2} alt={'telephone'} />
        </div>
      )}
    </>
  );
};

export default HomeView;
