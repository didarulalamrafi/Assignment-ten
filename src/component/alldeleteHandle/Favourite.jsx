"use client"

import { deleteFavouriteData } from '@/lib/tanant/tanantdelete';
import { useRouter } from 'next/navigation';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const FavouriteDelete = ({ id }) => {
    const router = useRouter()
    const HandleDelete = async () => {
        const deletes = await deleteFavouriteData(id)
        console.log(deletes, 'from fortite dleete');
        router.refresh()
        toast.error('Permanently Deleted Favourite')
    }
    return (
        <div>
            <button onClick={HandleDelete}><FaTrash size={20} color='red' /></button>
        </div>
    );
};

export default FavouriteDelete;
