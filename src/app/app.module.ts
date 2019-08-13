import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CasingComponent } from './casing/casing.component';
import { TitleCasePipe } from './title-case.pipe';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CoursesComponent } from './courses/courses.component';
// import { ReactiveComponent } from './reactive/reactive.component';
import { SignupComponent } from './signup/signup.component';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    CasingComponent,
    TitleCasePipe,
    ContactFormComponent,
    CoursesComponent,
    // ReactiveComponent,
    SignupComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
