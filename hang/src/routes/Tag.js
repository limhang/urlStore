import React from 'react';
import { connect } from 'dva';
import styles from './Tag.css';
import {Link} from 'dva/router';
import { routerRedux } from 'dva/router';
import MainLayout from '../components/MainLayout/MainLayout';

function Tag(
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
            payload : {kdtag:text,item:2},
            callback(){
                dispatch(routerRedux.push({
                    pathname : '/postlist',
                    query: {kdtag:text,item:2},
                }))
            },
        })
    }
    return (
        <MainLayout location={location}>
            <div className={styles.normal}>
                <div className={styles.main}>
                    {(datasource) ? datasource.map(v => <span key={v.tag} className={styles.tag} onClick={getCategoryData.bind(null,v.tag)}>{v.tag}</span>) : ''}
                </div>
            </div>
        </MainLayout>

    );
}



export default connect((state) => {
    const {urlcategory} = state.postlist;
    console.log(urlcategory);
    return {
        loading: state.loading.models.postlist,
        urlcategory,
    };
})(Tag);
