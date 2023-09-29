import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ContactModule } from './contact/contact.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ContactModule,
    ScullyLibModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
