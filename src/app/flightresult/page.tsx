"use client";

import React, { useEffect, useState } from 'react';
import HeadSection from './component/Head';
import BodySection from './component/Body';
import LoadingModal from '@/components/ui/loadingModal';

const FlightResultPage = () => {
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep === 3) {
      setLoading(false);
      
      setTimeout(() => {
        setCurrentStep(0); 
      }, 1000); 
    }
  }, [currentStep]);

  return (
    <div className="relative min-h-screen">
      <HeadSection loading={loading} setLoading={setLoading} />
      <BodySection loading={loading} />

      {loading && (
        <LoadingModal currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )}
    </div>
  );
};

export default FlightResultPage;
