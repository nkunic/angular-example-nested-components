import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ChildModule } from './child/child.module';
import { ParentModule } from './parent/parent.module';

@NgModule({
  imports: [BrowserModule, ParentModule, ChildModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
