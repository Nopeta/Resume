import axios from 'axios'

// axios.defaults.xsrfCookieName: 'XSRF-TOKEN', // 名稱請與儲存在 cookies 相同，axios 預設是 'XSRF-TOKEN'
//     axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN'; // 這一個主要是請求時，會帶在 header 的名稱，建議與後端溝通，有些後端接收是接收 XSRF-TOKEN，axios 預設是 'X-XSRF-TOKEN'


//取得
export const getCSRFToken = async () => {
    return await axios( {
        headers: { 'Accept': 'application/json' },
        method: 'get',
        url: process.env.REACT_APP_API + '/api/v1/getCSRFToken',
        withCredentials: true
    } )
}

//登入
export const loginAPI = async ( email, password ) => {
    return await axios( {
        headers: { 'Accept': 'application/json' },
        method: 'post',
        url: process.env.REACT_APP_API + '/api/v1/login',
        withCredentials: true,
        data: {
            'email': email,
            'password': password,
        }
    } )
}

// 新增留言
export const postMessage = async ( token, userId, message ) => {
    return await axios( {
        // headers: { authorization: token },
        method: 'post',
        url: process.env.REACT_APP_API + '/api/comment',
        data: { userId, message }
    } )
}

// 取得留言清單
export const getCommentList = async ( token ) => {
    return await axios( {
        // headers: { authorization: token },
        method: 'get',
        url: `${process.env.REACT_APP_API}/api/comments/`
    } )
}

// 取得留言者本人的留言清單
export const getUserCommentList = async ( token, userId ) => {
    return await axios( {
        // headers: { authorization: token },
        method: 'get',
        url: `${process.env.REACT_APP_API}/api/author/${userId}/comments`

    } )
}

// 修改留言
export const updateComment = async ( token, id ) => {
    return await axios( {
        // headers: { authorization: token },
        method: 'get',
        url: `${process.env.REACT_APP_API}/api/comments/${id}`
    } )
}

// 刪除留言
export const deleteComment = async ( token, id ) => {
    return await axios( {
        // headers: { authorization: token },
        method: 'delete',
        url: `${process.env.REACT_APP_API}/api/comments/${id}`
    } )
}
