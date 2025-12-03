package org.forkcommitmerge.hello;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String getText(Model model) {
        model.addAttribute("message", "Hello, Spring Boot");
        return "index";

    }

}
