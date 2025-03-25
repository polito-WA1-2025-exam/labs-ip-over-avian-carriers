export default class Size {
    constructor(sizeId, maxDayQty, maxProteins, maxIngridients, price) {
        this.sizeId = sizeId;
        this.maxDayQty = maxDayQty;
        this.maxProteins = maxProteins;
        this.maxIngridients = maxIngridients;
        this.price = price;
    }
}

function Sizes() {
    this.listSizes = [];

    this.addSize = (size) => {
        this.listSizes.push(size);
    }
}

