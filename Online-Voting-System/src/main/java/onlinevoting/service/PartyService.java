package onlinevoting.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import onlinevoting.entity.Party;
import onlinevoting.repository.PartyRepository;

@Service
public class PartyService {
    @Autowired
    private PartyRepository partyRepository;
    
    public List<Party> getAllParties() {
        return partyRepository.findAll();
    }

    public Party addParty(Party party) {
        return partyRepository.save(party);
    }

	public List<Party> getPartyByName(String partyName) {
		return partyRepository.findByPartyName(partyName);
	}
    public List<Party> getPartyByLogo(String partyLogo) {
        return partyRepository.findByPartyLogo(partyLogo);
    }
    
    public Party updateParty(Party party, long partyId) {
        Party existingParty = partyRepository.findById(partyId)
                .orElseThrow(() -> new onlinevoting.exception.ResourceNotFoundException("party", "partyId", party));
        existingParty.setPartyName(party.getPartyName());
        existingParty.setPartyLogo(party.getPartyLogo());
        
        existingParty.setPartyLeaderName(party.getPartyLeaderName());
        partyRepository.save(existingParty);
        return existingParty;
    }
    
    public void deletePartyById(Long partyId) {
      //  partyRepository.findById(partyId).orElseThrow(() -> new ResourceNotFoundException("party", "partyId", partyId));
        partyRepository.deleteById(partyId);
    }
}