import React, { useEffect } from 'react';
import { KiteIcon, TickIcon } from '../icon/Icon';
import "@/assets/css/kite-animation.css";  // Import the CSS file for animation

// Define the types for the props
interface LoadingModalProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ currentStep, setCurrentStep }) => {
    useEffect(() => {
        // Timers to simulate each loading step completing after a delay
        if (currentStep < 3) {
            const timer = setTimeout(() => {
                setCurrentStep(prevStep => prevStep + 1);
            }, 2000); // 2 seconds per step (modify as needed)

            return () => clearTimeout(timer); // Cleanup timer
        }
    }, [currentStep, setCurrentStep]);  // Include setCurrentStep in the dependency array

    return (
        <div className="fixed inset-x-0 top-[220px] flex justify-center z-50">
            <div className="bg-white shadow-sm p-6 rounded-lg border border-[#E6E8EB] w-[300px]">
                {/* Kite with Takeoff/Landing Animation */}
                <div className="kite-animation relative">
                    <KiteIcon className="mx-auto kite-animated" />  
                </div>
                
                <div className='flex gap-3'>
                    <ul>
                        <li className='flex items-center h-10'>
                            <div className='w-[40px]'>
                                {currentStep >= 1 ? (
                                    <TickIcon />
                                ) : (
                                    <div className='circular-loader'></div>
                                )}
                            </div>
                            <p className={`text-[18px] ${currentStep < 1 ? 'text-[#C9CACC]' : currentStep === 1 ? 'text-[#787B80]' : 'text-[#787B80]'}`}>
                                Searching 400+ flights
                            </p>
                        </li>
                        <li className='flex items-center h-10'>
                            <div className='w-[40px]'>
                                {currentStep >= 2 ? (
                                   <TickIcon />
                                ) : (
                                    currentStep >= 1 && <div className='circular-loader'></div>
                                )}
                            </div>
                            <p className={`text-[18px] ${currentStep < 2 ? 'text-[#C9CACC]' : currentStep === 2 ? 'text-[#787B80]' : 'text-[#787B80]'}`}>
                                Attaching company rules
                            </p>
                        </li>
                        <li className='flex items-center h-10'>
                            <div className='w-[40px]'>
                                {currentStep >= 3 ? (
                                   <TickIcon />
                                ) : (
                                    currentStep >= 2 && <div className='circular-loader'></div>
                                )}
                            </div>
                            <p className={`text-[18px] ${currentStep < 3 ? 'text-[#C9CACC]' : currentStep === 3 ? 'text-[#787B80]' : 'text-[#787B80]'}`}>
                                Serving best results
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LoadingModal;
