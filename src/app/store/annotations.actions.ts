import { createAction, props } from "@ngrx/store";
import {Annotation} from "../annotation.model";

export enum ActionTypes {
    DrawImageAndAnnotationsButtonClicked = '[Annotations] DrawImageAndAnnotationsButtonClicked',
    LoadAnnotationsSuccess = '[Annotations] LoadAnnotationsSuccess',
    LoadAnnotationsError = '[Annotations] LoadAnnotationsError',
}

export const DrawImageAndAnnotationsButtonClicked = createAction(ActionTypes.DrawImageAndAnnotationsButtonClicked);
export const LoadAnnotationsSuccess = createAction(ActionTypes.LoadAnnotationsSuccess, props<{ annotations: Annotation[] }>());
export const LoadAnnotationsError = createAction(ActionTypes.LoadAnnotationsError, props<{ error: any  }>());
