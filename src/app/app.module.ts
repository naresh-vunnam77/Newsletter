import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SuccessComponent } from './components/success/success.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsletterComponent } from './components/newsletter/newsletter.component'

const routes: Routes = [{
  path: '', component: NewsletterComponent
}, { path: 'thanks', component: SuccessComponent }]

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
