import React, { useState } from 'react';
import formStyle from './formStyle.css';
import { useDispatch } from 'react-redux';

export const FormModal = ({
  title,
  modal,
  showModal,
  addContact,
  formModalData = {
    name: '',
    phone: '',
    email: '',
    address: '',
  },
}) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(formData));
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div hidden={modal} className="wrapper">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="  form-add" action="">
          <p>{title}</p>
          <input
            placeholder={title === 'Edit Data' ? formModalData.name : 'Name'}
            type="text"
            value={formData.name}
            name="name"
            onChange={handleChange}
            id="name"
          />
          <input
            placeholder={title === 'Edit Data' ? formModalData.phone : 'Phone'}
            type="text"
            value={formData.phone}
            name="phone"
            onChange={handleChange}
            id="phone"
            pattern="[0-9]*"
          />
          <input
            placeholder={title === 'Edit Data' ? formModalData.email : 'Email'}
            value={formData.email}
            name="email"
            type="email"
            onChange={handleChange}
            id="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
            title="Enter a valid email address"
          />
          <input
            placeholder={title === 'Edit Data' ? formModalData.address : 'Address'}
            value={formData.address}
            name="address"
            onChange={handleChange}
            id="addres"
          />
          <div className="btn-submit">
            <button className="sub" type="submit">
              Submit
            </button>
            <button onClick={() => dispatch(showModal())} className="cancel" type="button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
