// Product.js (or any filename you prefer)
function InitialYarnCtor(title, subtitle, description, yarnSize, quantityInStock, imageurl, alt, price) {
    this.title = title || "";
    this.subtitle = subtitle || "";
    this.description = description || "";
    this.yarnSize = yarnSize || 0;
    this.quantityInStock = quantityInStock || 0;
    this.image = {
        imageurl: imageurl || "",
        alt: alt || ""
    };
    this.price = price || 0;
}

export default InitialYarnCtor; // Exporting the constructor
