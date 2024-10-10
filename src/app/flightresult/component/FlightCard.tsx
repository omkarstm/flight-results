import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EMIRATES_IMG from "@/assets/images/emirates.jpg";
import LUFTHANASA_IMG from "@/assets/images/lufthanas.jpg";
import LUFTHANASA2_IMG from "@/assets/images/lufthansa-2.jpg";
import { StaticImageData } from 'next/image';

interface FlightCardProps {
  flight: any;
  index: number;
  onClick: () => void;
}

// Map image imports to their respective logos
const airlineLogos: { [key: string]: StaticImageData } = {
  "EMIRATES_IMG": EMIRATES_IMG,
  "LUFTHANASA_IMG": LUFTHANASA_IMG,
  "LUFTHANASA2_IMG": LUFTHANASA2_IMG,
};

const truncateStopDetails = (details: string | undefined, maxLength: number) => {
  if (!details) return '';  
  return details.length > maxLength ? details.substring(0, maxLength) + '..' : details;
};

const FlightCard: React.FC<FlightCardProps> = ({ flight, index, onClick }) => {
  return (
    <Card onClick={onClick} className=" mb-4 flex cursor-pointer">
      <div className={`flex flex-col w-10/12 py-4 ps-5 ${index === 0 ? 'gap-6 py-6' : 'gap-0'}`}>
        {flight.segments.map((segment:any, segmentIndex:number) => (
          <div key={segmentIndex} className="mb-4">
            {index !== 0 && (
              <p className="text-[#787B80] text-[14px] font-medium mb-2">
                {segment.date}
              </p>
            )}
            <div className="flex justify-between items-center">
              <div className="flex items-start justify-between w-full">
                <div className="flex w-1/2">
                  <div className={`flex w-[50px] h-[44px] mr-4 p-2 ${index === 0 ? '' : 'border rounded'}`}>
                    <img
                      src={airlineLogos[segment.logo].src}
                      alt={segment.airline}
                      className="w-full h-full mr-4"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="text-[13px] text-[#787B80]  flex items-center gap-1">
                      {segment.airline} <div className="h-[3px] w-[3px] rounded-full bg-[#787B80] "></div> {segment.flightNumber}
                    </h3>
                    <p className="text-[18px]">
                      {segment.departureTime} - {segment.arrivalTime} <span className='text-[#962828F9] text-[12px] absolute ml-1 font-medium'> {segment.arrivalOffset ? `${segment.arrivalOffset}` : ""}</span>
                    </p>
                  </div>
                </div>
                <div className="flex w-1/3  justify-between">
                  <div className="w-2/5">
                    <p className="text-[14px] text-[#787B80]">{segment.route}</p>
                    <p className="text-[18px]">{segment.duration}</p>
                  </div>
                  <div className="flex flex-col justify-end w-2/5">
                    <p className="text-[#787B80] text-[14px]">
                      {truncateStopDetails(segment.stopDetails, 17)}
                    </p>
                    <p className="text-[18px]">{segment.stops}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-end w-2/12 border-l px-5">
        <div className='py-4'>
          <p className='text-[#787B80] text-sm'>from</p>
          <p className="text-lg text-[#000] text-[20px]">
            {flight.price}
          </p>
          <Button className="w-full h-9 mt-2 font-medium">
            Select
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default FlightCard;
