import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

export default function Register() {
  return (
    <Layout>
      <div>
        <div>
          <img
            src="../../images/logo.png"
            width="250"
            height="250"
            alt="contact"
          />
        </div>
        <div>
          <div className=" flex items-center justify-center mt-28">
            <form className="flex items-center">
              <label form="simple-search" className="sr-only">
                Search
              </label>
              <div className=" relative w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <img
                    src="../../images/Search.png"
                    width="35"
                    height="35"
                    alt="search"
                  />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className=" text-gray-900 text-xl rounded-xl  block w-full pl-14 p-2.5   "
                  placeholder="ค้นหา ชื่อ/ทำเล/โครงการ"
                  required
                />
              </div>
              <div className="flex h-10 items-center px-4 justify-center text-lg">
                <Link href="/เงื่อนไข">
                  <a className="p-4 inline-block px-4 py-1 rounded-xl  bg-yellow-300 shadow-lg shadow-yellow-500/50">
                    เงื่อนไข
                  </a>
                </Link>
                <a className="p-4"></a>
                <Link href="/ใกล้ฉัน">
                  <a className="p-4 inline-block px-4 py-1 rounded-xl  bg-yellow-300 shadow-lg shadow-yellow-500/50">
                    ใกล้ฉัน
                  </a>
                </Link>
                <a className="p-4"></a>
                <Link href="/ประเภทประกาศ">
                  <a className="p-4 inline-block px-4 py-1 rounded-xl  bg-yellow-300 shadow-lg shadow-yellow-500/50">
                    ประเภทประกาศ
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="mt-10 flex ml-20 space-x-2 ">
            <img
              src="../../images/home2.png"
              width="50"
              height="50"
              alt="home"
            />
            <a className="text-4xl mt-2">หน้าแรก/สมัครสมาชิก</a>
          </div>

          <div className="flex items-center">
            <div
              className="
          flex items-center
          flex-col
          bg-white
          shadow-2xl
          px-4
          sm:px-40
          md:px-36
          lg:px-36
          py-8
          rounded-3xl
          w-50
          max-w-screen-sm
          ml-96
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
                <form action="#">
                  <div className="flex flex-col mb-5">
                    <label
                      form="email"
                      className="mb-1 text-xl tracking-wide text-zinc-600"
                    >
                      ชื่อผู้ใช้งาน*
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
                        id="email"
                        type="email"
                        name="email"
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
                        placeholder="ระบุชื่อบัญชี"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-5">
                    <label
                      form="email"
                      className="mb-1 text-xl tracking-wide text-zinc-600"
                    >
                      อีเมล*
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
                        <i className="fas fa-at text-blue-500"></i>
                      </div>

                      <input
                        id="email"
                        type="email"
                        name="email"
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
                        placeholder="อีเมล"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-6">
                    <label
                      form="phonenumber"
                      className="mb-1 text-xl tracking-wide text-zinc-600"
                    >
                      เบอร์โทรศัพท์*
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
                        id="numberphone"
                        type="numberphone"
                        name="numberphone"
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
                        placeholder="เบอร์โทรศัพท์*"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-6">
                    <label
                      form="password"
                      className="mb-1 text-xl tracking-wide text-zinc-600"
                    >
                      รหัสผ่าน*
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
                        name="password"
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
                        placeholder="รหัสผ่าน 6-14 ตัวอักษร"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-6">
                    <label
                      form="conpassword"
                      className="mb-1 text-xl tracking-wide text-zinc-600"
                    >
                      ยืนยันรหัสผ่าน*
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
                        name="password"
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
                        placeholder="ยืนยันรหัสผ่าน"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex items-center cursor-pointer">
                      <input
                        id="checkbox"
                        type="checkbox"
                        className="checkbox text-gray-900 ml-1 w-5 h-5"
                      />
                      <span className="ml-2  text-gray-900">
                        ยอมรับเงื่อนไขข้อตกลง
                        <a className="underline decoration-1">คลิกที่นี่</a>
                        เพื่ออ่าน
                      </span>
                    </div>
                  </div>
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
                      <span className="mr-2 text-2xl uppercase">
                        สมัครสมาชิก
                      </span>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
