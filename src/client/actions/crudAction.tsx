import history from '../utils/history';

/**
 * Import all commonAction as an object.
 */
import * as commonAction from './commonAction';

/**
 * Import all httpService as an object.
 */
import * as httpService from '../services/httpService';


/**
 * CRUD actions for the application.
 * Every time an action that requires the API is called, it first dispatch an "apiRequest" action.
 *
 * entity = 'Users'
 */


export const fetchAll = (entity:any, data : any) => {
    return (dispatch :any) => {
        return httpService.fetchEntity(entity).then((response) => {
            dispatch(commonAction.fetch(entity, response.data));
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
};

export const fetchById = (entity:any, id:any) => {
    return (dispatch :any) => {
        return httpService.fetchEntityById(entity, id).then((response) => {
            dispatch(commonAction.selectItem(entity, response.data));
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
};

export const storeItem = (entity:any, data:any) => {
    return (dispatch :any)=> {
        return httpService.storeEntity(entity, data).then((response) => {
            history.back();
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
};

export const updateItem = (entity:any, data:any, id:any) => {
    return (dispatch :any) => {
        return httpService.updateEntity(entity, data, id).then((response) => {
            history.back();
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
};

export const destroyItem = (entity:any, id:any, data:any) => {
    return (dispatch :any) => {
        return httpService.destroyEntity(entity, id).then((response) => {
            dispatch(fetchAll(entity, data) );
        })
            .catch((error) => {
                dispatch(commonAction.failure(error));
            });
    };
};

export const submitForm = (entity:any, data:any, id:any) => {
    return (dispatch :any) => {
        if (id) {
            dispatch(updateItem(entity, data, id));
        } else {
            dispatch(storeItem(entity, data));
        }
    };
};