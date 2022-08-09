import Header from '../components/header';
import Product from '../models/Product';
import db from '../utils/db';

export default function Home() {
  return (
    <Header title="Home Page">
      <div className="premium">
        <img
          src="../../images/yellowtag1.png"
          className="h-full w-full premium1"
        />
      </div>
    </Header>
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
