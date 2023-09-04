import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, of, map, switchMap } from 'rxjs';
import {ActionTypes, LoadAnnotationsSuccess, LoadAnnotationsError} from "./annotations.actions";
import { AnnotationsService } from '../services/annotations.service';

@Injectable({
  providedIn: 'root'
})
export class AnnotationsEffects {
  loadAnnotations$ = createEffect(() => this.actions$.pipe(
    ofType(ActionTypes.DrawImageAndAnnotationsButtonClicked),
    switchMap(() => this.annotationsService.loadAnnotations().pipe(
        map(annotations => LoadAnnotationsSuccess({annotations})),
        catchError(error => of(LoadAnnotationsError({error})))
      )
    )
  ))

  constructor(private actions$: Actions,
              private annotationsService: AnnotationsService) {
  }
}