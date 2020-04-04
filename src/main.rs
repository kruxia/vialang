#[macro_use]
extern crate lalrpop_util;

lalrpop_mod!(pub calculator); // synthesized by LALRPOP
pub mod ast;

// #[test]
// fn calculator1() {
//     assert!(calculator::TermParser::new().parse("22").is_ok());
//     assert!(calculator::TermParser::new().parse("(22)").is_ok());
//     assert!(calculator::TermParser::new().parse("((((22))))").is_ok());
//     assert!(calculator::TermParser::new().parse("((22)").is_err());
// }

// #[cfg_attr(not(test), allow(unused_macros))]
// macro_rules! test3 {
//     ($expr:expr) => {
//         println!("parsing {}", stringify!($expr));
//         assert_eq!(
//             calculator::ExprParser::new()
//                 .parse(stringify!($expr))
//                 .unwrap(),
//             $expr
//         );
//     };
// }

// #[test]
// fn calculator3() {
//     test3!(22 + 44);
//     test3!(22 - 44 - 66);
//     test3!(22 * 44 + 66);
//     test3!(22 * 44 + 66 / 3);
//     test3!(22 * (44 + 66) / 3);
// }

#[test]
fn calculator4() {
    let expr = calculator::ExprParser::new()
        .parse("22 * 44 + 66")
        .unwrap();
    assert_eq!(&format!("{:?}", expr), "((22 * 44) + 66)");
}

#[cfg(not(test))]
fn main() {
}
