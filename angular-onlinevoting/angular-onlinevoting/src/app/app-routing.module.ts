import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApphomeComponent } from './apphome/apphome.component';
import { LoginComponent } from './login/login.component';
import { VoterhomeComponent } from './voter/voterhome/voterhome.component';
import { VoterLoginGuardService } from './guard/voter-login-guard.service';
import { AddvoteComponent } from './voter/addvote/addvote.component';
import { RegisterComponent } from './register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddpartyComponent } from './admin/addparty/addparty.component';
import { AdminLoginGuardService } from './guard/admin-login-guard.service';
import { ListpartyComponent } from './admin/listparty/listparty.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ListvoterComponent } from './admin/listvoter/listvoter.component';
import { ResultComponent } from './admin/result/result.component';
import { EditVoterComponent } from './voter/edit-voter/edit-voter.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'',component:ApphomeComponent},
  { path: 'login', component: LoginComponent },
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  { path: 'contact', component: ContactusComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'voterhome', component: VoterhomeComponent, canActivate: [VoterLoginGuardService] },
  { path: 'voteadd', component: AddvoteComponent, canActivate: [VoterLoginGuardService] },
  { path: 'adminaddparty', component: AddpartyComponent, canActivate: [AdminLoginGuardService] },
  { path: 'adminlistparty', component: ListpartyComponent, canActivate: [AdminLoginGuardService] },
  { path: 'adminhome', component: AdminhomeComponent, canActivate: [AdminLoginGuardService] },
  { path: 'adminlistvoter', component:ListvoterComponent, canActivate: [AdminLoginGuardService] },
  {path:'electionresult',component:ResultComponent,canActivate:[AdminLoginGuardService]},
  {path: 'editvoter', component: EditVoterComponent, canActivate: [AdminLoginGuardService]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
