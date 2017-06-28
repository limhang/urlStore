import React from 'react';
import { connect } from 'dva';
import PostListComponent from '../components/PostList/PostList';
import MainLayout from '../components/MainLayout/MainLayout';

function PostList(location) {
  return (
    <MainLayout location={location}>
       <div>
	     <PostListComponent />
       </div>
     </MainLayout>
  );
}


export default connect()(PostList);