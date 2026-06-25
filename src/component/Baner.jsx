import React from 'react';
import PropertyCard from './PropertyCard';
import { getOwnerlimitdata } from '@/lib/owner/ownerget';

const Baner = async () => {
    const properties = await getOwnerlimitdata();
    const allProperty = properties.data

    return (
        <div className='max-w-7xl mx-auto my-10 px-4'>

            <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-800'>
                Available Homes
            </h1>

            <p className='text-center text-gray-500 mt-2 mb-8'>
                Explore verified properties and find your perfect home easily.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    allProperty?.map(property => (
                        <PropertyCard
                            key={property?._id}
                            property={property}
                        />
                    ))
                }
            </div>

        </div>
    );
};

export default Baner;