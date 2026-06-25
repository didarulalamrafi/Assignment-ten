"use client"
import { deleteUserData } from '@/lib/admin/deleteadmin';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { FaTrashAlt } from 'react-icons/fa';

const DeleteUsers = ({ id }) => {
    const router = useRouter()
    const propertyDelete = async () => {
        const users = await deleteUserData(id)
        console.log(users, 'from property daelete');
        router.refresh()
        toast.error('Permanently Deleted this User')

    }
    return (
        <div>
            <Button onClick={propertyDelete} variant="danger-soft">  <FaTrashAlt size={20} /></Button>

        </div>
    );
};

export default DeleteUsers;