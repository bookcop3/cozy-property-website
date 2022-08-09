import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
export default function LoginScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Login">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className=" flex mt-96 ml-20 space-x-2 ">
          <img src="../../images/home2.png" width="50" height="50" alt="home" />
          <a className=" text-4xl mt-2">หน้าแรก/เข้าสู่ระบบ</a>
        </div>

        <div>
          <div
            className="
          flex flex-col 
          bg-white
          shadow-2xl
          
          sm:px-40
          md:px-36
          lg:px-36
          py-8
          rounded-3xl
          max-w-screen
          
        "
          >
            <div className="flex flex-col  items-center justify-center">
              <img
                src="../../images/logo.png"
                width="150"
                height="150"
                alt="logo"
              />
            </div>

            <div className="mt-10">
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="email"
                  className="mb-1 text-xl tracking-wide text-zinc-600"
                >
                  ชื่อผู้ใช้งาน
                </label>
                <div className="relative">
                  <div
                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-900
                  "
                  >
                    <i className="fas fa-user text-blue-500"></i>
                  </div>

                  <input
                    type="email"
                    {...register('email', {
                      required: 'Please enter email',
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                        message: 'Please enter valid email',
                      },
                    })}
                    className="
                    
                    placeholder-gray-900
                    pl-5
                    pr-4
                    rounded-2xl
                    border border-gray-900
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                    placeholder="ระบุชื่อบัญชี หรือ อีเมล"
                    id="email"
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xl tracking-wide text-zinc-600"
              >
                Password
              </label>
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-900
                  "
                >
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  {...register('password', {
                    required: 'Please enter password',
                    minLength: {
                      value: 6,
                      message: 'password is more than 5 chars',
                    },
                  })}
                  className="
                    
                    placeholder-gray-900
                    pl-5
                    pr-4
                    rounded-2xl
                    border border-gray-900
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="**********"
                />
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-yellow-500
                  hover:bg-yellow-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
            >
              <span className="mr-2 text-2xl uppercase">ดำเนินการต่อ </span>
            </button>

            <div className="flex w-full">
              <button
                type="submit"
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span className="mr-2 text-2xl uppercase">สมัครสมาชิก</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke-strokeLinecap="round"
                    stroke-strokeLinejoin="round"
                    stroke-strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="mt-10 flex ml-2 space-x-2 ">
              <button className=" w-full p-2 flex flex-row justify-center gap-2 items-center ">
                <img
                  src="../../images/facebook.png"
                  width="40"
                  height="40"
                  alt="contact"
                />

                <a className="mt-1 text-2xl">Facebook</a>
              </button>
              <button className=" w-full p-2 flex flex-row justify-center gap-2 items-center">
                <img
                  src="../../images/google.png"
                  width="40"
                  height="40"
                  alt="contact"
                />
                <a className="mt-1 text-2xl">Google</a>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
