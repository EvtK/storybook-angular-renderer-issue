import { Directive, Input } from '@angular/core';

@Directive()
export abstract class BasePageComponent {
  @Input() inputFromBasePage = {value: 'myDefaultValue'}

}