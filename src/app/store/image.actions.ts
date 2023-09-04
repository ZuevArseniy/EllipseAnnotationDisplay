import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    LoadImageSuccess = '[Image] Load Image Success',
    LoadImageError = '[Image] Load Image Error',
}

export const loadImageSuccess = createAction(ActionTypes.LoadImageSuccess, props<{ imageBlob: Blob }>());
export const loadImageError = createAction(ActionTypes.LoadImageError, props<{ error: any }>());