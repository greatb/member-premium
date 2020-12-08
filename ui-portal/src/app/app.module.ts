import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberNewComponent } from './members/member-new/member-new.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
