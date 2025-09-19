package org.forkcommitmerge.hello;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    /*
     * TASK: Create a GET mapping for the index page ("/")
     *
     * Requirements:
     * 1. Create a method that handles GET requests to the root path "/"
     * 2. Add the text "Hello, Spring Boot" to the model with the key "message"
     * 3. Return the view name "index" to render the template
     *
     * The template is already set up to display the message using Thymeleaf
     * with the expression: th:text="${message}"
     */
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("message", "hello, Spring Boot");
        return "index";
     }

}
