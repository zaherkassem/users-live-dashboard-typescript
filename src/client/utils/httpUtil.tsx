import {httpBase} from './httpBaseUtil';

export const fetch = (endpoint:any) => {
    return httpBase()
        .get(endpoint);
};

export const store = (endpoint:any, data:any) => {
    return httpBase()
        .post(endpoint, data);
};

export const update = (endpoint:any, data:any) => {
    return httpBase()
        .put(endpoint, data);
};

export const destroy = (endpoint:any) => {
    return httpBase()
        .delete(endpoint);
};