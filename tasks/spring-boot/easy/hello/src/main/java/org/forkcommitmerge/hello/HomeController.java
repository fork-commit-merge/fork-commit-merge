package org.forkcommitmerge.hello;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        // This sends the message to the HTML template
        model.addAttribute("message", "Hello, Spring Boot");
        
        // This tells Spring Boot to look for 'index.html'
        return "index";
    }
}