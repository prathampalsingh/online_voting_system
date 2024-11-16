package onlinevoting.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import onlinevoting.entity.Party;
import onlinevoting.entity.User;
import onlinevoting.exception.ResourceNotFoundException;
import onlinevoting.repository.PartyRepository;
import onlinevoting.repository.UserRepository;
import onlinevoting.service.PartyService;
import onlinevoting.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	private UserService userService;

	@Autowired
	private PartyService pService;

	@Autowired
	private PartyRepository pRepository;

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/alluser")
	public List<User> getUser() {
		return userService.displayUser();
	}

	@PostMapping("/registeruser")
	public ResponseEntity<String> registerUser(@Valid @RequestBody User user) {
		userService.registerUser(user);
		return ResponseEntity.ok("User Registered Successfully");
	}
	
	@DeleteMapping("/deleteuser/{id}")
	public ResponseEntity<Boolean> deleteUser(@PathVariable("id") long userId) {
		userService.deleteByUserId(userId);
		boolean flag = true;
		return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
	}

	@PostMapping("/loginByCardNumber")
	public ResponseEntity<User> loginByCardNumber(@RequestBody User user) {
		User u = userService.loginUserByVotingCardNumber(user.getUserVotingCardNumber(), user.getUserPassword());
		return ResponseEntity.ok(u);
	}

	@PostMapping("/loginByEmail")
	public ResponseEntity<User> loginUserByEmail(@RequestBody User user) {
		User u = userService.loginUserByEmail(user.getUserEmail(), user.getUserPassword());
		return ResponseEntity.ok(u);
	}

	@PostMapping("/activateUser2/{userId}")
	public ResponseEntity<String> activateUser2(@PathVariable Long userId) {
		 return userService.activateUser2(userId);
	}

	@PostMapping("/addvote/{partyId}/{userId}")
	public ResponseEntity<HashMap<String, String>> addCandidate(@PathVariable Long partyId, @PathVariable Long userId) {
		
		return  userService.addCandidate(partyId, userId);

	}

	@GetMapping("/getUserById/{userId}")
	public ResponseEntity<User> getUserById(@PathVariable Long userId) {
		User u = userRepository.findById(userId).get();
		return ResponseEntity.ok(u);
	}

	@PutMapping("/updateUser")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		return userService.updateUser(user);

	}

	@GetMapping("/findByVotingCardNumber/{userVotingCardNumber}")
	public User getUserByVotingCardNumber(@PathVariable String userVotingCardNumber) {
		return userService.getUserByVotingCardNumber(userVotingCardNumber);
	}

	@GetMapping("/findByUserId/{userId}")
	public User getUserByVotingCardNumber(@PathVariable Long userId) {
		return userRepository.findById(userId).get();
	}

	@GetMapping("/findByMobileNumber/{userMobileNumber}")
	public List<User> getUserByMobileNumber(@PathVariable String userMobileNumber) {
		return userService.getUserByMobileNumber(userMobileNumber);
	}

	@GetMapping("/findByUserName/{userName}")
	public List<User> getUserByUserName(@PathVariable String userName) {
		return userService.getUserByUserName(userName);
	}

	@GetMapping("/findByRole/{userRole}")
	public List<User> getUserByRole(@PathVariable String userRole) {
		return userService.getUserByRole(userRole);
	}


	
	// Change Password
	@PostMapping("/changePassword/{uid}/{newpassword}")
	public User changeUserPassword(@PathVariable("uid") Long uid,@PathVariable("newpassword") String newpassword) {
		User u = userRepository.findById(uid).get();
		u.setUserPassword(newpassword);
		userRepository.save(u);
		return u;
	}

	@GetMapping("/findByUserEmail/{email}")
	public User getUserByEmail(@PathVariable String email) {
		System.out.println(">>>>" + email);
		return userService.findByUserEmail(email);
	}
}