"use client"
import { deleteOwnerData } from '@/lib/owner/ownerdelete';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const DeleteOwnerProperty = ({ id }) => {
    const router = useRouter()
    const propertyDelete = async () => {
        const property = await deleteOwnerData(id)
        console.log(property, 'from property daelete');
        router.refresh()
        toast.error('Permanently Deleted this Property')

    }
    return (
        <div>
            <Button onClick={propertyDelete} variant="danger-soft">  <FaTrashAlt size={20} /></Button>

        </div>
    );
};

export default DeleteOwnerProperty;