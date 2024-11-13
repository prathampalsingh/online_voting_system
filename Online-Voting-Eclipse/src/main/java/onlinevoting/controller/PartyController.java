package onlinevoting.controller;

import java.util.List;

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

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import onlinevoting.entity.Party;
import onlinevoting.repository.PartyRepository;
import onlinevoting.service.PartyService;

@RestController
@RequestMapping("/party")
@CrossOrigin(origins = "http://localhost:4200")
@Transactional
public class PartyController {
	@Autowired

	private PartyService partyService;
	@Autowired
	private PartyRepository pRepository;

	@PostMapping("/addparty")
	public String addParty(@RequestBody Party party) {
		partyService.addParty(party);
		return "Party added successfully";
	}

	@GetMapping("/partylist")
	public List<Party> getAllParties() {
		return partyService.getAllParties();
	}
	
	@DeleteMapping("/deleteparty/{partyId}")
	public String deletePartyById(@PathVariable Long partyId) {
		partyService.deletePartyById(partyId);
		return "Party deleted successfully";
	}

	@PutMapping("/edit/{partyId}")
	public ResponseEntity<Party> updateParty(@Valid @PathVariable("partyId") long partryId, @RequestBody Party party) {
		return new ResponseEntity<Party>(partyService.updateParty(party, partryId), HttpStatus.OK);
	}

	@GetMapping("/findByPartyId/{partyId}")
	public Party getPartyByName(@PathVariable Long partyId) {
		return pRepository.findById(partyId).get();
	}

//	@GetMapping("/findByName/{partyName}")
//	public List<Party> getPartyByName(@PathVariable String partyName) {
//		return partyService.getPartyByName(partyName);
//	}
//
//	@GetMapping("/findByLogo/{partyLogo}")
//	public List<Party> getPartyByLogo(@PathVariable String partyLogo) {
//		return partyService.getPartyByLogo(partyLogo);
//	}

	
}