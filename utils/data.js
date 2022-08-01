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
      product_type: '****',
      product_used: '****',
      status_seller: '****',
      floor_num: '****',
      building: '****',
      product_area: '****',
      bedrooms_num: '****',
      bathrooms_num: '****',
      detil: '****',
      image: '/images/img2.jpg',
      price: '****',
      price_h: '****',
    },
  ],
};

export default data;
