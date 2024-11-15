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
    @Column(name="PartyName", length = 30)
    private String partyName;
    
    @NotNull(message = "Please Insert Party Logo")
    @Column(name="PartyLogo")
    private String partyLogo;
    
    private String partyLeaderName;
    @NotNull(message = "Please Give Constituency Name")
    @Column(name="constituency", length = 30)
    private String constituency;
    
    @NotNull(message = "Please Insert candidate picture")
    @Column(name="candidate picture")
    private String canImage;
    private int votes;
    //hello

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

	public String getConstituency() {
		return constituency;
	}

	public void setConstituency(String constituency) {
		this.constituency = constituency;
	}

	public String getCanImage() {
		return canImage;
	}

	public void setCanImage(String canImage) {
		this.canImage = canImage;
	}
    

     
}

