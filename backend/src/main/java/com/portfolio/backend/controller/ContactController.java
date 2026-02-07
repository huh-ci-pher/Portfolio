package com.portfolio.backend.controller;

import com.portfolio.backend.model.Contact;
import com.portfolio.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from Vite dev server
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/contact")
    public ResponseEntity<?> createContact(@RequestBody Contact contact) {
        try {
            Contact savedContact = contactRepository.save(contact);
            return ResponseEntity.ok(Map.of("success", true, "contact", savedContact));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", "Failed to submit contact form"));
        }
    }

    @GetMapping("/contacts")
    public List<Contact> getContacts() {
        return contactRepository.findAll();
    }
}
