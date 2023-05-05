// Method order does not matter. Rust will find the main function and run it first.

fn main() {
    // Rust has a type inference system that infers types for values automatically
    // If it's unable to infer the type, it will give a compile-time error and ask you to add an annotation to specify exactly the type you want
    // let is what const and immutable are in JS
    let city_name = "Rustville";

    // string interpolation is possible with println!(), panic!(), and format!(). It works with both strings and numbers
    // Exclamation mark indicates that these are macros, not functions
    println!("The city of {}:\n", city_name);

    print_population(1_324_578, 114_293, 108_097);
}

fn print_population(adults: u64, kids: u32, buildings: u32) {
    // 👉 TODO compute population by adding adults to kids
    //
    // 💡 TIP: Use the `as` keyword to convert between numeric types!
    let population = adults + kids as u64;

    // 👉 TODO compute buildings_per_person by dividing buildings by population
    //
    // 💡 TIP: To get a f64 answer here, both numerator and denominator must be f64 values
    let buildings_per_person = buildings as f64 / population as f64;

    println!("    Population: {}", population);
    println!("        Adults: {}", adults);
    println!("        Kids: {}", kids);
    println!("    Buildings: {}", buildings);
    println!("    Buildings per person: {}\n", buildings_per_person);

    if buildings_per_person >= 1.0 {
        println!("Everyone can have their own building!");
    } else {
        println!("Buildings must be shared!");
    }
}
