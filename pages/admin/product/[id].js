import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Layout from '../../../components/Layout';
import { getError } from '../../../utils/error';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
export default function AdminProductEditScreen() {
  const { query } = useRouter();
  const productId = query.id;
  const [{ loading, error, loadingUpdate }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/products/${productId}`);
        dispatch({ type: 'FETCH_SUCCESS' });
        setValue('name', data.name);
        setValue('slug', data.slug);
        setValue('price', data.price);
        setValue('image', data.image);
        setValue('category', data.category);
        setValue('brand', data.brand);
        setValue('countInStock', data.countInStock);
        setValue('description', data.description);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, [productId, setValue]);

  const router = useRouter();

  const submitHandler = async ({
    name,
    slug,
    price,
    category,
    image,
    brand,
    countInStock,
    description,
  }) => {
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(`/api/admin/products/${productId}`, {
        name,
        slug,
        price,
        category,
        image,
        brand,
        countInStock,
        description,
      });
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('Product updated successfully');
      router.push('/admin/products');
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  return (
    <Layout title={`Edit Product ${productId}`}>
      <div className="grid md:grid-cols-4 md:gap-5">
        <div>
          <ul>
            <li>
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/orders">Orders</Link>
            </li>
            <li>
              <Link href="/admin/products">
                <a className="font-bold">Products</a>
              </Link>
            </li>
            <li>
              <Link href="/admin/users">Users</Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <form
              className="mx-auto max-w-screen-md"
              onSubmit={handleSubmit(submitHandler)}
            >
              <h1 className="mb-4 text-xl">{`Edit Product ${productId}`}</h1>
              <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="w-full"
                  id="name"
                  autoFocus
                  {...register('name', {
                    required: 'Please enter name',
                  })}
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="slug">Slug</label>
                <input
                  type="text"
                  className="w-full"
                  id="slug"
                  {...register('slug', {
                    required: 'Please enter slug',
                  })}
                />
                {errors.slug && (
                  <div className="text-red-500">{errors.slug.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="product_type">ประเภท</label>
                <input
                  type="text"
                  className="w-full"
                  id="product_type"
                  {...register('product_type', {
                    required: 'Please enter product_type',
                  })}
                />
                {errors.product_type && (
                  <div className="text-red-500">
                    {errors.product_type.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="details">รายละเอียด</label>
                <input
                  type="text"
                  className="w-full"
                  id="details"
                  {...register('details', {
                    required: 'Please enter details',
                  })}
                />
                {errors.details && (
                  <div className="text-red-500">{errors.details.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="address">ที่อยู่</label>
                <input
                  type="text"
                  className="w-full"
                  id="address"
                  {...register('address', {
                    required: 'Please enter address',
                  })}
                />
                {errors.address && (
                  <div className="text-red-500">{errors.address.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="image">รูปภาพ</label>
                <input
                  type="text"
                  className="w-full"
                  id="image"
                  {...register('image', {
                    required: 'Please enter image',
                  })}
                />
                {errors.image && (
                  <div className="text-red-500">{errors.image.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="telephone_number">เบอร์โทร</label>
                <input
                  type="text"
                  className="w-full"
                  id="telephone_number"
                  {...register('telephone_number', {
                    required: 'Please enter telephone_number',
                  })}
                />
                {errors.telephone_number && (
                  <div className="text-red-500">
                    {errors.telephone_number.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="sales_type">ประเภทขาย</label>
                <input
                  type="text"
                  className="w-full"
                  id="sales_type"
                  {...register('sales_type', {
                    required: 'Please enter sales_type',
                  })}
                />
                {errors.sales_type && (
                  <div className="text-red-500">
                    {errors.sales_type.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="price">ราคา</label>
                <input
                  type="text"
                  className="w-full"
                  id="price"
                  {...register('price', {
                    required: 'Please enter price',
                  })}
                />
                {errors.price && (
                  <div className="text-red-500">{errors.price.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="countInStock">countInStock</label>
                <input
                  type="text"
                  className="w-full"
                  id="countInStock"
                  {...register('countInStock', {
                    required: 'Please enter countInStock',
                  })}
                />
                {errors.countInStock && (
                  <div className="text-red-500">
                    {errors.countInStock.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="rating">rating</label>
                <input
                  type="text"
                  className="w-full"
                  id="rating"
                  {...register('rating', {
                    required: 'Please enter rating',
                  })}
                />
                {errors.rating && (
                  <div className="text-red-500">{errors.rating.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="countInStock">numReviews</label>
                <input
                  type="text"
                  className="w-full"
                  id="numReviews"
                  {...register('numReviews', {
                    required: 'Please enter numReviews',
                  })}
                />
                {errors.numReviews && (
                  <div className="text-red-500">
                    {errors.numReviews.message}
                  </div>
                )}
              </div>
              <div className="mb-4">
                <button disabled={loadingUpdate} className="primary-button">
                  {loadingUpdate ? 'Loading' : 'Update'}
                </button>
              </div>
              <div className="mb-4">
                <Link href={`/admin/products`}>Back</Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminProductEditScreen.auth = { adminOnly: true };
