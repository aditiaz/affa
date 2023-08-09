import { useState, useEffect } from 'react';
import { Table } from './components/Table/Table';
import { FormModal } from './components/Modals/FormModal/FormModal';
import { DeleteModal } from './components/Modals/DeleteModal/DeleteModal';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleModalAdd,
  toggleModalEdit,
  toggleModalDelete,
  fetchUsers,
  addContact,
  updateContact,
} from './users/userSlice';
import './App.css';

function App() {
  const modalAdd = useSelector(state => state.user.modalAdd);
  const modalEdit = useSelector(state => state.user.modalEdit);
  const modalDelete = useSelector(state => state.user.modalDelete);
  // const users = useSelector(state => state.user.allUsers);
  const id = useSelector(state => state.user.activeId);

  // console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [modalDelete, modalEdit]);
  return (
    <>
      <Table modalAdd={toggleModalAdd} modalDelete={toggleModalDelete} />
      <FormModal
        addContact={addContact}
        showModal={toggleModalAdd}
        modal={modalAdd}
        title="Add Data"
      />
      <FormModal
        addContact={userData => dispatch(updateContact({ userData, id }))}
        showModal={toggleModalEdit}
        modal={modalEdit}
        title="Edit Data"
      />

      <DeleteModal showModal={toggleModalDelete} modal={modalDelete} />
    </>
  );
}

export default App;
