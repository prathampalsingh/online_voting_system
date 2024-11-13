package onlinevoting.service;

import java.util.HashMap;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import onlinevoting.entity.Party;
import onlinevoting.entity.User;
import onlinevoting.exception.ResourceNotFoundException;
import onlinevoting.repository.PartyRepository;
import onlinevoting.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PartyRepository pRepository;

    public List<User> displayUser()
    {
    	return userRepository.findAll();
    }
    
    public User registerUser(User user) {
    	if (user.getUserRole().equals("admin")) {
    		user.setActivateAccount(true);
    	} else {
    		user.setActivateAccount(false);
    	}
        return userRepository.save(user);
    }
    
    public User getUserByVotingCardNumber(String userVotingCardNumber) {
        return userRepository.findByUserVotingCardNumber(userVotingCardNumber);
    }

    public List<User> getUserByMobileNumber(String userMobileNumber) {
        return userRepository.findByUserMobileNumber(userMobileNumber);
    }

    public List<User> getUserByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
    
    public List<User> getUserByRole(String userRole) {
        return userRepository.findByUserRole(userRole);
    }    
    
     public void deleteByUserId(long userId) {
		userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","Id",userId));
		userRepository.deleteById(userId);
		
	} 
   
    public User  loginUserByVotingCardNumber(String userVotingCardNumber, String userPassword) {
     return userRepository.findByUserVotingCardNumberAndUserPassword(userVotingCardNumber, userPassword);
  }
    
    public User loginUserByEmail(String userEmail, String userPassword) {
      return userRepository.findByUserEmailAndUserPassword(userEmail, userPassword);
  }
    
    public ResponseEntity<String> activateUser2(Long userId) {
    	User u = userRepository.findById(userId).get();
		if (u != null) {
			u.setActivateAccount(true);
			userRepository.save(u);
			return ResponseEntity.ok("User Activated Successfully");
		}
		return ResponseEntity.ok("User Not Found");
    }
    
    public User  findByUserEmail(String userEmail) {
    	//System.out.println("#######" + userEmail);
        return userRepository.findByUserEmail(userEmail);
    }
    
	public ResponseEntity<HashMap<String, String>> addCandidate( Long partyId, @PathVariable Long userId)
	{
	
		Party p = pRepository.findById(partyId).get();
		User u = userRepository.findById(userId).get();
		String voteStatus = "";
		if (p != null && u != null)
		{
			if (u.getStatus() == null) 
			{
				p.setVotes(p.getVotes() + 1);
				u.setStatus("voted");
				pRepository.save(p);
				userRepository.save(u);
				voteStatus = "Vote Added";
			}
			else 
			{
				voteStatus = "Vote Already Added";
			}
		}
		HashMap h = new HashMap<String, String>();
		h.put("vote", voteStatus);
		return ResponseEntity.ok(h);
	}
	
	
	public ResponseEntity<User> updateUser( User user) {
		
		User u = userRepository.findById(user.getUserId()).get();
		u.setUserAddress(user.getUserAddress());
		u.setUserMobileNumber(user.getUserMobileNumber());
		u.setUserDateOfBirth(user.getUserDateOfBirth());
		u.setUserEmail(user.getUserEmail());
		u.setUserName(user.getUserName());
		userRepository.save(u);
		return ResponseEntity.ok(u);
	}
}


		
