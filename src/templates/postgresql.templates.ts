import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Remove database connections',
        content: `
    <mat-select [(value)]="status">
        @for (option of options; track option) {
          <mat-option [value]="option">{{ option }}</mat-option>
        }
      </mat-select>


    status = model('Active'); 
    options = ['Active', 'Pending', 'Archived'];
`
    },
    {
        title: 'Select as form field',
        content: `
    <mat-form-field style="width: 10rem">
      <mat-label>Logs group type</mat-label>
      <mat-select [(value)]="groupType">
        <mat-option [value]="'container'">Container</mat-option>
        <mat-option [value]="'global'">Global</mat-option>
        <mat-option [value]="'all'">All</mat-option>
      </mat-select>
    </mat-form-field>

      groupType = model<'container' | 'global' | 'all'>('container')
`
    }
] as Template[];
