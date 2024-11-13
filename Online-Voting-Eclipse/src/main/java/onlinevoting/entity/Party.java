package onlinevoting.entity;

import jakarta.persistence.Column;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;


@Entity

public class Party {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long partyId;

    @NotNull(message = "Please Give Unique Party Name")
    @Column(name="PartyName", unique=true)
    private String partyName;
    
    @NotNull(message = "Please Insert Party Logo")
    @Column(name="PartyLogo", unique=true)
    private String partyLogo;
    
    private String partyLeaderName;
    
    private int votes;

	public Long getPartyId() {
		return partyId;
	}

	public void setPartyId(Long partyId) {
		this.partyId = partyId;
	}

	public String getPartyName() {
		return partyName;
	}

	public void setPartyName(String partyName) {
		this.partyName = partyName;
	}

	public String getPartyLogo() {
		return partyLogo;
	}

	public void setPartyLogo(String partyLogo) {
		this.partyLogo = partyLogo;
	}

	public String getPartyLeaderName() {
		return partyLeaderName;
	}

	public void setPartyLeaderName(String partyLeaderName) {
		this.partyLeaderName = partyLeaderName;
	}

	public int getVotes() {
		return votes;
	}

	public void setVotes(int votes) {
		this.votes = votes;
	}
    

     
}

