import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[dilocShowView]'
})
export class DemoDirective {

  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
  }

  @Input() set dilocShowView(entries: string[]|undefined) {
    if (entries && entries.length > 0 && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!entries || (entries && entries.length === 0) && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
