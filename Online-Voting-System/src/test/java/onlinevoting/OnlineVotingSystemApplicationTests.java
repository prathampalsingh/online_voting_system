package onlinevoting;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.time.LocalDate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import onlinevoting.entity.Party;
import onlinevoting.entity.User;
import onlinevoting.service.PartyService;
import onlinevoting.service.UserService;

@SpringBootTest
class OnlineVotingSystemApplicationTests {
	@Autowired
	private  UserService userService;
	@Autowired
	private PartyService partyService;
	static User user = null;
	static Party party=null;
	private final String email="nitesh343@gmail.com";
	
	@Test
	void testRegisterUser() {
		
		User newUser=new User();
		newUser.setUserName("Priyali");
		newUser.setUserEmail("Priyali@gmail.com");
		newUser.setUserGender("Female");
		newUser.setUserRole("voter");
		newUser.setUserAddress("Mumbai");
		newUser.setUserVotingCardNumber("3456345645");
		newUser.setUserPassword("Priya@123");
		newUser.setUserMobileNumber("8989818989");
		//LocalDate.of(2002,12 ,3);
		newUser.setUserDateOfBirth(LocalDate.of(2002,12 ,3));
		
		assertNotNull(userService.registerUser(newUser));
	}

	@Test
	void testLoginVoter() {
		user=userService.findByUserEmail(email);
		System.out.println("&&&&&&&&"+user.getUserId());
		assertNotNull(userService.loginUserByVotingCardNumber(user.getUserVotingCardNumber(), user.getUserPassword()));
	}
	
	@Test
	void testallUser() {
		
		assertNotNull(userService.displayUser());
	}
	
	@Test
	void testUserByName() {
		user=userService.findByUserEmail(email);
		System.out.println("******"+user.getUserEmail());
		assertNotNull(userService.getUserByUserName(user.getUserName()));
	}
	
	

	

	


}