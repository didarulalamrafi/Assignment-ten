"use client";
import { userSession } from "@/lib/session";
import { favouritePost } from "@/lib/tanant/tanantpost";
import { Button } from "@heroui/react";
import { toast } from "react-toastify";

const AddFavouriteHandle = ({ property }) => {
  const favouriteHandle = async () => {
    const user = await userSession();
    const { _id, ...properties } = property;
    const favProperty = {
      ...properties,
      userId: user?.id,
    };
    const favourite = await favouritePost(favProperty);
    toast.success("Add Favourite Successfully");
    console.log(favourite, "from custom handle");
  };
  return (
    <Button
      variant="secondary"
      className="w-full py-3"
      onClick={favouriteHandle}
    >
      Add To Favourite
    </Button>
  );
};
export default AddFavouriteHandle;
