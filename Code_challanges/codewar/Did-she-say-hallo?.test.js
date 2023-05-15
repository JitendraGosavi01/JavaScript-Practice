const validateHello = require("./Did-she-say-hallo?.js");

describe("Tests", () => {
  it("is tests 'ahoj'", () => {
    const expected = validateHello("ahoj");
    expect(expected).toBeTruthy();
  });

  it("test1'", () => {
    const expected = validateHello(
      "YOU! tres: tREs WiE YOu, qUe: viStA: how, La! HomBRE; doIng tSChuss; hOmbre arE haSTA HASTa? HoW wiE? you! la ViSTa! CIao viStA TRES! ViStA? VIStA; TsCHUSS! HOMbRE? doIng"
    );
    expect(expected).toBeTruthy();
  });
  it("is tests 'ahoj'", () => {
    const expected = validateHello("LA treS. aRE.");
    expect(expected).toBeFalsy();
  });
  it("is tests 'ahoj'", () => {
    const expected = validateHello(
      "TRes tRES tReS You, vista HaSTA? ARe. bIEN; visTA! HOlA! la:"
    );
    expect(expected).toBeTruthy();
  });
});
