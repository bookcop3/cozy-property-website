import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import Cookies from 'js-cookie';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import DropdownLink from './DropdownLink';

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const logoutClickHandler = () => {
    Cookies.remove('cart');
    signOut({ callbackUrl: '/login' });
  };
  return (
    <>
      <Head>
        <title>{title ? title + ' - Cozy Property' : 'Cozy Property'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <div className="flex h-15 items-center px-4 justify-between mt-10">
            <Link href="/">
              <a> </a>
            </Link>
            <div className="text-xl ">
              <Link href="/">
                <a className=" p-2">หน้าแรก</a>
              </Link>
              <Link href="/contact">
                <a className="p-2">ติดต่อเรา</a>
              </Link>

              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-blue-600">
                    {session.user.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                    <Menu.Items>
                      <DropdownLink className="dropdown-link" href="/profile">
                        หน้าผู้ใช้งาน
                      </DropdownLink>
                    </Menu.Items>
                    <Menu.Items>
                      <DropdownLink
                        className="dropdown-link"
                        href="/order-history"
                      >
                        ประวัติ
                      </DropdownLink>
                    </Menu.Items>
                    {session.user.isAdmin && (
                      <Menu.Item>
                        <DropdownLink
                          className="dropdown-link"
                          href="/admin/dashboard"
                        >
                          Admin Dashboard
                        </DropdownLink>
                      </Menu.Item>
                    )}
                    <Menu.Items>
                      <a
                        className="dropdown-link"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        ออกจากระบบ
                      </a>
                    </Menu.Items>
                  </Menu.Items>
                </Menu>
              ) : (
                <Link href="/login">
                  <a className="p-2">เข้าสู่ระบบ</a>
                </Link>
              )}
              <Link href="/register">
                <a className="p-2">สมัครสมาชิก</a>
              </Link>
              <Link href="/add_announce">
                <a className="p-2 inline-block px-4 py-1 rounded-xl  bg-yellow-300 shadow-lg shadow-yellow-500/50">
                  ลงประกาศ ฟรี
                </a>
              </Link>
            </div>
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
          <div></div>
        </header>
        <main className="container m-auto mt-20 px-4">{children}</main>
        <footer className="flex h-5 shadow-md">
          <p className="p-10">
            ติดต่อเรา
            <p>cozyproperty.th@gmail.com</p>
            <p>+66</p>
            <img
              src="../../images/contactIcon.png"
              width="170"
              height="170"
              alt="contact"
            />
          </p>
          <p className="p-10">
            เกี่ยวกับเรา
            <p>ลงโฆษณา Banner</p>
            <p>คูมือการใช้งาน</p>
          </p>
          <p className="p-10">
            บทความ/เนื้อหา
            <p>เนื้อหา</p>
            <p>วิธีการลงประกาศ</p>
            <p>About Asset</p>
          </p>
        </footer>
      </div>
    </>
  );
}
