# EllipseAnnotationDisplay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Implementation comments (not cli generated)

1) In this particular case having button as a separate component might be an overkill, but I assumed because you wanted `DrawImageAndAnnotationsButtonClicked` action, it was also expected that it has to be used.

2) I haven't worked with Angular2+, so some things might be off standard conventions, though I tried to follow them

3) I thought about parametrizing (and randomising, to make it funnier) urls, but wasn't sure if given urls were just and example, or I had to strictly use only them, task description is unclear about it. 

4) using i18n and writing tests are nice to have, however in my case it would go beyond 1 hour

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
