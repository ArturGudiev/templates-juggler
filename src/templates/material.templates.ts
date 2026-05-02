import { Template } from "../types/template.interface.js";

export default [
    {
        title: 'Select',
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
    },
    
    {
        title: 'Material button Outlined',
        content: `
      <div class="example-button-row">
        <button matButton="outlined">Basic</button>
        <button matButton="outlined" disabled>Disabled</button>
        <a matButton="outlined" href="https://www.google.com/" target="_blank">Link</a>
      </div>
`
    }
] as Template[];
