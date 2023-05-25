export interface RequestParams {
    url: string;
    method: 'POST' | 'GET';
    isShowLoading?: boolean;
    isThrowError?: boolean;
    params?: AnyObject;
    contentType?: 'application/json' | 'application/x-www-form-urlencoded'
}

export interface RequestResponse {
    code?: number;
    errcode?: number;
    errstr: string;
    msg?: string;
    message?: string;
    data?: any;
}

export interface AnyObj {
    [propname:string]: any
}