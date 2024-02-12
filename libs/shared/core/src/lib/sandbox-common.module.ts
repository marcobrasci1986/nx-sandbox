import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipe.module';

@NgModule({
  imports: [
    PipesModule
  ],
  declarations: [],
  exports: [
    PipesModule
  ]
})
export class SandboxCommonModule {
}
