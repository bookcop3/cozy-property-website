import React from 'react';
import Link from 'next/link';

export default function contact() {
  return (
    <div>
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
          <Link href="/login">
            <a className="p-2">เข้าสู่ระบบ</a>
          </Link>

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
      <div className="ml-5 -mt-16">
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
          <img src="../../images/home2.png" width="50" height="50" alt="home" />
          <a className=" text-4xl mt-2">หน้าแรก/ติดต่อเรา</a>
        </div>

        <div className="flex items-end ">
          <div className="mt-12 ml-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1723.8958896977144!2d100.60300813108661!3d14.076291736332484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f3976f2bcb7%3A0x684b5b7c3833c45b!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4oeC4tOC4quC4suC5gOC4reC5h-C4mSAo4Liq4Liz4LiZ4Lix4LiB4LiH4Liy4LiZ4LmD4Lir4LiN4LmIKQ!5e0!3m2!1sen!2sth!4v1657263275567!5m2!1sen!2sth"
              width="500"
              height="250"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mt-2 text-2xl">Cozy Property</p>
            <p className="mt-2 text-xl">
              ที่อยู่ : เลขที่ 131 อาคารนวัตกรรม 1 ชั้น 3 ห้องเลขที่ INC1-301D{' '}
            </p>
            <p className="text-xl">
              หมู่ที่ 9 ถนนพหลโยธิน ตำบลคลองหนึ่ง อำเภอคลองหลวง{' '}
            </p>
            <p className="text-xl">จังหวัดปทุมธานี 12120</p>
            <p className="mt-2 text-xl">Email: cozy.th@gmail.com</p>
            <p className="mt-2 text-xl mb-2">Tel.+66 81 575 6971</p>
            <img
              src="../../images/contactIcon.png"
              width="170"
              height="170"
              alt="contact"
            />
          </div>

          <div className="mb-36 mx-auto">
            <div className="mt-5 w-full max-w-md px-10 bg-white rounded-2xl shadow-xl">
              <a
                href="contact2"
                className="mt-5
       text-blue-900 hover:text-blue-800"
              >
                <span className=" flex flex-col items-center transition-all duration-200">
                  <img src="../../images/contact1.png" width="50" height="50" />
                  ติดต่อสอบถามหรือแจ้งปัญหาการใช้งานเว็บไซต์
                </span>
              </a>
            </div>
            <div className=" mt-5 w-full max-w-md px-10  bg-white rounded-2xl shadow-xl">
              <a href="#" className="mt-5 text-blue-900 hover:text-blue-800">
                <span className=" flex flex-col items-center transition-all duration-200">
                  <img src="../../images/Annouce.png" width="50" height="50" />
                  ติดต่อสอบถามโฆษณาประชาสัมพันธ์
                  <p>(รัวิวบทความ)</p>
                </span>
              </a>
            </div>
            <div className="mt-5 w-full max-w-md px-10 bg-white rounded-2xl shadow-xl">
              <a href="#" className="mt-5 text-blue-900 hover:text-blue-800">
                <span className=" flex flex-col items-center transition-all duration-200">
                  <img
                    src="../../images/Advertise.png"
                    width="50"
                    height="50"
                  />
                  ติดต่อสอบถามแพ็คเกจการลงประกาศ
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
