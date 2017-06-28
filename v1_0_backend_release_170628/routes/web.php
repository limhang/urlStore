<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
    return $app->version();
});

//用户有关路由
$app->group(['namespace' => 'v1_0\Person', 'prefix' => 'v1_0/person'], function($app){

    //用户注册
    $app->get('user/register',['as'=>'user.register','uses'=>'UserController@register']);

    $app->get('user/login',['as'=>'user.login','uses'=>'UserController@login']);

});

//url模块有关路由
$app->group(['namespace' => 'v1_0\Url', 'prefix' => 'v1_0/url'], function($app){
	//添加url
	$app->get('user/urlcreate',['as'=>'user.urlcreate','uses'=>'UrlManagerController@urlcreate']);
	//更新url内容
    $app->get('user/urlupdate',['as'=>'user.urlupdate','uses'=>'UrlManagerController@urlupdate']);
    //删除url数据
    $app->get('user/urldelete',['as'=>'user.urldelete','uses'=>'UrlManagerController@urldelete']);
    //查询url描述的关键字
	$app->get('user/urlquerykd',['as'=>'user.urlquerykd','uses'=>'UrlManagerController@urlquerykd']);
    //分页查询url内容
    $app->get('user/urlquery',['as'=>'user.urlquery','uses'=>'UrlManagerController@urlquery']);
    //查询category内容
    $app->get('user/urlquerycategory',['as'=>'user.urlquerycategory','uses'=>'UrlManagerController@urlquerycategory']);
    //查询tag内容
    $app->get('user/urlquerytag',['as'=>'user.urlquerytag','uses'=>'UrlManagerController@urlquerytag']);
});
