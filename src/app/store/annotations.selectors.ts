import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AnnotationsState } from './annotations.reducers';

const selectFeatureState = createFeatureSelector<AnnotationsState>('annotations')
export const selectAnnotations = createSelector(
  selectFeatureState,
  state => state.annotations
);
