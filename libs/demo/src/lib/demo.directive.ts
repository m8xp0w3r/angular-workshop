import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

export class DemoContext {
  constructor(private tableSize: string) { }
}

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

    let ctx;

    if (entries && entries.length > 10)
    {
      ctx = new DemoContext("large");
    }
    else if (entries && entries.length > 2)
    {
      ctx = new DemoContext("medium");
    }
    else
    {
      ctx = new DemoContext("small");
    }

    this.viewContainer.clear();
    this.hasView = false;

    if (entries && entries.length > 0 && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef,ctx);
      this.hasView = true;
    } else if (!entries || (entries && entries.length === 0) && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
