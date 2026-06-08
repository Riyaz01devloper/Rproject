import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="space-y-4">
        <div>
          <p className="text-gray-500">Name</p>
          <p className="text-lg font-semibold">
            {user?.name}
          </p>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <p className="text-lg font-semibold">
            {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;