import React, { useState } from "react";
import UserForm from "./UserForm";

const UserList = ({ users, onEdit, onDelete }) => {
  const [editUser, setEditUser] = useState(null);

  const handleEdit = (user) => {
    setEditUser(user);
  };

  const handleCancel = () => {
    setEditUser(null);
  };

  const handleSubmit = (data) => {
    onEdit(data);
    setEditUser(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg w-[60%] shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Daftar Siswa</h2>
      <div className="flex justify-center">
      {editUser ? (
        <UserForm onSubmit={handleSubmit} initialData={editUser} onCancel={handleCancel} />
      ) : (
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">NISN</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Kelas</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.nisn} className="border-b text-center">
                <td className="px-4 py-2">{user.nisn}</td>
                <td className="px-4 py-2">{user.nama}</td>
                <td className="px-4 py-2">{user.kelas}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleEdit(user)} className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <button onClick={() => onDelete(user.nisn)} className="text-red-500 hover:underline ml-4">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </div>
    </div>
  );
};

export default UserList;
