import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
/*import Link from 'next/link';*/
import Cookies from 'js-cookie';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Menu } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import DropdownLink from './DropdownLink';

const Button = (props) => (
  <li className="rounded-xl px-2 py-2 text-base text-black hover:bg-gray-300 ">
    <a href={props.href}>{props.text}</a>
  </li>
);

const Button1 = (props) => (
  <li className="text-blck justify-end rounded-2xl border-b-4 border-[#FBC02D] bg-[#FFD831] px-3 py-2 hover:border-[#FFD54F] hover:bg-[#FFEE58]">
    <a href={props.href}>{props.text1}</a>
  </li>
);

const Button2 = (props) => (
  <li className="button rounded-xl bg-[#FFD831] px-3 py-3 text-base text-black hover:bg-gray-300">
    <a href={props.href}>{props.text2}</a>
  </li>
);

const Button3 = (props) => (
  <li
    className="search1 h-12 rounded-xl bg-[#ffccbc] px-6 py-3 font-athiti font-semibold text-black hover:bg-gray-300"
    type="submit"
  >
    <a href={props.href}>{props.text3}</a>
  </li>
);

const SearchFrom = () => {
  return (
    <form onSubmit={(e) => e.search()} className="">
      <div>
        <div className="search">
          <div className="relative w-96">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <img
                src="../../images/Search.png"
                width="30"
                height="30"
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
          <button className="button1">
            <Button3 href="/ค้นหา" text3="ค้นหา"></Button3>
          </button>
        </div>
      </div>
    </form>
  );
};

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

      <div>
        <header className="w-full md:h-[440px]">
          <img src="../../images/cocyH.jpg" />
        </header>
        <div className="absolute inset-0 h-[360px] w-full bg-neutral-100/50">
          <div>
            <ul className=" flex justify-end space-x-5 px-2 py-2 font-athiti font-semibold">
              <Button href="/" text="หน้าแรก"></Button>
              <Button href="/contact" text="ติดต่อเรา"></Button>

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
                <Button href="/login" text="เข้าสู่ระบบ"></Button>
              )}
              <Button href="/register" text="สมัครสมาชิก"></Button>
              <ul>
                <Button1 href="/add_announce" text1="ลงประกาศ ฟรี"></Button1>
              </ul>
            </ul>
          </div>
        </div>
        <div className="img">
          <img src="../../images/C ZY.png" className="h-[155px] w-[355px]" />
        </div>
        <div className="box-text">
          <div className=" flex justify-center space-x-4 px-2 py-2 font-athiti text-3xl uppercase tracking-wide">
            <ul className="rounded-3xl rounded-tr-full rounded-br-full rounded-tl-full rounded-bl-full border-b-4 border-[#FFE082] bg-[#FFFFFF] px-20 py-3 font-medium">
              เว็บประกาศซื้อ ขาย เช่า อสังหาริมทรัพย์
            </ul>
          </div>
          <div className="search">
            <span>
              <SearchFrom />
            </span>
          </div>
        </div>
        <div>
          <ul className="flex space-x-20 font-athiti font-semibold ">
            <Button2 href="/เงื่อนไข" text2="เงื่อนไข"></Button2>
            <Button2 href="/ใกล้ฉัน" text2="ใกล้ฉัน"></Button2>
          </ul>
        </div>

        <div className="item-center icon absolute flex space-x-36">
          <img
            src="../../images/home icon.png"
            className=" h-[150px] w-[150px]"
          />
          <img
            src="../../images/condo icon.png"
            className=" h-[150px] w-[150px]"
          />
          <img
            src="../../images/Land icon.png"
            className=" h-[150px] w-[150px]"
          />
          <img
            src="../../images/Other icon.png"
            className=" h-[150px] w-[150px]"
          />
        </div>
        <div>
          <a className="text-icon1 font-athiti text-3xl font-semibold">บ้าน</a>
          <a className="text-icon2 font-athiti text-3xl font-semibold">คอนโด</a>
          <a className="text-icon3 font-athiti text-3xl font-semibold">
            ที่ดิน
          </a>
          <a className="text-icon4 font-athiti text-3xl font-semibold">อื่นๆ</a>
        </div>
        <main className="container m-auto mt-20 px-4">{children}</main>
      </div>
    </>
  );
}
