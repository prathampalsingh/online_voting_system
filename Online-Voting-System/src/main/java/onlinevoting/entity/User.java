package onlinevoting.entity;

import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Entity

public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;

	@NotNull(message = "Name Can Not Be Empty")
	@Size(min = 3, message = "person name should create atleast 3character")
	private String userName;

	@Column(name = "VotingCardNumber", unique = true, length = 30)
	@NotNull(message = "Voting Number Can Not Be Empty")
	@Size(min = 10, max = 10, message = "Voter Number should be exact 10 letters and it should be combination of letters and numbers")
	private String userVotingCardNumber;

	@NotNull(message = "Address Can Not Be Empty")
	private String userAddress;

	@Column(name = "MobileNumber", unique = true)
	@NotNull(message = " Mobile Number Can Not Be Empty")
	@Pattern(regexp = "^[6-9][0-9]{9}$")
	@Size(min = 10, max = 10, message = "Mobile Number Should Contains 10 Digits")
	private String userMobileNumber;

	@Column(name = "emailid", unique = true, length = 25)
	@NotEmpty
	@Email(message = "Email is not valid")
	private String userEmail;

	@Column(name = "password", length = 20)
	@NotNull(message = "Password Can Not Be Empty")
	@Size(min = 8, message = "password length must be 8 characters and upparcase,lowercase,digit")
	private String userPassword;

	@NotNull
	private LocalDate userDateOfBirth;

	@NotNull
	@Size(min = 4, message = "person gender should have atleast 4 characters")
	private String userGender;

	@NotNull
	private String userRole;

	private String status;

	private boolean isActivateAccount;

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserVotingCardNumber() {
		return userVotingCardNumber;
	}

	public void setUserVotingCardNumber(String userVotingCardNumber) {
		this.userVotingCardNumber = userVotingCardNumber;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}

	public String getUserMobileNumber() {
		return userMobileNumber;
	}

	public void setUserMobileNumber(String userMobileNumber) {
		this.userMobileNumber = userMobileNumber;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public LocalDate getUserDateOfBirth() {
		return userDateOfBirth;
	}

	public void setUserDateOfBirth(LocalDate userDateOfBirth) {
		this.userDateOfBirth = userDateOfBirth;
	}

	public String getUserGender() {
		return userGender;
	}

	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public boolean isActivateAccount() {
		return isActivateAccount;
	}

	public void setActivateAccount(boolean isActivateAccount) {
		this.isActivateAccount = isActivateAccount;
	}
	
	
	
}

	
