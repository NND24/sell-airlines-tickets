import { useState } from "react";
import { BiUser } from "react-icons/bi";
import { FaSortUp } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

const BookingHeader = () => {
  const [user, setUser] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <>
      <header className='w-full relative'>
        <div className='m-auto relative h-[50px] z-[1000] bg-white'>
          <div className='w-[95%] h-[50px] flex items-center justify-between p-3'>
            <div className='flex items-center gap-[20px]'>
              <Link
                to='/'
                className={`text-[25px] leading-none font-Poppins font-bold drop-shadow-[1px_1px_1px_#000] text-[#007390] pb-[6px]`}
              >
                PTIT Airlines
              </Link>
            </div>

            {user ? (
              <div className='flex items-center gap-3'>
                <div className='relative ml-4'>
                  <img
                    src={user?.avatar?.url ? user?.avatar?.url : "../../public/defaultAvatar.png"}
                    alt='avatar'
                    className='w-[30px] h-[30px] object-cover rounded-full cursor-pointer'
                    onClick={() => setOpenModal(!openModal)}
                  />

                  {openModal && (
                    <>
                      <FaSortUp className='absolute top-[32px] left-[8px]' fill='#005a8c' />
                      <ul
                        className='absolute top-[39px] right-[-50px] w-[220px] sm:w-[250px] py-1 bg-[#1a191f] flex flex-col'
                        style={{
                          borderTopColor: "#005a8c",
                          borderTopWidth: "3px",
                          boxShadow: "inset 0 0 70px rgba(0, 0, 0, .3), 0 0 20px rgba(0, 0, 0, .5)",
                        }}
                      >
                        <Link
                          to={`/trang-ca-nhan`}
                          className='text-[16px] font-Poppins font-medium text-[#e0e0e0] drop-shadow-[1px_1px_1px_#000] hover:text-[#005a8c] hover:border-l-[3px] hover:border-[#005a8c] p-2 flex items-center gap-2 hover:bg-[#96969633]'
                        >
                          <RiUserLine />
                          <span> Tài khoản của tôi</span>
                        </Link>
                        <div className='text-[16px] font-Poppins font-medium text-[#e0e0e0] drop-shadow-[1px_1px_1px_#000] hover:text-[#005a8c] hover:border-l-[3px] hover:border-[#005a8c] p-2 flex items-center gap-2 hover:bg-[#96969633] cursor-pointer'>
                          <FaArrowRightFromBracket />
                          <span>Đăng xuất</span>
                        </div>
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className='flex items-center gap-1'>
                <BiUser
                  className='mx-4 text-black hover:text-[#005a8c] cursor-pointer'
                  size={30}
                  onClick={() => {
                    setOpenSignUp(false);
                    setOpenLogin(!openLogin);
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <div className='z-[1000] text-[#222] bg-[#f5edd0] border-y-[1px] border-[#d0dad2]'>
          <div className='w-[95%]  m-auto relative'>
            <div className='flex py-[10px]'>
              <div className='border-r-[1px] border-[#3f3f3f] px-[25px] flex flex-col'>
                <div className='flex flex-row'>
                  <span className='text-[22px] font-bold'>HAN</span>
                  <div className='flex flex-row gap-1 items-center mx-[15px] justify-center h-[2rem] w-[95px]'>
                    <div>.......................</div>
                    <MdOutlineFlightTakeoff
                      className='text-[12px]'
                      style={{
                        transform: "translateY(4px)",
                      }}
                    />
                  </div>
                  <span className='text-[22px] font-bold'>SGN</span>
                </div>

                <div className='flex flex-row justify-between'>
                  <span className='text-[14px]'>Hà Nội</span>
                  <span className='text-[14px]'>TP. Hồ Chí Minh</span>
                </div>
              </div>

              <div className='border-r-[1px] border-[#3f3f3f] px-[25px] flex flex-col'>
                <span className='text-[18px] text-[#383838] font-bold'>Chuyến đi</span>
                <span className='text-[18px] text-[#383838] font-bold'>Th 5, 10 thg 10</span>
              </div>

              <div className='px-[25px] flex flex-col'>
                <span className='text-[18px] text-[#383838] font-bold'>Hành khách</span>
                <div className='text-[18px] text-[#383838] font-bold flex items-center gap-1'>
                  <span>1</span>
                  <BsFillPersonFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default BookingHeader;
