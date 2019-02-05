// userType, 0 = normal: all users that is not a company user, 1 = company: a company user
// productType, 0 = new product in the product line, 1 = old product: an existing product in the product line
// price, the price of the product
var calculatePrice = function (userType, productType, price, publishedDate) {
	try	{
		switch (userType) {
		case 0: // Normal for non-company users
			if (productType === 0) { // New product with publish date discount or not
                var newProductDiscount = 0;  
                if (publishedDate.toDateString() === new Date().toDateString()) newProductDiscount = 10; // newProductDiscount? if not !==

                return price + 25 - newProductDiscount;
			} else if (productType === 1) { // Old product no discount defined
				return price + 35 - 0;
			}
			break;
		case 1: // Company users only
			if (productType === 0) { // New product
                if (publishedDate.toDateString() === new Date().toDateString()) {
						return price + 25 - 15; // Enddate discount and company discount? if not (!==) retun company discount bellow
				}

				return price + 25 - 5;// Only company discount
			} else if (productType === 1) { 
                return price + 35 - 5;  // Old product discount with or without discount
			}
			break;
		}
	}	catch (ex)	{
			console.log(ex);
	}
	return 0;
}