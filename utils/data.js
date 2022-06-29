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
  products: [
    {
      name: 'คอนโดสบายดี',
      slug: 'คอนโดสบายดี',
      product_type: 'คอนโด',
      details: 'ชั้น 3 ขนาด 20 ตารางวา 1 ห้องนอน 1 ห้องน้ำ อยู่ใกล้ BTS',
      address: '11/11 อ.ดอนเมือง จ.กรุงเทพ 10210',
      image: '/images/img4.jpg',
      telephone_number: '087-2691122',
      sales_type: 'ขาย',
      price: '1000000',
      rating: 4.5,
      numReviews: 10,
    },
    {
      name: 'คอนโดสบายจุง',
      slug: 'คอนโดสบายจุง',
      product_type: 'คอนโด',
      details: 'ชั้น 5 ขนาด 25 ตารางวา 2 ห้องนอน 2 ห้องน้ำ อยู่ใกล้ BTS',
      address: '11/11 อ.ดอนเมือง จ.กรุงเทพ 10210',
      image: '/images/img4.jpg',
      telephone_number: '087-2691123',
      sales_type: 'เช่า',
      price: '15000',
      rating: 4.5,
      numReviews: 10,
    },
    {
      name: 'บ้านชิวๆ',
      slug: 'บ้านชิวๆ',
      product_type: 'บ้าน',
      details:
        'บ้านชั้นเดียว 2 ห้องน้ำ 2 ห้องนอน 1 ห้องครัว 1 ห้องนั่งเล่น อยู่ใจกลางเมือง',
      address: '121/4 อ.ดินแดง จ.กรุงเทพ 10400',
      image: '/images/img4.jpg',
      telephone_number: '094-9911234',
      sales_type: 'ขาย',
      price: '3000000',
      rating: 5,
      numReviews: 10,
    },
    {
      name: 'บ้านชิวเกิน',
      slug: 'บ้านชิวเกิน',
      product_type: 'บ้าน',
      details:
        'บ้านสองชั้น 3 ห้องน้ำ 2 ห้องนอน 1 ห้องครัว 1 ห้องนั่งเล่น อยู่ใจกลางเมือง',
      address: '121/4 อ.ดินแดง จ.กรุงเทพ 10400',
      image: '/images/img4.jpg',
      telephone_number: '094-9911235',
      sales_type: 'เช่า',
      price: '12000',
      rating: 5,
      numReviews: 10,
    },
    {
      name: 'ที่ดินร่ำรวย',
      slug: 'ที่ดินร่ำรวย',
      product_type: 'ที่ดิน',
      details: 'ที่ดินขนาด 50 ตารางวา อยู่ติดถนน',
      address: '52/1 อ.ทุ่งครุ จ.กทม. 10140',
      image: '/images/img4.jpg',
      telephone_number: '094-9911234',
      sales_type: 'ขาย',
      price: '1300000',
      rating: 5,
      numReviews: 10,
    },
  ],
};

export default data;
