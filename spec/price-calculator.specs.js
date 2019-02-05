describe('price calculator', function(){
	
    it('should calc price right', function () {

        // Arrange sections: They are variables, change them according to the cases in src/price-calculate.js
        var expected = 36;
		var userType = 0;
		var productType = 1;
		var price = 1;
        var publishedDate = new Date(); // Test also with for example new Date(2020, 11)

        // Act section: Calling src/price-calculator.js
        var actual = calculatePrice(userType, productType, price, publishedDate);

        // Assert section: Comparing expected value with actual calculated if true
		expect(expected).to.equal(actual);
	});

});