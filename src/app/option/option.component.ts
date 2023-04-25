import { Component } from '@angular/core';
import '@vf-dds/vf-dds-vanilla/src/components/selection/option.js';


@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent {
  options = [1, 2, 3];

  selectedOptions: number[] = [2];

  isChecked(value: number): boolean {
    return this.selectedOptions.some(x => x === value);
  }

  onChange(value: number): void {
    const index = this.selectedOptions.findIndex(x => x === value);
    index === -1 ? this.selectedOptions.push(value) : this.selectedOptions.splice(index, 1);
    console.log(this.selectedOptions);
  }
}
