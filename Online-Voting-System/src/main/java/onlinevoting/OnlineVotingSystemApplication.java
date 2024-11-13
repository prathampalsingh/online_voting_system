package onlinevoting;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OnlineVotingSystemApplication {
	public static void main(String[] args) {
		SpringApplication.run(OnlineVotingSystemApplication.class, args);
		System.out.println("Online Voting System Is Running...");
	}
}