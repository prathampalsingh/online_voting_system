import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  aboutText: string = "Welcome to our Online Voting System. We are dedicated to providing a secure and efficient platform for democratic processes.";

  teamMembers: any[] = [
    { name: 'John Doe', role: 'Founder & CEO' },
    { name: 'Jane Smith', role: 'Lead Developer' },
    // Add more team members as needed
  ];
}
