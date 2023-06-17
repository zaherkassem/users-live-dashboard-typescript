// Import custom utils
import {fetch, store, update, destroy} from '../utils/httpUtil';
import {getPathParam} from '../utils/serializeUtil';

export const fetchEntity = (entityName:string) => {
    return fetch(entityName.toLowerCase());
};

export const fetchEntityById = (entityName:string, dataId:string | number) => {
    return fetch(getPathParam(entityName.toLowerCase(), dataId));
};

export const storeEntity = (entityName:string, data:any) => {
    return store(entityName.toLowerCase(), data);
};

export const updateEntity = (entityName:string, data:any, dataId:string | number) => {
    return update(getPathParam(entityName.toLowerCase(), dataId), data);
};

export const destroyEntity = (entityName:string, dataId:string | number) => {
    return destroy(getPathParam(entityName.toLowerCase(), dataId));
};