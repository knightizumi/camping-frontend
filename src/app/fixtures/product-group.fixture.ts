import { ProductGroup } from '@models/product/product-group.model';

export const products: ProductGroup[] = [
  {
    id: 16,
    name: '便宜帳篷、桌椅三件套',
    coverImage: 'https://i.imgur.com/Px1JXJW.jpg',
    price: 1000,
    borrowStartDate: new Date('2020/08/14 00:00'),
    borrowEndDate: new Date('2020/08/21 19:30'),
    city: '台北市 中正區',
    createAccount: 'admin',
    userName: 'admin(管理員)',
    productTypeArray: 1,
    comment: 3.8,
  },
  {
    id: 16,
    name: '便宜帳篷、桌椅三件套',
    coverImage: 'https://i.imgur.com/Px1JXJW.jpg',
    price: 1200,
    borrowStartDate: new Date('2020/08/14 00:00'),
    borrowEndDate: new Date('2020/08/21 19:30'),
    city: '台北市 中正區',
    createAccount: 'admin',
    userName: 'admin(管理員)',
    productTypeArray: 1,
    comment: 3.8,
  },
  {
    id: 17,
    name: '便宜帳篷、桌椅三件套',
    coverImage: 'https://i.imgur.com/Px1JXJW.jpg',
    price: 1000,
    borrowStartDate: new Date('2020/08/14 00:00'),
    borrowEndDate: new Date('2020/08/21 19:30'),
    city: '台北市 中正區',
    createAccount: 'admin',
    userName: 'admin(管理員)',
    productTypeArray: 1,
    comment: 3.8,
  },
];
