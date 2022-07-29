import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Product from '../models/Product';
import db from '../utils/db';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function Home({ products }) {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <Layout title="Home Page">
      <h1 className="text-xl mt-10 px-4">ประกาศ</h1>
      <img src="../../images/yellowtag1.png" width="300" height="300" />
      <Slider {...settings}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-5">
          {products.map((product) => (
            <ProductItem product={product} key={product.slug}></ProductItem>
          ))}
        </div>
      </Slider>
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
