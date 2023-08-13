import React, { useEffect, useState } from 'react';
import table from './table.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteModal } from '../Modals/DeleteModal/DeleteModal';
import { FormModal } from '../Modals/FormModal/FormModal';
import {
  toggleModalAdd,
  toggleModalEdit,
  toggleModalDelete,
  addContact,
  updateContact,
  fetchUsers,
} from '../../users/userSlice';

export const Table = () => {
  const dispatch = useDispatch();
  const modalAdd = useSelector(state => state.user.modalAdd);
  const modalDel = useSelector(state => state.user.modalDelete);
  const users = useSelector(state => state.user.allUsers);
  const id = useSelector(state => state.user.activeId);
  const modalEdit = useSelector(state => state.user.modalEdit);
  const [selectedName, setSelectedName] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });
  console.log(formData);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [modalDel, modalEdit]);
  return (
    <>
      <div className="min-w-[29rem] md:min-w-[40rem]">
        <button onClick={() => dispatch(toggleModalAdd())} className="btn btn-add">
          Add Data
        </button>
        <table className="w-full  text-center  ">
          <thead>
            <tr className="text-[10px] lg:text-xl">
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
                <tr key={user.id} className="text-[10px] lg:text-xl">
                  <td className="px-0 md:px-7">{index + 1}</td>
                  <td className="px-10 md:px-16">{user.name}</td>
                  <td className="px-0 md:px-4">{user.phone}</td>
                  <td className="w-[10px]  md:px-4">{user.email}</td>
                  {/* <td className="px-0 bg-red-300 md:px-4">{user.email}</td> */}
                  <td className="px-0 md:px-4">{user.address}</td>
                  <td className="px-0 md:px-8 ">
                    <button
                      onClick={() => {
                        dispatch(toggleModalEdit(user.id));
                        setFormData({
                          name: user.name,
                          phone: user.phone,
                          email: user.email,
                          address: user.address,
                        });
                      }}
                      className="btn edit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        dispatch(toggleModalDelete(user.id));
                        setSelectedName(user.name);
                      }}
                      className="btn del"
                    >
                      Delete
                    </button>
                  </td>
                  <DeleteModal showModal={toggleModalDelete} modal={modalDel} user={selectedName} />
                  <FormModal
                    addContact={userData => dispatch(updateContact({ userData, id }))}
                    showModal={toggleModalEdit}
                    modal={modalEdit}
                    formModalData={formData}
                    title="Edit Data"
                  />
                  <FormModal
                    addContact={addContact}
                    showModal={toggleModalAdd}
                    modal={modalAdd}
                    title="Add Data"
                  />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
