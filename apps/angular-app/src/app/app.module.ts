import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SandboxCommonModule } from '../../../../libs/shared/core/src/lib/sandbox-common.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SandboxCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
