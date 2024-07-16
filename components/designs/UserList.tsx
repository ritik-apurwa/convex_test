"use client";

import { api } from "@/convex/_generated/api";
import { User } from "@/types";
import { useQuery } from "convex/react";
import Image from "next/image";

const UserList = () => {
  const users = useQuery(api.users.getAllUsers);

  if (users === undefined) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </div>
  );
};
interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      <Image
        src={user.imageUrl}
        alt={user.name}
        width={50}
        height={50}
        className="rounded-full"
      />
      <div>
        <h2 className="text-lg font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
    </div>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default UserList;
