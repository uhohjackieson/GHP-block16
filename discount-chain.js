// create individual functions for a checkout system at the pharmacy
// a function to return the total cost of all refills 
// a function for coupons
// a function for the grand total
// store each function in a separate variable (to be used in other functions)
// if they have a subscription: 25% off after refill total calculated
// for coupons: $10 off after subscription discount calculated
// print "Your grand total is $(finalAmount)"

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}


const totalPresciptionCost = function totalPrescriptionCost(name) {
    const originalPrescriptionPrice = (name['pricePerRefill'] * name['refills']);
    if (name['subscription'] === true) {
        return ((originalPrescriptionPrice) - (originalPrescriptionPrice * .25));
    } else
        return (originalPrescriptionPrice);
};

const couponDiscount = function couponDiscount(name) {
    return totalPresciptionCost(name) - 10;

}

const finalAmount = function finalAmount(name) {
    if ((name['subscription'] === true) && (name['coupon'] === true)) {
        return couponDiscount(name);
    } else if ((name['coupon']) === true) {
        return couponDiscount(name);
    } else {
        return totalPresciptionCost(name);
    }
}


console.log(`Timmy: Your grand total is ${finalAmount(timmy)}`);
console.log(`Sarah: Your grand total is ${finalAmount(sarah)}`);
console.log(`Rocky: Your grand total is ${finalAmount(rocky)}`);

