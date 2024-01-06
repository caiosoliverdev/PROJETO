const DbConnect = require('../database/index');

const categories = require('../models/categories');
const sub_categories = require('../models/sub_categories');
const products = require('../models/products');
const prices = require('../models/prices');
const products_image = require('../models/products_image');

const CategoriesViewModel = DbConnect.define('categories', categories);
const SubCategoriesViewModel = DbConnect.define('sub_categories', sub_categories);
const ProductsViewModel = DbConnect.define('products', products);
const PricesViewModel = DbConnect.define('prices', prices);
const ProductsImageViewModel = DbConnect.define('products_image', products_image);

//#region association of establishment tables
SubCategoriesViewModel.belongsTo(CategoriesViewModel, { foreignKey: 'categoriesId' });
CategoriesViewModel.hasOne(SubCategoriesViewModel, { foreignKey: 'categoriesId' });

ProductsViewModel.belongsTo(CategoriesViewModel, { foreignKey: 'categoriesId' });
CategoriesViewModel.hasOne(ProductsViewModel, { foreignKey: 'categoriesId' });

ProductsViewModel.belongsTo(SubCategoriesViewModel, { foreignKey: 'subcategoriesId', allowNull: true });
SubCategoriesViewModel.hasOne(ProductsViewModel, { foreignKey: 'subcategoriesId', allowNull: true });

PricesViewModel.belongsTo(ProductsViewModel, { foreignKey: 'productsId' });
ProductsViewModel.hasOne(PricesViewModel, { foreignKey: 'productsId' });

ProductsImageViewModel.belongsTo(ProductsViewModel, { foreignKey: 'productsId' });
ProductsViewModel.hasOne(ProductsImageViewModel, { foreignKey: 'productsId' });

ProductsImageViewModel.belongsTo(PricesViewModel, { foreignKey: 'priceId' });
PricesViewModel.hasOne(ProductsImageViewModel, { foreignKey: 'priceId' });

//#endregion

module.exports = {
    CategoriesViewModel,
    SubCategoriesViewModel,
    ProductsViewModel,
    PricesViewModel,
    ProductsImageViewModel
};