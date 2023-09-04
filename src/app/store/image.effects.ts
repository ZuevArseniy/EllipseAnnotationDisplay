import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, map, switchMap } from 'rxjs';
import { ImageService } from '../services/image.service';
import { loadImageSuccess, loadImageError } from './image.actions';
import { DrawImageAndAnnotationsButtonClicked } from './annotations.actions';

@Injectable({
    providedIn: 'root'
})
export class ImageEffects {
  constructor(private actions$: Actions, private imageService: ImageService) {}

  loadImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DrawImageAndAnnotationsButtonClicked),
      switchMap(() =>
        this.imageService.loadImage().pipe(
          map((imageBlob) => loadImageSuccess({ imageBlob })),
          catchError((error) => of(loadImageError({ error })))
        )
      )
    )
  );
}