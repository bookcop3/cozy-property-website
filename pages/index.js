import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Product from '../models/Product';
import db from '../utils/db';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../utils/data';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Layout title="Home Page">
      <h1 className="text-xl mt-10 px-4">ประกาศ</h1>
      <img src="../../images/yellowtag1.png" width="300" height="300" />
      <div>
        <Slider {...settings}>
          {data.products_home.map((product) => (
            <ProductItem product={product} key={product.slug}></ProductItem>
          ))}
        </Slider>
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
