import { apiInstance } from './index';

export const getBoardApi = id => apiInstance.get(`/board/get.php?id=${id}`);

export const getBoardListApi = page => apiInstance.get(`/board/getList.php?page=${page}`);

export const getBoardCount = () => apiInstance.get('/board/getCount.php');

export const deleteBoardApi = id => apiInstance.delete('/board/delete.php', { data: { boardId: id } });
