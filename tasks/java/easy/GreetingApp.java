// Java - Easy

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class GreetingApp {

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // TODO: Implement a Simple Greeting Application
        System.out.println("Input your name.");
        String name = br.readLine();
        System.out.println(name +"Nice too meet you.");
    }   
}
