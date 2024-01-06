const DbConnect = require('../database/index');

const user = require('../models/user');
const info_user_register = require('../models/info_user_register');
const log_login_user = require('../models/log_login_user');
const orders = require('../models/orders');

//#region Amarrações de tabelas terceiras
const categories = require('../models/categories');
const sub_categories = require('../models/sub_categories');
const products = require('../models/products');

const CategoriesViewModel = DbConnect.define('categories', categories);
const SubcategoriesViewModel = DbConnect.define('sub_categories', sub_categories);
const ProductsViewModel = DbConnect.define('products', products);
//#endregion

const UserViewModel = DbConnect.define('user', user);
const Info_user_registerViewModel = DbConnect.define('info_user_register', info_user_register);
const Log_login_userViewModel = DbConnect.define('log_login_user', log_login_user);
const OrdersViewModel = DbConnect.define('orders', orders);

//#region association of establishment tables
Info_user_registerViewModel.belongsTo(UserViewModel, { foreignKey: 'userId' });
UserViewModel.hasOne(Info_user_registerViewModel, { foreignKey: 'userId' });

Log_login_userViewModel.belongsTo(UserViewModel, { foreignKey: 'userId' });
UserViewModel.hasOne(Log_login_userViewModel, { foreignKey: 'userId' });

Log_login_userViewModel.belongsTo(Info_user_registerViewModel, { foreignKey: 'infouserregId' });
Info_user_registerViewModel.hasOne(Log_login_userViewModel, { foreignKey: 'infouserregId' });

OrdersViewModel.belongsTo(UserViewModel, { foreignKey: 'userId' });
UserViewModel.hasOne(OrdersViewModel, { foreignKey: 'userId' });

OrdersViewModel.belongsTo(CategoriesViewModel, { foreignKey: 'categoriesId' });
CategoriesViewModel.hasOne(OrdersViewModel, { foreignKey: 'categoriesId' });

OrdersViewModel.belongsTo(ProductsViewModel, { foreignKey: 'productId' });
ProductsViewModel.hasOne(OrdersViewModel, { foreignKey: 'productId' });

OrdersViewModel.belongsTo(SubcategoriesViewModel, { foreignKey: 'subcategoriesId', allowNull: true });
SubcategoriesViewModel.hasOne(OrdersViewModel, { foreignKey: 'subcategoriesId', allowNull: true });

//#endregion
module.exports = {
    UserViewModel,
    Info_user_registerViewModel,
    Log_login_userViewModel,
    OrdersViewModel
};