import React, { useState } from 'react';
import SkeletonCard from '@/components/ui/skeletonCard';
import flightData from "../flightData.json";
import FlightCard from './FlightCard';
import Sidebar from './SideBar';

interface BodyProps {
  loading: boolean;
}

const Body: React.FC<BodyProps> = ({ loading }) => {
  const [selectedFlight, setSelectedFlight] = useState<any | null>(null);
  const [prevSelectedFlight, setPrevSelectedFlight] = useState<any | null>(null);

  const skeletonCards = Array(4).fill(0);

  const handleCardClick = (flight: any) => {
    if (selectedFlight) {
      if (selectedFlight === flight) {
        setSelectedFlight(null);
      } else {
        setSelectedFlight(null);
        setPrevSelectedFlight(flight);
      }
    } else if (prevSelectedFlight === flight) {
      setSelectedFlight(flight);
    } else {
      setSelectedFlight(flight);
    }
  };

  return (
    <div className={`wrapper ${loading ? 'pt-10' : 'pt-0'}`}>
      {loading ? (
        <>
          {skeletonCards.map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </>
      ) : (
        <div className="w-full relative">
          <p className="text-[#787B80] text-[18px]  mb-3">
            Showing {flightData.flights.length} of {flightData.flights.length} results
          </p>
          {flightData.flights.map((flight, index) => (
            <FlightCard
              key={index}
              flight={flight}
              index={index}
              onClick={() => handleCardClick(flight)}
            />
          ))}

          <Sidebar selectedFlight={selectedFlight} onClose={() => setSelectedFlight(null)} />
        </div>
      )}
    </div>
  );
};

export default Body;
