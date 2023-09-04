import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { DrawImageAndAnnotationsButtonClicked } from 'src/app/store/annotations.actions';

@Component({
  selector: 'app-draw-button',
  templateUrl: './draw-button.component.html',
  styleUrls: ['./draw-button.component.scss']
})
export class DrawButtonComponent {

  constructor(private store: Store) { }

  onClick(): void {
    this.store.dispatch(DrawImageAndAnnotationsButtonClicked());
  }
}
