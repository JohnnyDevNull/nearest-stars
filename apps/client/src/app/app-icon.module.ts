import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library, Library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class AppIconModule {

  private library: Library;

  public constructor () {
    this.library = library;
    this.registerIcons();
  }

  protected registerIcons(): void {
    this.library.add(faCog);
  }

}
