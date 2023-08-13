import { useEffect } from 'react';
import { Table } from './components/Table/Table';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './users/userSlice';
import './App.css';

function App() {
  const modalEdit = useSelector(state => state.user.modalEdit);
  const modalDelete = useSelector(state => state.user.modalDelete);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [modalDelete, modalEdit]);
  return (
    <>
      <Table />
    </>
  );
}

export default App;
