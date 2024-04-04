describe("Test 2 Describe", () => {

    before ("before all", () => {
        console.log("before all")  
    })

    beforeEach ("before each", () => {
       console.log("before each")                                     
    })


    after ("after all", () => {
        console.log("after all")  
    })


    afterEach ("after each", () => {
        console.log("after each")  

    })


    it.only ("Test 2-1", () => {
const number = 5;
assert.equal(2+2, number, "test message")
    })
    it ("Test 2-2", () => {
        console.log("test2");
            })
            it ("Test 2-3", () => {
                console.log("test3");
                    })       
})