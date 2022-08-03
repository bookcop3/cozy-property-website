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
    <from onSubmit={(e) => e.search()} className="">
      <div className="absolute cursor-pointer rounded-xl bg-white px-12 shadow-md">
        <div className="flex h-full justify-center">
          <img
            src="../../images/Search.png"
            className="img2 h-[30px] w-[30px]"
          />
          <input
            type="text"
            aria-label="search"
            placeholder="ค้นหา ชื่อ/ ทำเล /โครงการ"
          />
          <button>
            <Button3 href="/ค้นหา" text3="ค้นหา"></Button3>
          </button>
        </div>
      </div>
    </from>
  );
};

export default function Body() {
  return (
    <div>
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
        <img src="../../images/homeicon.png" className=" h-[150px] w-[150px]" />
        <img
          src="../../images/condoicon.png"
          className=" h-[150px] w-[150px]"
        />
        <img src="../../images/Landicon.png" className=" h-[150px] w-[150px]" />
        <img
          src="../../images/Othericon.png"
          className=" h-[150px] w-[150px]"
        />
      </div>
      <div>
        <a className="text-icon1 font-athiti text-3xl font-semibold">บ้าน</a>
        <a className="text-icon2 font-athiti text-3xl font-semibold">คอนโด</a>
        <a className="text-icon3 font-athiti text-3xl font-semibold">ที่ดิน</a>
        <a className="text-icon4 font-athiti text-3xl font-semibold">อื่นๆ</a>
      </div>
      <div>
        <div className="ADS h-[160px] w-[1400px] bg-amber-200 bg-center">
          <ul className=" text-ADS text-center">ADS</ul>
        </div>
      </div>
    </div>
  );
}
