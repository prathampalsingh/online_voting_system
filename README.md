# Online Voting System 🌐🗳️

**An Online Voting System designed to revolutionize the way citizens participate in elections.** This project eliminates the hassles of paper-based voting by providing a secure, automated, and streamlined voting platform. The system is built using cutting-edge technologies like HTML, CSS, TypeScript, Angular, Java (Spring Boot), and MySQL.

**🏠 Home Page**

The landing page introduces the importance of voting with a focus on the system's features and security.

**🎛️ Admin Dashboard**

The admin has access to a dashboard displaying the total number of users, parties, and voters. Additionally, the admin can manage voters and parties.

**Features:**

* View and manage voter details.
* Add new political parties with their logos and constituencies.
* Monitor voting activity in real-time.

**📋 List of Voters**

The admin can view the list of registered voters, along with their personal details, account status, and actions like Update or Delete voter accounts.

**✨ Key Features**

* **Secure Authentication:** Ensures only verified users can cast votes.
* **User-Friendly Interface:** Built for accessibility and ease of use.
* **Robust Admin Management:** Simplifies party and voter management.
* **Real-time Voting Status:** Displays voting status for registered users.
* **Responsive Design:** Optimized for desktop and mobile browsers.

**🔧 Tech Stack**

* **Frontend:** HTML, CSS, TypeScript, Angular
* **Backend:** Java, Spring Boot
* **Database:** MySQL
* **Tools:** Eclipse IDE, VS Code, Node.js

**🚀 How to Run the Project**

**Prerequisites:**

* **Install Node.js and npm:** Download and install the latest version from the official Node.js website (https://nodejs.org/). This also includes npm, the Node Package Manager.
* **Install MySQL:** Download and install MySQL Community Server from the official MySQL website (https://dev.mysql.com/downloads/). 
* **Install Eclipse IDE:** Download and install the Eclipse IDE for Java Developers from the Eclipse website (https://www.eclipse.org/).

**Steps:**

**1. Backend (Spring Boot):**

   * **Set up the database:**
      1. Open the MySQL command-line client.
      2. Create a new database: 
         ```sql
         CREATE DATABASE db521;
         ```

   * **Import the Spring Boot Project into Eclipse:**
      1. In Eclipse, go to **File > Import > Existing Maven Projects**.
      2. Browse to the directory where your Spring Boot project is located and select the `pom.xml` file.
      3. Click **Finish**.

   * **Run the Spring Boot Application:**
      1. Right-click on the `Application` class in the `com.spring` package.
      2. Select **Run As > Spring Boot App**.

**2. Frontend (Angular):**

   * **Open the Angular project in VS Code:** Open the terminal within VS Code and navigate to the root directory of your Angular project.

   * **Install dependencies:**
      ```bash
      npm install
      ```

   * **Start the development server:**
      ```bash
      ng serve
      ```

   * **Access the application:** Open your web browser and navigate to `http://localhost:4200/` (or the port specified in the terminal output).

**🖼️ Screenshots**

* [Home Page Screenshot]
* [Admin Dashboard Screenshot]
* [Voter List Screenshot]

**📚 Learnings**

This project demonstrates:

* Building a full-stack application with Angular and Spring Boot.
* Securely managing user data and authentication.
* Database design and integration with MySQL.
* Implementing key software engineering principles.

**Note:**

* Replace the placeholders `[Home Page Screenshot]`, `[Admin Dashboard Screenshot]`, and `[Voter List Screenshot]` with actual links to the screenshots. 
* Consider adding a section for contributions and acknowledgments if applicable.
* Tailor the README to your specific project needs and audience.

This enhanced README provides a comprehensive and detailed guide for anyone who wants to understand, run, and potentially contribute to your Online Voting System project.

Home Page
![home](https://github.com/user-attachments/assets/aed1fa6d-fecb-44f0-9cff-674a989a730a)

Admin home/ dashboard
![dashboard](https://github.com/user-attachments/assets/bc5b6999-328b-4d88-853c-8bada26c9ea6)

List of  Voter
![listvoters](https://github.com/user-attachments/assets/45937d23-6d7c-48ca-82ea-8392fa6ed227)

Add new party(admin)
![addparty](https://github.com/user-attachments/assets/4b16e953-5f71-4f53-a18d-9643f0f475a3)

Registration of new User
![register](https://github.com/user-attachments/assets/33e6b876-049d-4357-8691-339df5fb44c6)

If user not voted
![notvoted](https://github.com/user-attachments/assets/42ee4c4c-bfaf-49c0-a73d-79b194924d35)

If user voted
![voted](https://github.com/user-attachments/assets/3eca57df-d00c-4708-aa3d-8ca06b0fd6d2)

Steps to run:-
1.install nodejs (https://nodejs.org/en/download/prebuilt-installer)

2.on vscode run open new terminal and type

npm install -g @angular/cli

npm install

3.on eclipse ide

4.help > eclipse marketplace

5.install spring tool v4

6.install devtools

7.on mysql terminal crearte a database 

**create database db521;**

8.com.spring > application 

9.run as spring

10.on vscode

npm start

on your browser

copy and paste the localhost provided on the terminal
