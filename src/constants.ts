export const baseUrl = process.env.NODE_ENV === 'development' ? process.env.LOCAL_HOST_URL : process.env.PROD_HOST_URL;

export const productsKey = 'products';
export const usersKey = 'users';
export const rolesKey = 'roles';
export const brandsKey = 'brands';
export const characteristicsKey = 'characteristics';
export const productTypesKey = 'product-types';
export const hairTypesKey = 'hair-types';
export const dashboardKey = 'dashboard';
export const aboutKey = 'about';
export const deliveryKey = 'delivery';
export const contactsKey = 'contacts';
export const checkoutKey = 'checkout';

//LOCAL STORAGE
export const cartLocalStorage = 'kiss.viktory.userCart';

export const ROLES = {
    ADMIN: 'ADMIN',
    USER: 'USER',
    GUEST: 'GUEST',
};
