import React from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router';
import { Table, Pagination, Popconfirm } from 'antd';
import styles from './PostList.css';
import AddUrl from './addurl';

function PostList({dispatch, list: dataSource, loading, total, page: current })  {

  function deleteHandler(id) {
    console.log('用户点击视图');
    dispatch({
      type: 'users/remove',
      payload: id,
    });
  }

function pageChangeHandler(page) {
    console.log('项目初始化');
    dispatch(routerRedux.push({
      pathname: '/users',
      query: { page },
    }));
  }

function editHandler(id, values) {
  console.log('xxxx');
    dispatch({
      type: 'postlist/patch',
      payload: { id, values },
    });
  }

  const columns = [
    {
      title: 'Url',
      dataIndex: 'url',
      key: 'url',
      render: text => <a href="http://www.baidu.com">{text}</a>,
    },
    {
      title: 'Detail',
      dataIndex: 'detail',
      key: 'detail',
    },
    {
      title: 'Tag',
      dataIndex: 'tag',
      key: 'tag',
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
          <AddUrl record={record} onOk={editHandler.bind(null, record.id)}>
             <a>Exit</a>
           </AddUrl>
           <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={3}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page } = state.postlist;
  return {
    loading: state.loading.models.postlist,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(PostList);


