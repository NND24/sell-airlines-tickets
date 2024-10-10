import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import BookingHeader from "../components/Header/BookingHeader";
import Heading from "../components/Heading";

const Seat = () => {
  return (
    <div className='bg-[#f8f8f8]'>
      <Heading title='Chọn chỗ ngồi' description='' keywords='' icon='../../public/favicon.ico' />
      <BookingHeader />

      <div
        className='w-[75%] my-[20px] mx-auto bg-[#fff] flex p-[20px]'
        style={{
          boxShadow: "0 6px 10px rgba(0,0,0,.175)",
        }}
      >
        <div className=''>
          <h3 className='font-bold text-[20px] text-center mb-[10px]'>Xem chú giải</h3>
          <div className='flex gap-2'>
            <div className='flex flex-col items-center'>
              <div className='seat active'></div>
              <p className='text-[13px]'>Chỗ ngồi đã </p>
              <p className='text-[13px]'>chọn</p>
            </div>

            <div className='flex flex-col items-center'>
              <div className='seat'></div>
              <p className='text-[13px]'>Không còn</p>
              <p className='text-[13px]'>trống</p>
            </div>

            <div className='flex flex-col items-center'>
              <div className='seat empty'></div>
              <p className='text-[13px]'>Chỗ ngồi còn</p>
              <p className='text-[13px]'>trống</p>
            </div>

            <div className='flex flex-col items-center'>
              <img alt='' src='https://i.ibb.co/ftwgLCL/exist.png' />
              <p className='text-[13px]'>Lối thoát</p>
              <p className='text-[13px]'>hiểm</p>
            </div>
          </div>
        </div>

        <div className='aircraft'>
          <div className='aircraft-body'>
            <div className='top-left-exists'>
              <img alt='' src='https://i.ibb.co/ftwgLCL/exist.png' />
            </div>
            <div className='top-right-exists'>
              <img alt='' src='https://i.ibb.co/ftwgLCL/exist.png' />
            </div>

            <div className='seats'>
              <div className='seats-triple first-line'>
                <div data-letter='A' className='active seat'></div>
                <div data-letter='B' className='active seat'></div>
                <div data-letter='C' className='active seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='active seat'></div>
                <div className='active seat'></div>
                <div className='active seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='active seat'></div>
                <div className='active seat'></div>
                <div className='active seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='active seat'></div>
                <div className='active seat'></div>
                <div className='active seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='empty seat'></div>
                <div className='empty seat'></div>
                <div className='empty seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='empty seat'></div>
                <div className='empty seat'></div>
                <div className='empty seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple last-line'>
                <div data-letter='A' className='seat empty'></div>
                <div data-letter='B' className='seat empty'></div>
                <div data-letter='C' className='seat empty'></div>
              </div>
            </div>
            <div className='seats'>
              <div className='seats-triple first-line' data-line='1'>
                <div data-letter='D' className='active seat'></div>
                <div data-letter='E' className='active seat'></div>
                <div data-letter='F' className='active seat'></div>
              </div>
              <div className='seats-triple' data-line='2'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='3'>
                <div className='empty seat'></div>
                <div className='empty seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='4'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='5'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='6'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='7'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='8'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='9'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='10'>
                <div className='empty seat'></div>
                <div className='empty seat'></div>
                <div className='empty seat'></div>
              </div>
              <div className='seats-triple' data-line='11'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='12'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='13'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='14'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='15'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='16'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='17'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='18'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='19'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='20'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='21'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='22'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='23'>
                <div className='empty seat'></div>
                <div className='empty seat'></div>
                <div className='empty seat'></div>
              </div>
              <div className='seats-triple' data-line='24'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='25'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='26'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='27'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='28'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='29'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='30'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple' data-line='31'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='seats-triple last-line' data-line='32'>
                <div data-letter='D' className='seat empty'></div>
                <div data-letter='E' className='seat empty'></div>
                <div data-letter='F' className='seat empty'></div>
              </div>
            </div>

            <div className='bottom-left-exists'>
              <img alt='' src='https://i.ibb.co/ftwgLCL/exist.png' />
            </div>
            <div className='bottom-right-exists'>
              <img alt='' src='https://i.ibb.co/ftwgLCL/exist.png' />
            </div>
            <div className='aircraft-top-wing'>
              <div className='exists'>
                <div>
                  <img alt='' src='https://i.ibb.co/ftwgLCL/exist.png' />
                </div>
                <div>
                  <img alt='' src='https://i.ibb.co/ftwgLCL/exist.png' />
                </div>
              </div>
            </div>
            <div className='aircraft-bottom-wing'>
              <div className='exists'>
                <div>
                  <img alt='' src='https://i.ibb.co/ftwgLCL/exist.png' />
                </div>
                <div>
                  <img alt='' src='https://i.ibb.co/ftwgLCL/exist.png' />
                </div>
              </div>
            </div>
            <div className='aircraft-head'>
              <div className='aircraft-head-body'>
                <div className='windows'>
                  <img alt='' src='https://i.ibb.co/F5hp29L/windows.png' />
                </div>
                {/* <div className='front-lavatory'>
                  <img alt='' src='https://i.ibb.co/NVT4SZ1/lavatory.png' />
                </div> */}
              </div>
            </div>
            <div className='aircraft-tail'>
              <div className='aircraft-tail-body'>
                <div className='back-lavatory'>
                  <img alt='' src='https://i.ibb.co/NVT4SZ1/lavatory.png' />

                  <img alt='' src='https://i.ibb.co/NVT4SZ1/lavatory.png' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[75%] my-[20px] mx-auto flex justify-end'>
        <Link
          to='/booking/traveler'
          className='mr-[10px] text-[18px] text-[#222222] hover:text-[#e6b441] bg-[#e6b441] hover:bg-[#fff] rounded-[10px] border-[3px] border-[#e6b441] py-[10px] px-[15px] w-fit font-medium '
        >
          TIẾP TỤC
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Seat;
