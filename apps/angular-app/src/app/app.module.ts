import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { PipesModule } from '../../../../libs/shared/core/src/lib/pipes/pipe.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
