import { createReducer, on } from "@ngrx/store";
import { LoadAnnotationsSuccess } from "./annotations.actions";
import { Annotation } from "../annotation.model";

export interface AnnotationsState {
    annotations: Annotation[];
}

export const initialState: AnnotationsState = {
    annotations: []
}

export const annotationsReducer = createReducer(
  initialState,
  on(LoadAnnotationsSuccess, (state, action) => ({annotations: action.annotations})),
)