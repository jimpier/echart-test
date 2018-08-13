import http from './http';

// 通用组件或多个页面都在调用的通用接口，如地区选择、上传头像

// 获取头像上传token、key
export function getImgToken() {
	return http.post('centerstage/uploadImg/getUploadImg');
}

