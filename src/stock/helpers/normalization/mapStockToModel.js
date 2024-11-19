
const mapStockToModel = (stock) => {
    return {

        quantity: stock.quantityInStock,
        yarnId: stock.yarnId
        /* imageurl: stock.image.imageurl,
        imagealt: stock.image.alt, */

    }

};
export default mapStockToModel;