import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Product from '../models/Product';
import db from '../utils/db';

export default function Home({ products }) {
  return (
    <Layout title="Home Page">
      <h1 className="text-xl mt-10 px-4">ประกาศ</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-5">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={product.product_type === 'บ้าน'}
          ></ProductItem>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
