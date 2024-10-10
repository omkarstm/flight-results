import React from 'react';
import SearchedWidget from '@/components/ui/searchedWidget';
import Loader from '@/components/ui/loader';

interface HeadProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const Head: React.FC<HeadProps> = ({ loading,setLoading }) => {
  return (
    <div className="head-section py-7">
      <div className="wrapper">
        <SearchedWidget loading={loading} setLoading={setLoading} />
      </div>
      {loading ? (
        <div className="mt-7">
          <Loader />
        </div>
      ) : (
        <div className="border border-[#E6E8EB] mt-7"></div>
      )}
    </div>
  );
};

export default Head;
