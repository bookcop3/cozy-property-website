import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Metas',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Pusanisa',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products_home: [
    {
      name: 'บ้านน้องเปี้ยว',
      slug: 'บ้านน้องเปี้ยว',
      product_type: 'บ้าน',
      product_used: 'มือ1',
      status_seller: 'เจ้าของ',
      floor_num: '2ชั้น',
      building: 'บ้าน',
      product_area: '320ตรม.',
      bedrooms_num: '2',
      bathrooms_num: '2',
      detil: 'น่าอยู่',
      image: '/images/img2.jpg',
      price: '150000',
      price_h: '5000',
    },
  ],
};

export default data;
