describe("event specs : ", function () {

    beforeEach(module('app'));
    beforeEach(module('app.services'));

    it('do test', inject(function () {

        expect("1").toBe("1");

    }))

})