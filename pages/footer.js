import React from 'react';
export default function Footer() {
  return (
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
  );
}
