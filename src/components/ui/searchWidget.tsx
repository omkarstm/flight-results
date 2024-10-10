import * as React from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon, ExchangeIconIcon } from "@/components/icon/Icon";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import airports from "../../app/flightresult/airports.json"

interface SearchWidgetProps {
  fromValue: string;
  setFromValue: React.Dispatch<React.SetStateAction<string>>;
  toValue: string;
  setToValue: React.Dispatch<React.SetStateAction<string>>;
  departureDate: Date | undefined;
  setDepartureDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  returnDate: Date | undefined;
  setReturnDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  setInteractingWithWidget: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading: (loading: boolean) => void;
  setShowSearchForm: (show: boolean) => void;  // Prop to handle closing the search form
  handle: (value: boolean) => void
}

const SearchWidget: React.FC<SearchWidgetProps> = ({
  fromValue,
  setFromValue,
  toValue,
  setToValue,
  departureDate,
  setDepartureDate,
  returnDate,
  setReturnDate,
  setInteractingWithWidget,
  setLoading,
  setShowSearchForm, // Destructure the new prop,
}) => {
  const handleSearchClick = () => {
    // Set loading to true and hide the search widget
    if (setLoading) setLoading(true);
    if (setShowSearchForm) setShowSearchForm(false);  // Hide the search widget when the search button is clicked

    // Simulate loading for 5 seconds and reset loading state
    setTimeout(() => {
      if (setLoading) setLoading(false);
    }, 5000);

    window.location.href = `flightresult?from=${fromValue}&to=${toValue}&returnDate=${(returnDate || new Date())?.getTime()}&departureDate=${(departureDate || new Date())?.getTime()}`
  };

  const getPlaceName = (code: string) => {
    if (code) return airports.find((airport) => airport.code === code)?.name
    else return ""
  }

  return (
    <>
      <div
        className="flex gap-4 mt-5"
        onMouseEnter={() => setInteractingWithWidget && setInteractingWithWidget(true)}
        onMouseLeave={() => setInteractingWithWidget && setInteractingWithWidget(false)}
      >
        <div className="flex gap-4 w-3/5">
          <Select onValueChange={(value) => setFromValue(value)}>
            <SelectTrigger isSelected={!!fromValue} className="focus:outline-none">
              <div className="flex flex-col items-start">
                <span className={`text-[#484A4D]-400 ${fromValue ? "text-[12px] text-[#787B80] font-[500]" : ""}`}>Where from?</span>
                {fromValue && <span className="text-black">{fromValue} - {getPlaceName(fromValue)}</span>}
              </div>
            </SelectTrigger>
            <SelectContent>
              {
                airports.filter((i)=> i.code !== toValue).map((i) => (
                  <SelectItem key={i.code} value={i.code}>{i.name}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          <Button variant={"secondary"} className="rounded-full text-dark h-12 px-[15px]">
            <ExchangeIconIcon />
          </Button>
          <Select onValueChange={(value) => setToValue(value)}>
            <SelectTrigger isSelected={!!toValue}>
              <div className="flex flex-col items-start">
                <span className={`text-[#484A4D]-400 ${toValue ? "text-[12px] text-[#787B80] font-[500]" : ""}`}>Where to?</span>
                {toValue && <span className="text-black">{toValue} - {getPlaceName(toValue)}</span>}
              </div>
            </SelectTrigger>
            <SelectContent>
              {
                airports.filter((i)=> i.code !== fromValue).map((i) => (
                  <SelectItem key={i.code} value={i.code}>{i.name}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4 w-2/5">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-3/6 justify-start text-left font-normal py-6 px-[16px]", !departureDate && "text-muted-foreground")}
              >
                <CalendarIcon className={`mr-2 h-4 w-4 text-[#C9CACC] ${departureDate && "mt-[16px]"}`} />
                <div className="flex flex-col items-start">
                  <span className={`text-[#484A4D] text-[400] ${departureDate ? "text-[12px] text-[#787B80] font-[500]" : ""}`}>Departure</span>
                  {departureDate && <span>{format(departureDate, "PPP")}</span>}
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-3/6 justify-start text-left font-normal py-6 px-[16px]", !returnDate && "text-muted-foreground")}
              >
                <CalendarIcon className={`mr-2 h-4 w-4 text-[#C9CACC] ${returnDate && "mt-[16px]"}`} />
                <div className="flex flex-col items-start">
                  <span className={`text-[#484A4D] text-[400]  ${returnDate ? "text-[12px] text-[#787B80] font-[500]" : ""}`}>Return</span>
                  {returnDate && <span>{format(returnDate, "PPP")}</span>}
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex justify-end mt-9">
          <Button disabled={!fromValue || !toValue} className="flex items-center space-x-2 h-10" onClick={handleSearchClick}>
            <SearchIcon />
            <span>Search flights</span>
          </Button>
      </div>
    </>
  );
};

export default SearchWidget;
