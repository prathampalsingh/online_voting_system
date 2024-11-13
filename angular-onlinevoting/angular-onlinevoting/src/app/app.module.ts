import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminheaderComponent } from './admin/adminheader/adminheader.component';
import { AddpartyComponent } from './admin/addparty/addparty.component';
import { ListpartyComponent } from './admin/listparty/listparty.component';
import { ResultComponent } from './admin/result/result.component';
import { ListvoterComponent } from './admin/listvoter/listvoter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { VoterhomeComponent } from './voter/voterhome/voterhome.component';
import { VoterheaderComponent } from './voter/voterheader/voterheader.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddvoteComponent } from './voter/addvote/addvote.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginGuardService } from './guard/admin-login-guard.service';
import { VoterLoginGuardService } from './guard/voter-login-guard.service';
import { EditVoterComponent } from './voter/edit-voter/edit-voter.component';
import { DatePipe } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    AdminheaderComponent,
    AddpartyComponent,
    ListpartyComponent,
    ResultComponent,
    ListvoterComponent,
    LoginComponent,
    RegisterComponent,
    AppheaderComponent,
    ApphomeComponent,
    VoterhomeComponent,
    VoterheaderComponent,
    AboutusComponent,
    ContactusComponent,
    AddvoteComponent,
    EditVoterComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    AdminLoginGuardService,
    VoterLoginGuardService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
