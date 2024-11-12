const normalizeYarn = (yarn) => {
    return {
        title: yarn.title,
        subtitle: yarn.subtitle,
        description: yarn.description,
        yarnSize: yarn.yarnSize,
        quantityInStock: yarn.quantityInStock,
        image: {
            imageurl: yarn.imageurl,
            alt: yarn.imagealt
        },
        price: yarn.price
    }

};
export default normalizeYarn;