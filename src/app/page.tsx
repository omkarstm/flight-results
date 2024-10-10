// Home.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as React from "react";
import "@/assets/css/search.css";
import SearchWidget from "@/components/ui/searchWidget";

export default function Home() {
  const [fromValue, setFromValue] = React.useState<string>("");
  const [toValue, setToValue] = React.useState<string>("");

  const [departureDate, setDepartureDate] = React.useState<Date | undefined>();
  const [returnDate, setReturnDate] = React.useState<Date | undefined>();

  return (
    <>
      <div className="search-page">
        <div className="wrapper h-screen">
          <div className="card-container">
            <div className="head-section">
              <div className="heading-container">
                <h1 className="text-[36px] font-[400]">Good afternoon, Brian</h1>
              </div>
            </div>
            <Card className="p-5">
              <Button variant={"secondary"}>Flights</Button>
              <SearchWidget
                fromValue={fromValue}
                setFromValue={setFromValue}
                toValue={toValue}
                setToValue={setToValue}
                departureDate={departureDate}
                setDepartureDate={setDepartureDate}
                returnDate={returnDate}
                setReturnDate={setReturnDate} setInteractingWithWidget={function (): void {
                  throw new Error("Function not implemented.");
                }} setLoading={function (): void {
                  throw new Error("Function not implemented.");
                }} setShowSearchForm={function (): void {
                  throw new Error("Function not implemented.");
                }} handle={function (): void {
                  throw new Error("Function not implemented.");
                }} />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
