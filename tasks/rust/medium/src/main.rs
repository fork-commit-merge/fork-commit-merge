// Rust - Medium

use std::io;

//function to convert celcius to farenheit
fn celcius_to_farenheit(c:f32)->f32{
    c*9.0/5.0 +32.0
}

//function to convert farenheit to celcius
fn farenheit_to_celcius(f:f32)->f32{
    (f-32.0)*5.0/9.0
}

fn main() {
    // TODO: Create a program in Rust that converts temperatures between Fahrenheit and Celsius

    //loop till the user enters a valid option and gets result
    loop{
        println!("enter an option");
        println!("1 convert farenheit to celcius");
        println!("2 convert celcius to farenheit");

        //input from user to get an option
        let mut option=String::new();
        io::stdin().read_line(&mut option).expect("invalid option");

        //making sure the option is either 1 or 2
        let option:i32=match option.trim().parse(){
            Ok(opt)=>{
                if opt==1 || opt==2{
                     opt
                    
                }
                else{
                    println!("enter a correct option");
                    continue
                }

            },
            Err(_)=>{
                println!("invalid option");
                continue;
            }
        };


        let mut temp=String::new();
        println!("Enter the temperature to convert");

        //input from user to get temperature
        io::stdin().read_line(&mut temp).expect("invalid input");

        //makes sure temperature is a proper input
        let temp:f32=match temp.trim().parse(){
            Ok(val)=>val,
            Err(_)=>continue
        };

        //show the output and break if proper options and values are inputted
        if option==1{
            
            let converted=celcius_to_farenheit(temp);
            println!("{temp} degree celcius is {converted} degrees farenheit");
            break;
        }
        else{
            let converted=farenheit_to_celcius(temp);
            println!("{temp} degree celcius is {converted} degrees farenheit");
            break;
        }

    }
}
