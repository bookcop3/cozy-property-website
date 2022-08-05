import Layout from '../components/Layout';
import Product from '../models/Product';
import db from '../utils/db';

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="premium">
        <h1 className="font-athiti text-3xl font-semibold mt-10 px-4">
          ประกาศ
        </h1>
        <img
          src="../../images/yellowtag1.png"
          className="h-full w-full premium1"
        />
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
