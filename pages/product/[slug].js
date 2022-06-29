import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import Product from '../../models/Product';
import db from '../../utils/db';

export default function ProductScreen(props) {
  const { product } = props;
  if (!product) {
    return <Layout title="Product Not Found">Product Not Found</Layout>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">ย้อนกลับหน้าหลัก</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div className="card p-5">
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>ประเภท: {product.product_type}</li>
            <li>รายละเอียด: {product.details}</li>
            <li>ที่อยู่: {product.address}</li>
            <li>โทร: {product.telephone_number}</li>
            <li>รูปแบบ: {product.sales_type}</li>
            <li>ราคา: {product.price}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
