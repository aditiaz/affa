import React from 'react';
import deleteStyle from './deleteStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../../users/userSlice';
import { activeId } from '../../../users/userSlice';

export const DeleteModal = ({ modal, showModal }) => {
  const id = useSelector(state => state.user.activeId);
  const dispatch = useDispatch();
  return (
    <div hidden={modal} className="wrapper">
      <div className="modal-wrapper">
        <p>Are sure want to delete ?</p>
        <div className="btn-submit-del">
          <button onClick={() => dispatch(deleteContact(id))} className="sub-del" type="submit">
            Ok
          </button>
          <button onClick={() => dispatch(showModal())} className="cancel-del" type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
