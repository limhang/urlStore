import React from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router';
import { Table, Pagination, Popconfirm } from 'antd';
import styles from './PostList.css';
import EditUrl from './editurl';
import AddUrl from './addurl';
import { Button } from 'antd';

function PostList({dispatch, list: dataSource, loading, total, page: current,item,kdtag,kddetail,kdcategory })  {

  function deleteHandler(key) {
    console.log('用户点击视图');
    dispatch({
      type: 'postlist/remove',
      payload: {key},
    });
  }

function pageChangeHandler(page) {
    console.log(item);
    dispatch({
      type: 'postlist/fetch',
      payload: { page,kddetail,kdtag,kdcategory,item },
    });
  }

  function addHandler(values) {
      console.log(values);
      dispatch({
          type:'postlist/addUrl',
          payload:values,
      })
  }

function editHandler(key,values) {
    console.log('2');
    console.log(values);
    console.log(key);
    dispatch({
      type: 'postlist/editUrl',
      payload: { values ,key, current},
    });
  }

  const columns = [
    {
      title: 'Url',
      dataIndex: 'url',
      key: 'url',
      render: (text,record) => <a href={record.url}>{text}</a>,
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
          <EditUrl record={record} onOk={editHandler.bind(null,record.key)}>
             <a>Edit</a>
           </EditUrl>
           <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.key)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
    <AddUrl onOk={addHandler}>
        <Button className={styles.addbtn} type="primary">AddUrl</Button>
    </AddUrl>
      <div className={styles.main}>
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
         //rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={parseInt(current)}
          pageSize={6}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page,item,kdcategory,kddetail,kdtag } = state.postlist;
  console.log(state.postlist);
  return {
    loading: state.loading.models.postlist,
    list,
    total,
    page,
      item,
      kdcategory,
      kddetail,
      kdtag,
  };
}

export default connect(mapStateToProps)(PostList);


