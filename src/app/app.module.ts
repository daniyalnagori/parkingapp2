import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2"
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AppService } from './app.service';
import { NavComponent } from './nav/nav.component';
import { SigninComponent } from './signin/signin.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import {AuthGuardService} from "./authGuard";
import { FeedbackComponent } from './feedback/feedback.component'
let firebaseConfig = {
  apiKey: "AIzaSyB9rshnUA1GKQbq5c-sauCcgX4vELAZP-Y",
  authDomain: "parkingapp2-c8b26.firebaseapp.com",
  databaseURL: "https://parkingapp2-c8b26.firebaseio.com",
  storageBucket: "parkingapp2-c8b26.appspot.com",
  messagingSenderId: "28311343107"
};
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
   { path: 'feedback', component: FeedbackComponent, pathMatch: 'full' },

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    NavComponent,
    SigninComponent,
    DashboardComponent,
    DashboardNavComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
  ],
  providers: [AppService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
