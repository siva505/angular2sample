import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InvestComponent } from './invest/invest.component';
import { MediaComponent } from './media/media.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import {  HttpModule} from "@angular/http";
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'invest', component: InvestComponent },
  { path: 'media', component: MediaComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: MainComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    AboutComponent,
    InvestComponent,
    MediaComponent,
    CareerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
