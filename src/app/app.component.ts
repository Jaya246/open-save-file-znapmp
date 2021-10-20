import { Component } from '@angular/core';
// import { saveAs } from 'file-saver/FileSaver';
// import { Component } from '@angular/core';
import { ExcelService } from '../services/excel.service';

@Component({
  selector: 'my-app',
  template: `
    <p>Open a text file:</p>
    <input type="file" (change)="open($event)">
    <p *ngIf="contents">Contents:</p>
    <pre>{{contents}}</pre>
    <hr>
    <p>Save a text file:</p>
    <button (click)="save()">Save</button>
  `,
})
export class AppComponent {
  data: any = [
    {
      eid: 'e101',
      ename: 'ravi',
      esal: 1000,
    },
    {
      eid: 'e102',
      ename: 'ram',
      esal: 2000,
    },
    {
      eid: 'e103',
      ename: 'rajesh',
      esal: 3000,
    },
  ];
  contents = '';

  constructor(private excelService: ExcelService) {}

  open(event: Event) {
    if (
      event.target instanceof HTMLInputElement &&
      event.target.files.length > 0
    ) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.contents = reader.result as string;
      };
      reader.readAsText(event.target.files[0]);
    }
  }

  save() {
    // const blob = new Blob(['Hello, World!']);
    // saveAs(blob, 'out.txt');
    this.excelService.exportAsExcelFile(this.data, 'sample');
  }
}
