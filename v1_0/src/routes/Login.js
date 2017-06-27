import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import LoginComponent from '../components/Login/Login';

function Users(location) {
  return (
   <div className={styles.normal}>
     <LoginComponent />
   </div>
  );
}


export default connect()(Users);
