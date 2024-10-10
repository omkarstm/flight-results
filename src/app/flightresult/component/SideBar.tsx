import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { LeftIconIcon } from '@/components/icon/Icon';
import { ClockIconIcon } from '@/components/icon/Icon';
import LUFTHANASA2_IMG from "@/assets/images/lufthansa-2.jpg";

interface SidebarProps {
  selectedFlight: string;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedFlight, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (selectedFlight) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedFlight]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed right-0 top-0 h-full w-2/5 p-6  transition-transform duration-500 ease-in-out z-50 transform ${
        selectedFlight ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='bg-white rounded-xl border h-full p-6'>
        <Button variant={"secondary"} onClick={onClose} className='rounded-full p-3 h-9'>
          <LeftIconIcon />
        </Button>
        <h2 className="text-[20px] text-black font-medium py-5 mb-5 border-b">Flight Details</h2>
        <div className='flex justify-between'>
          <div className='w-2/5'>
            <div className='flex items-start gap-2'>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-[12px] h-[12px] rounded-full border border-[#000000]'></div>
                <div className='w-[1px] h-[55px] bg-[#000000]'></div>
              </div>
              <div>
                <p className='text-[#787B80] text-[12px] leading-[12px]'>Sat 28 Sept • 2:15</p>
                <p className='text-[#001F1D] text-sm font-medium mt-2'>DXB • Dubai International Airport</p>
              </div>
            </div>
            <div className='flex items-start gap-2 mt-2'>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-[12px] h-[12px] rounded-full border border-[#000000]'></div>
                <div className='border-l h-[140px] border-dashed border-[#787B80]'></div>
              </div>
              <div>
                <p className='text-[#787B80] text-[12px] leading-[12px]'>Sat 28 Sept • 2:15</p>
                <p className='text-[#001F1D] text-sm font-medium mt-2'>RUH • King Khalid International Airport</p>
                <div className='flex items-center gap-3 mt-10 ms-8'>
                  <ClockIconIcon />
                  <p className='text-sm text-[#787B80]'>Layover 2h 25m</p>
                </div>
              </div>
            </div>
            <div className='flex items-start gap-2 mt-2'>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-[12px] h-[12px] rounded-full border border-[#000000]'></div>
                <div className='w-[1px] h-[55px] bg-[#000000]'></div>
              </div>
              <div>
                <p className='text-[#787B80] text-[12px] leading-[12px]'>Sat 28 Sept • 2:15</p>
                <p className='text-[#001F1D] text-sm font-medium mt-2'>RUH • King Khalid International Airport</p>
              </div>
            </div>
            <div className='flex items-start gap-2 mt-2'>
              <div className='flex flex-col items-center gap-2'>
                <div className='w-[12px] h-[12px] rounded-full border border-[#000000]'></div>
              </div>
              <div>
                <p className='text-[#787B80] text-[12px] leading-[12px]'>Sat 28 Sept • 2:15</p>
                <p className='text-[#001F1D] text-sm font-medium mt-2'>CDG • Paris - Charles de Gualle Airport</p>
              </div>
            </div>
          </div>
          <div className='w-5/12'>
            <div className='flex gap-2 mt-12 h-[250px]'>
              <div className='h-[38px] w-[38px] round border p-1'>
                <img src={LUFTHANASA2_IMG.src} alt="sldi" />
              </div>
              <div>
                <p className='text-[#484A4D] text-[12px]'>Saudi Arabian Airlines • SV553</p>
                <p className='text-[#484A4D] text-[12px]'>Economy • A330</p>
                <p className='text-[#484A4D] text-[12px]'>Flight time 3h 45m</p>
              </div>
            </div>
            <div className='flex gap-2 '>
              <div className='h-[38px] w-[38px] round border p-1'>
                <img src={LUFTHANASA2_IMG.src} alt="sldi" />
              </div>
              <div>
                <p className='text-[#484A4D] text-[12px]'>Saudi Arabian Airlines • SV553</p>
                <p className='text-[#484A4D] text-[12px]'>Economy • A330</p>
                <p className='text-[#484A4D] text-[12px]'>Flight time 3h 45m</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
