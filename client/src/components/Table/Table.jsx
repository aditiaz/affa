import React, { useEffect } from 'react';
import table from './table.css';
import { useDispatch, useSelector } from 'react-redux';
import { activeId } from '../../users/userSlice';
import { toggleModalEdit, fetchUsers } from '../../users/userSlice';

export const Table = ({ modalAdd, modalDelete }) => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.allUsers);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className="min-w-[40rem]">
        <button onClick={() => dispatch(modalAdd())} className="btn btn-add">
          Add Data
        </button>
        <table className="w-full  text-center  min-w-max">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td className=" px-7">{index + 1}</td>
                  <td className=" px-16">{user.name}</td>
                  <td className=" px-4">{user.phone}</td>
                  <td className=" px-8">{user.email}</td>
                  <td className=" px-4">{user.address}</td>
                  <td className="px-8 ">
                    <button onClick={() => dispatch(toggleModalEdit(user.id))} className="btn edit">
                      Edit
                    </button>
                    <button onClick={() => dispatch(modalDelete(user.id))} className="btn del">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
