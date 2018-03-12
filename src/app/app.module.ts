import { SubmitProposalModalPage } from './../pages/Freelance/submit-proposal-modal/submit-proposal-modal';
import { FieldErrorDisplayPage } from './../pages/Freelance/field-error-display/field-error-display';
import { FreelanceJobDetailsPage } from './../pages/Freelance/freelance-job-details/freelance-job-details';
import { HomeFreelancePage } from './../pages/Freelance/home-freelance/home-freelance';
import { RegisterPage } from '../pages/User/register/register';
import { LoginPage } from '../pages/User/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';
import { FreelanceProvider } from '../providers/freelance/freelance';
import { HttpModule } from '@angular/http';
import { FileChooser } from '@ionic-native/file-chooser';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    LoginPage,
    RegisterPage,
    HomeFreelancePage,
    FreelanceJobDetailsPage,
    FieldErrorDisplayPage,
    SubmitProposalModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    LoginPage,
    RegisterPage,
    HomeFreelancePage,
    FreelanceJobDetailsPage,
    FieldErrorDisplayPage,
    SubmitProposalModalPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    FreelanceProvider,FileChooser
  ]
})
export class AppModule {}
