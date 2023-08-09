import React, { useState } from 'react';
import formStyle from './formStyle.css';
import { useDispatch } from 'react-redux';

export const FormModal = ({ title, modal, showModal, addContact }) => {
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
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id="name"
          />
          <input
            placeholder="Phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            id="phone"
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
          />
          <input
            placeholder="Address"
            name="address"
            value={formData.address}
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
