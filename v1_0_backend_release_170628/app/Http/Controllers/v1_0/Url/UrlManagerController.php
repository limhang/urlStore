<?php


namespace App\Http\Controllers\v1_0\Url;


use App\Http\Controllers\AuthController;
use App\Models\Manager;
use App\Models\Users;
use Illuminate\Http\Request;


class UrlManagerController extends AuthController
{
    protected $manager;
    protected $users;
    public function __construct(Request $request,Manager $manager,Users $users)
    {
        parent::__construct($request);
        $this->manager = $manager;
        $this->users = $users;
    }

    /**
     * 添加模式
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function urlcreate(Request $request)
    {
        $user_info = $this->user_info;
        $userId = $user_info->userId;
        $data = $request->all();
        $data['userId'] = $userId;
		unset($data['token']);
		$key = md5($data['userId'].$data['url']);
		$data['key'] = $key;
        $res = $this->manager->create($data);
        return $this->apiResponse($res);
    }

    /**
     * 更新模式
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function urlupdate(Request $request)
    {
        $user_info = $this->user_info;
        $userId = $user_info->userId;
        $data = $request->all();
        $data['userId'] = $userId;
        unset($data['token']);
        $res = $this->manager->urlupdate($data);
        return $this->apiResponse($res);
    }

    /**
     * 更新模式
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function urldelete(Request $request)
    {
        $user_info = $this->user_info;
        $userId = $user_info->userId;
        $data = $request->all();
        $data['userId'] = $userId;
        unset($data['token']);
        $res = $this->manager->urldelete($data);
        return $this->apiResponse($res);
    }

	public function urlquerykd(Request $request)
	{
		$user_info = $this->user_info;
		$userId = $user_info->userId;
		$keyword = $request->input('keyword','0');
		$res = $this->manager->urlquerykd($userId,$keyword);
		return $this->apiResponse($res);
	}

    public function urlquery(Request $request)
    {
        $user_info = $this->user_info;
        $userId = $user_info->userId;
        $page = $request->input('page','1');
		$pagenum = $request->input('pagenum','5');
		$detail = $request->input('detail','');
		$category = $request->input('category','');
		$item = $request->input('item','0');
		$tag = $request->input('tag','');
        $res = $this->manager->urlquery($userId,$page,$pagenum,$detail,$category,$tag,$item);
        return $this->apiResponse($res);
    }

    /**
     * 按照category模式查询数据
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function urlquerycategory(Request $request)
    {
        $user_info = $this->user_info;
        $userId = $user_info->userId;
        $category = $request->input('category','');
        $res = $this->manager->urlquerycategory($userId,$category);
        return $this->apiResponse($res);
    }


    /**
     * 按照tag模式查询数据
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function urlquerytag(Request $request)
    {
        $user_info = $this->user_info;
        $userId = $user_info->userId;
        $tag = $request->input('tag','');
        $res = $this->manager->urlquerytag($userId,$tag);
        return $this->apiResponse($res);
    }

}
