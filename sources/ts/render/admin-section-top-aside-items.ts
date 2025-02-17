/**
 * @file admin-section-top-aside-items.ts
 * @description Admin section top aside items.
 */

'use strict';
import type { AdminAsideItem } from '@sources/ts/types/admin-section-aside-item';

const adminSectionTopAsideItems: AdminAsideItem[] = [
    {
        text: 'Product',
        icon: 'fal fa-pot-food',
        to: 'products',
    },
    {
        text: 'Category',
        icon: 'fal fa-list',
        to: 'categories',
    },
    {
        text: 'Order',
        icon: 'fal fa-basket-shopping',
        to: 'orders',
    },
    {
        text: 'User',
        icon: 'fal fa-users',
        to: 'users',
    },
];

export default adminSectionTopAsideItems;
