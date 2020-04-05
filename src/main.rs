#[macro_use]
extern crate lalrpop_util;

lalrpop_mod!(pub via); // synthesized by LALRPOP

#[cfg(not(test))]
fn main() {
    println!("Hello, world!");
}

#[test]
fn via() {
    assert!(via::TermParser::new().parse("42 hi this_is_ok so-is-this _and this_").is_ok());
    assert!(via::TermParser::new().parse("-not-okay").is_err());
    assert!(via::TermParser::new().parse("not.okay").is_err());
    assert!(via::TermParser::new().parse("isn’t okay").is_err());
}
