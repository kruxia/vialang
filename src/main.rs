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
    let mut errors = Vec::new();
    let expr = calculator::ExprParser::new()
        .parse(&mut errors, "22 * 44 + 66")
        .unwrap();
    assert_eq!(&format!("{:?}", expr), "((22 * 44) + 66)");
}

#[test]
fn calculator5() {
    let mut errors = Vec::new();

    let expr = calculator::ExprsParser::new().parse(&mut errors, "").unwrap();
    assert_eq!(&format!("{:?}", expr), "[]");

    let expr = calculator::ExprsParser::new().parse(&mut errors, "22 * 44 + 66").unwrap();
    assert_eq!(&format!("{:?}", expr), "[((22 * 44) + 66)]");

    let expr = calculator::ExprsParser::new().parse(&mut errors, "22 * 44 + 66,").unwrap();
    assert_eq!(&format!("{:?}", expr), "[((22 * 44) + 66)]");

    let expr = calculator::ExprsParser::new().parse(&mut errors, "22 * 44 + 66, 13*3").unwrap();
    assert_eq!(&format!("{:?}", expr), "[((22 * 44) + 66), (13 * 3)]");

    let expr = calculator::ExprsParser::new().parse(&mut errors, "22 * 44 + 66, 13*3,").unwrap();
    assert_eq!(&format!("{:?}", expr), "[((22 * 44) + 66), (13 * 3)]");
}

#[test]
fn calculator6() {
    let mut errors = Vec::new();

    let expr = calculator::ExprsParser::new().parse(&mut errors, "22 * + 3").unwrap();
    assert_eq!(&format!("{:?}", expr), "[((22 * error) + 3)]");

    let expr = calculator::ExprsParser::new().parse(&mut errors, "22 * 44 + 66, *3").unwrap();
    assert_eq!(&format!("{:?}", expr), "[((22 * 44) + 66), (error * 3)]");

    let expr = calculator::ExprsParser::new().parse(&mut errors, "*").unwrap();
    assert_eq!(&format!("{:?}", expr), "[(error * error)]");

    assert_eq!(errors.len(), 4);
}

#[cfg(not(test))]
fn main() {
}
