import React from 'react';
import { connect } from 'dva';
import styles from './Category.css';
import {Link} from 'dva/router';
import { Tag } from 'antd';
import { routerRedux } from 'dva/router';

function Category(
    {
        urlcategory:datasource,
        dispatch,
        loading,

    }
) {
    function getCategoryData(text) {
        console.log(text);
        dispatch({
            type: 'postlist/getIntoCategory',
            payload : {kdcategory:text,item:1},
            callback(){
                dispatch(routerRedux.push({
                    pathname : '/postlist',
                    query: {kdcategory:text,item:1},
                }))
            },
        })
    }
    return (
        <div className={styles.normal}>
            {(datasource) ? datasource.map(v => <Tag key={v.category} onClick={getCategoryData.bind(null,v.category)}>{v.category}</Tag>) : ''}
        </div>
    );
}



export default connect((state) => {
    const {urlcategory} = state.postlist;
    console.log(urlcategory);
    return {
        loading: state.loading.models.postlist,
        urlcategory,
    };
})(Category);
