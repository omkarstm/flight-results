import { Card } from '@/components/ui/card';
import { Skeleton } from "@/components/ui/skeleton";
import React from 'react';

const SkeletonCard = () => {
    return (
        <Card className='p-4 mb-6'>
            <div className='flex justify-between'>
                <div className='w-4/5'>
                    <div className='flex items-center gap-3'>
                        <Skeleton className="h-[42px] w-[42px] round-2" />
                        <div className='flex flex-col'>
                            <Skeleton className="h-[12px] w-[94px] round-2" />
                            <Skeleton className="h-[12px] w-[114px] round-2 mt-3" />
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-16'>
                        <Skeleton className="h-[42px] w-[42px] round-2" />
                        <div className='flex flex-col'>
                            <Skeleton className="h-[12px] w-[94px] round-2" />
                            <div className='flex items-start gap-3'>
                                <Skeleton className="h-[12px] w-[114px] round-2 mt-3" />
                                <Skeleton className="h-[12px] w-[30px] round-2 mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-3/5 flex gap-[100px]'>
                    <div>
                        <div>
                            <Skeleton className="h-[12px] w-[63px] round-2 mt-2" />
                            <Skeleton className="h-[15px] w-[63px] rounded-lg mt-3" />
                        </div>
                        <div className='mt-16'>
                            <Skeleton className="h-[12px] w-[63px] round-2 mt-2" />
                            <Skeleton className="h-[15px] w-[63px] rounded-lg mt-3" />
                        </div>
                    </div>
                    <div className='flex flex-col justify-end'>
                        <Skeleton className="h-[15px] w-[60px] round-full mt-2" />
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SkeletonCard;
