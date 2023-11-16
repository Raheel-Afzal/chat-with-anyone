import React, { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, getShortName } from "@/lib/utils";
import Image from "next/image";

interface UserAvatarProps {
  name: string;
  image?: string;
  className?: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ image, name, className }) => {
  return (
    <Avatar className={cn(" text-black", className)}>
      {image && (
        <Image
          src={image}
          alt="profile_image"
          height={40}
          width={40}
          className="rounded-full"
        />
      )}
      <AvatarFallback className="dark:bg-white">{getShortName(name)}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
