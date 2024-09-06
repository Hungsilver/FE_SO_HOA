'use client'

import Icon from "../icon";


export default function HeaderDashboard() {
  return (
    <>
        {/* Title dashboard */}

        <h1 className="text-4xl w-fit mx-10 mt-8">Dashboard</h1>

        {/* Thông tin cơ bản */}

        <div className="flex items-center w-fit mx-14 mt-5">
          <div className="flex items-center">
            <Icon
              idicon = 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              style = 'h-10 w-10'
            />
            <div className="ml-2">
              <p>6000</p>
              <p>Tổng số tiền</p>
            </div>
          </div>
          <div className="ml-14 flex items-center">
            <Icon
              idicon = 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z'
              style = 'h-10 w-10'
            />
            <div className="ml-2">
              <p>8</p>
              <p>Nhân viên</p>
            </div>
          </div>
          <div className="ml-14 flex items-center">
            <Icon
              idicon = 'M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              style = 'h-10 w-10'
            />
            <div className="ml-2">
              <p>0</p>
              <p>Sách đã hoàn tất</p>
            </div>
          </div>
          <div className="ml-14 flex items-center">
            <Icon
              idicon = 'M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3'
              style = 'h-10 w-10'
            />
            <div className="ml-2">
              <p>295</p>
              <p>Tổng số sách</p>
            </div>
          </div>
        </div>
    </>
  );
}
