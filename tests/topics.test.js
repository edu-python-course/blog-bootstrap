const iter_topics = require("../src/helpers/iter_topics")

describe("Test topics handlebars helper", () => {
    it("single topic supported", () => {
        expect(iter_topics("Epos fuga")).toEqual["Epos fuga"]
    })
    it("leading and trailing spaces are trimmed for single topic", () => {
        expect(iter_topics("  Nuptia resisteres  ")).toEqual(["Nuptia resisteres"])
    });
    it("topics are split into array", () => {
        const origin = "Cur burgus mori;Ubi est secundus byssus"
        const expected = [
            "Cur burgus mori",
            "Ubi est secundus byssus"
        ]
        expect(iter_topics(origin)).toEqual(expected)
    });
    it("leading and trailing spaces are removed", () => {
        const origin = "Festus orexis ; Diligenter tractares ; Bulla est."
        const expected = [
            "Festus orexis",
            "Diligenter tractares",
            "Bulla est."
        ]
        expect(iter_topics(origin)).toEqual(expected)
    });
})
