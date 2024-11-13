import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  private loginUrl = 'http://localhost:8080';
  private loggedInUser: any = null;
 public electionDate = new Date();
  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  navigateToLink(link: string): void {
    if (link === 'logout') {
      this.userLogout();
      return ;
    }
    this.router.navigate(['/'+ link]);
  }

  signInByCard(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/user/loginByCardNumber`, body).pipe(
      tap((response: any) => {
        this.storeLoggedInUser(response.user);
      })
    );
  }

  signInByEmail(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/user/loginByEmail`, body).pipe(
      tap((response: any) => {
        this.storeLoggedInUser(response.user);
      })
    );
  }

  signUp(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/user/registeruser`, body, { responseType: 'text' });
  }

  storeLoggedInUser(user: any) {
    this.loggedInUser = user;
  }

  userLogout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  getUserById(id: any): Observable<any>{
    return this.httpClient.get(`${this.loginUrl}/user/getUserById/${id}`);
  }

  getAllVoterList(): Observable<any>{
    return this.httpClient.get(`${this.loginUrl}/user/alluser`);
  }
//Active Account
  activateUser(userId: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/user/activateUser2/${userId}`, {}, { responseType: 'text' });
  }

  deleteUser(userId: any): Observable<any>{
    return this.httpClient.delete(`${this.loginUrl}/user/deleteuser/${userId}`, { responseType: 'text' });
  }
  updateUser(user: any):Observable<any> {
    return this.httpClient.put(`${this.loginUrl}/user/updateUser`, user);
  }
  getAllParty(): Observable<any>{
    return this.httpClient.get(`${this.loginUrl}/party/partylist`);
  }

  addParty(body: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/party/addparty`, body, { responseType: 'text' });
  }
  getvotingEndDate(): void{
     this.httpClient.get(`${this.loginUrl}/election/electionenddate`,{ responseType: 'text' }).subscribe((res:any)=>{
      console.log("&&777&&&&",res);
      this.electionDate = new Date(res);
     })
  }
  addVote(partyId: any, userId: any): Observable<any>{
    return this.httpClient.post(`${this.loginUrl}/user/addvote/${partyId}/${userId}`, {});
  }

  deletePartyById(partyId:any):Observable<any>{
    return this.httpClient.delete(`${this.loginUrl}/party/deleteparty/${partyId}`,{ responseType: 'text' });
  }
  updateParty(party: any):Observable<any> {
    return this.httpClient.put(`${this.loginUrl}/party/edit/${party?.partyId}`, party);
  }  

  getUserDetailById(userId: any): Observable<any>{
    return this.httpClient.get(`${this.loginUrl}/user/findByUserId/${userId}`);
  }
 

  getPartyById(pId: any): Observable<any>{
    return this.httpClient.get(`${this.loginUrl}/party/findByPartyId/${pId}`);
  }
  
  getUserByEmail(email: string): Observable<any> {
    return this.httpClient.get(`${this.loginUrl}/user/findByUserEmail/${email}`);
  }

  changePassword(uid: any, password: string): Observable<any> {
    return this.httpClient.post(`${this.loginUrl}/user/changePassword/${uid}/${password}`, {});
  }
}
