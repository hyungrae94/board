import { apiInstance } from './index';

export const snsLoginApi = id => apiInstance.get(`/snsUser/get.php?id=${id}`);

export const signInApi = loginInfo => apiInstance.post('/user/get.php', loginInfo);

export const signUpApi = userInfo => apiInstance.post('/user/add.php', userInfo);
