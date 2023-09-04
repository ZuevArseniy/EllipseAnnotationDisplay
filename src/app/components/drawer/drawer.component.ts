import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import {Store} from '@ngrx/store';
import { Subject, combineLatestWith } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { loadImageError, loadImageSuccess } from '../../store/image.actions';
import { Annotation } from 'src/app/annotation.model';
import { selectAnnotations } from 'src/app/store/annotations.selectors';
import { LoadAnnotationsError } from 'src/app/store/annotations.actions';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit, AfterViewInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  errorMessage: any = undefined;

  context!: CanvasRenderingContext2D;
  @ViewChild('drawer') canvas!: ElementRef;

  constructor(private actions$: Actions, private store$: Store) { }

  ngOnInit(): void {
    this.actions$
      .pipe(
        ofType(loadImageSuccess),
        combineLatestWith(this.store$.select(selectAnnotations)),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(([loadImageSuccessAction, annotations]) => {
        this.errorMessage = undefined;
        const imageBlob = loadImageSuccessAction.imageBlob;
        this.drawImageWithAnnotationOnCanvas(imageBlob, annotations);
      });
    this.actions$.pipe(
      ofType(
        loadImageError,
        LoadAnnotationsError
      ),
      takeUntil(this.ngUnsubscribe)
    ).subscribe((errorAction) => {
      this.clearCanvas();
      const error: Error = errorAction.error;
      this.errorMessage = error.message;
    })  
  }

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
  }

  clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  drawImageWithAnnotationOnCanvas(imageBlob: Blob, annotations: Annotation[]): void {
    const image = new Image();
    image.src = URL.createObjectURL(imageBlob);

    image.onload = () => {
      this.clearCanvas()
      this.context.drawImage(image, 0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      this.context.lineWidth = 1;
      this.context.strokeStyle = "white";
      annotations.forEach(({x, y, radiusX, radiusY}) => { 
        this.context.beginPath();
        this.context.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
      })
    };
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
