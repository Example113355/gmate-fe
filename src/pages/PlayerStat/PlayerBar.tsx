import React, { useState } from 'react';

const PlayerBar = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipX, setTooltipX] = useState(0);
  const [tooltipY, setTooltipY] = useState(0);

  const chartData = [112, 10, 225, 134, 101, 80, 100, 200, 50, 20, 100];
  const labels = ['Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

  const showTooltip = (e) => {
    setTooltipContent(e.target.textContent);
    setTooltipX(e.target.offsetLeft - e.target.clientWidth);
    setTooltipY(e.target.clientHeight + e.target.clientWidth);
    setTooltipOpen(true);
  };

  const hideTooltip = () => {
    setTooltipContent('');
    setTooltipOpen(false);
    setTooltipX(0);
    setTooltipY(0);
  };

  return (
    <>
    <div>
      <div className="max-w-lg mx-auto py-24">
        <div className="border-2 border-solid border-black p-6 rounded-lg bg-white" style={{ width: '600px' }}>
          <div className="md:flex md:justify-between md:items-center">
            <div>
              <h2 className="text-xl text-gray-800 font-bold leading-tight">Tổng thời gian thuê từng tháng</h2>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 mr-2 rounded-full"></div>
                <div className="text-sm text-gray-700">số giờ</div>
              </div>
            </div>
          </div>

          <div className="line my-8 relative"> {/* Apply fixed width for background */}
            {tooltipOpen && (
              <div
                className="p-0 m-0 z-10 shadow-lg rounded-lg absolute h-auto block"
                style={{ bottom: `${tooltipY}px`, left: `${tooltipX}px` }}
              >
                <div className="shadow-xs rounded-lg bg-white p-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>Sales:</div>
                    <div className="font-bold ml-2">
                      <span>{tooltipContent}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Graph Container with Fixed Width */}
            <div className="flex -mx-2 items-end mb-2"> {/* Fixed width for the graph */}
              {chartData.map((data, index) => (
                <div key={index} className="px-2" style={{ width: `${100 / chartData.length}%` }}> {/* Dynamic width for bars */}
                  <div
                    style={{ height: `${data}px` }}
                    className="transition ease-in duration-200 bg-blue-600 hover:bg-blue-400 relative"
                    onMouseEnter={(e) => showTooltip(e)}
                    onMouseLeave={hideTooltip}
                  >
                    <div
                      className="text-center absolute top-0 left-0 right-0 -mt-6 text-gray-800 text-sm"
                      style={{ textAlign: 'center' }}
                    >
                      {data}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="border-t border-gray-400 mx-auto"
              style={{ height: '1px', width: `${100 - (1 / chartData.length) * 100 + 3}%` }}
            ></div>

            <div className="flex -mx-2 items-end">
              {labels.map((data, index) => (
                <div key={index} className="px-2 w-1/6">
                  <div className="bg-red-600 relative">
                    <div
                      className="text-center absolute top-0 left-0 right-0 h-2 -mt-px bg-gray-400 mx-auto"
                      style={{ width: '1px' }}
                    ></div>
                    <div className="text-center absolute top-0 left-0 right-0 mt-3 text-gray-700 text-sm">
                      {data}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PlayerBar;
