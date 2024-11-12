const mapYarnToModel = (yarn) => {
    return {
        title: yarn.title,
        subtitle: yarn.subtitle,
        description: yarn.description,
        yarnSize: yarn.yarnSize,
        quantityInStock: yarn.quantityInStock,
        imageurl: yarn.image.imageurl,
        imagealt: yarn.image.alt,
        price: yarn.price
    }

};
export default mapYarnToModel;