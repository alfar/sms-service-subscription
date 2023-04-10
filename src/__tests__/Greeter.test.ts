import { Greeter } from "../index";

test('My greeter', () => {
    expect(Greeter("Arne")).toBe("Hello Arne");
});