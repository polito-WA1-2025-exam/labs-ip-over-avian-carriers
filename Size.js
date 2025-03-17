function Size(maxQty, maxProteins, maxIngridients, price) {
    this.uniqueId = generateUniqueId();
    this.maxQty = maxQty;
    this.maxProteins = maxProteins;
    this.maxIngridients = maxIngridients;
    this.price = price;
}

function Sizes() {
    this.listSizes = [];

    this.addSize = (size) => {
        this.listSizes.push(size);
    }
}

export default Sizes;