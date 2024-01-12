const topics = require("../blog/helpers/topics")

describe("Test topics handlebars helper", () => {
    it("single topic supported", () => {
        expect(topics("Epos fuga")).toEqual["Epos fuga"]
    })
    it("leading and trailing spaces are trimmed for single topic", () => {
        expect(topics("  Nuptia resisteres  ")).toEqual(["Nuptia resisteres"])
    });
    it("topics are split into array", () => {
        const origin = "Cur burgus mori;Ubi est secundus byssus"
        const expected = [
            "Cur burgus mori",
            "Ubi est secundus byssus"
        ]
        expect(topics(origin)).toEqual(expected)
    });
    it("leading and trailing spaces are removed", () => {
        const origin = "Festus orexis ; Diligenter tractares ; Bulla est."
        const expected = [
            "Festus orexis",
            "Diligenter tractares",
            "Bulla est."
        ]
        expect(topics(origin)).toEqual(expected)
    });
})
