import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

  transform(value: string|undefined, ...args: unknown[]): string {
    switch (value)
    {
      case "small":
        return "kleine ";

      case "medium":
        return "mittelere ";

      case "large":
        return "große ";

      default:
        return "keine ahnung";
    }
  }

}
