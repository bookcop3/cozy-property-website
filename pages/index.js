import Layout from '../components/Layout';
import Product from '../models/Product';
import db from '../utils/db';

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="premium">
        <h1 className="text-xl mt-10 px-4">ประกาศ</h1>
        <img src="../../images/yellowtag1.png" width="300" height="300" />
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
