#[derive(Debug)]
struct Person<'a> {
    name: &'a str,
    age: u8
}

fn main() {
    let name = "Shorky";
    let age = 5; // :>
    let author = Person { name, age };

    // Pretty print
    println!("{:#?}", author);
}
