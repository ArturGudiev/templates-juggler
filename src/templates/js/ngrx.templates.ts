import { Template } from "../../types/template.interface.js";

export default [
  {
    title: 'declare state',
    content: `
    export interface AppState {
      counter: number;
    }

    // actions
    import { createActionGroup, emptyProps, props } from '@ngrx/store';

    export const CounterActions = createActionGroup({
      source: 'Counter',
      events: {
        Increment: emptyProps(),
        Load: emptyProps(),
        'Load Success': props<{ value: number }>(),
      },
    });

    // effects
    import { inject, Injectable } from '@angular/core';
    import { Actions, createEffect, ofType } from '@ngrx/effects';
    import { of } from 'rxjs';
    import { map, switchMap } from 'rxjs/operators';
    import { CounterActions } from './counter.actions';

    @Injectable()
    export class CounterEffects {
      private readonly actions$ = inject(Actions);

      loadCounter$ = createEffect(() =>
        this.actions$.pipe(
          ofType(CounterActions.load),
          switchMap(() =>
            of(5).pipe(map((value) => CounterActions.loadSuccess({ value }))),
          ),
        ),
      );
    }

    // reducers
    export const counterReducer = createReducer(
      0,
      on(CounterActions.increment, (state) => state + 1),
      on(CounterActions.loadSuccess, (_, { value }) => value),
    );

    // selectors 
    import { createFeatureSelector } from '@ngrx/store';

    export const selectCounter = createFeatureSelector<number>('counter');

    // index 
    export const reducers: ActionReducerMap<AppState> = {
      counter: counterReducer,
    };

    // config
    import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
    import { provideRouter } from '@angular/router';
    import { provideEffects } from '@ngrx/effects';
    import { provideStore } from '@ngrx/store';

    import { routes } from './app.routes';
    import { CounterEffects, reducers } from './state';

    export const appConfig: ApplicationConfig = {
      providers: [
        provideBrowserGlobalErrorListeners(),
        provideRouter(routes),
        provideStore(reducers),
        provideEffects([CounterEffects]),
      ],
    };



    `
  }
] as Template[];