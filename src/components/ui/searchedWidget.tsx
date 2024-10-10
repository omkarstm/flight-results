import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CrossIcon, SearchIcon } from "@/components/icon/Icon";
import SearchWidget from '@/components/ui/searchWidget';
import { Card } from './card';
import { useSearchParams } from 'next/navigation';
import airports from "../../app/flightresult/airports.json"
import moment from 'moment';

interface SearchedWidgetProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const SearchedWidget: React.FC<SearchedWidgetProps> = ({ setLoading }) => {
  const searchParams = useSearchParams();
  const [showSearchForm, setShowSearchForm] = useState<boolean>(false);
  const [interactingWithWidget, setInteractingWithWidget] = useState<boolean>(false);
  // State for search widget
  const [fromValue, setFromValue] = useState<string>('');
  const [toValue, setToValue] = useState<string>('');
  const [departureDate, setDepartureDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);

  // Ref for the entire form and widget to handle clicks outside
  const formRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setFromValue(searchParams.get('from') || '')
    setToValue(searchParams.get('to') || '')
    setReturnDate(new Date(Number(searchParams.get('returnDate'))))
    setDepartureDate(new Date(Number(searchParams.get('departureDate'))));
  }, [])

  const getPlaceName = (code: string) => {
    if (code) return airports.find((airport) => airport.code === code)?.name
    else return ""
  }

  // Close the form if clicking outside, but don't close if interacting with the widget
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current &&
        !formRef.current.contains(event.target as Node) &&
        !interactingWithWidget
      ) {
        setShowSearchForm(false);  // Close the form if the click is outside and not interacting
      }
    };

    if (showSearchForm) {
      document.addEventListener('mousedown', handleClickOutside);  // Add listener when form is open
    } else {
      document.removeEventListener('mousedown', handleClickOutside);  // Remove listener when form is closed
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);  // Clean up on unmount
    };
  }, [showSearchForm, interactingWithWidget]);

  const handle = (value: boolean) => {
    console.log("Intracting", value);
  }

  return (

    <div className="flex justify-between items-center">
      {/* Displayed search widget info */}
      <div className="searched-widget border border-[#E6E8EB] rounded-full p-2 px-4 w-fit flex items-center gap-5 cursor-pointer" onClick={() => setShowSearchForm(true)}>
        <div className="flex text-[16px] gap-1 border-r pe-5 border-[#E6E8EB]">
          <p className="font-medium">{fromValue}</p>
          <p className="font-[400] text-[#787B80] w-fit truncate">{getPlaceName(fromValue)}</p>
        </div>

        <div className="flex text-[16px] gap-1 border-r pe-5 border-[#E6E8EB]">
          <p className="font-medium">{toValue}</p>
          <p className="font-[400] text-[#787B80] w-fit truncate">{getPlaceName(toValue)}</p>
        </div>

        <div className="flex text-[16px] gap-1 border-r pe-5 border-[#E6E8EB]">
          <p className="font-medium w-fit truncate">{moment(departureDate).format('MMM D')} - {moment(returnDate).format('MMM D')}</p>
        </div>

        {/* Button to open the search form */}
        <Button variant={"secondary"} className="rounded-full text-dark px-[8px] bg-[#E5EBEB]" >
          <SearchIcon fill='#003E39' />
        </Button>
      </div>

      {/* Button to close the form */}
      <Button variant={"secondary"} className="rounded-full text-dark h-10 p-[8px]" onClick={() => setShowSearchForm(false)}>
     <CrossIcon />
      </Button>

      {/* Search form */}
      <div
        ref={formRef}  // Attach ref to the form container
        className={`fixed left-0 right-0 top-0 w-full bg-white transition-transform duration-500 ease-in-out z-50 ${showSearchForm ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <Card className="pb-6 pt-14">
          <div className="wrapper">
            {/* Pass the state and functions to SearchWidget */}
            <SearchWidget
              fromValue={fromValue}
              setFromValue={setFromValue}
              toValue={toValue}
              setToValue={setToValue}
              departureDate={departureDate}
              setDepartureDate={setDepartureDate}
              returnDate={returnDate}
              setReturnDate={setReturnDate}
              setInteractingWithWidget={setInteractingWithWidget} // Pass prop to control interaction state
              setLoading={setLoading}
              setShowSearchForm={setShowSearchForm} // Pass to handle hiding form
              handle={handle}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SearchedWidget;
