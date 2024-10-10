import React, { useState } from 'react';
import SkeletonCard from '@/components/ui/skeletonCard';
import flightData from "../flightData.json";
import FlightCard from './FlightCard';
import Sidebar from './SideBar';
import { useSearchParams } from 'next/navigation';

interface BodyProps {
  loading: boolean;
}

const Body: React.FC<BodyProps> = ({ loading }) => {
  const [selectedFlight, setSelectedFlight] = useState<any | null>(null);
  const [prevSelectedFlight, setPrevSelectedFlight] = useState<any | null>(null);
  const searchParams = useSearchParams();
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');

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

  React.useEffect(() => {
    setFromValue(searchParams.get('from') || '')
    setToValue(searchParams.get('to') || '')
  }, [searchParams.get('from'), searchParams.get('to')])

  const filter = (flight: any) => {
    let matched = true
    flight.segments.forEach((i: any) => {
      if (!i.route.includes(fromValue) || !i.route.includes(toValue)) {
        matched = false
      }
    })
    return matched
  }
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
              Showing {flightData.flights.filter(filter).length} of {flightData.flights.filter(filter).length} results
            </p>
            {flightData.flights.filter(filter).map((flight, index) => (
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
