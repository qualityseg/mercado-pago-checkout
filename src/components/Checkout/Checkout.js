import React, { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
    const [paymentData, setPaymentData] = useState({
        title: '',
        price: '',
        quantity: 1,
      });
      

  const handleChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/create_preference', paymentData);
      const data = response.data;
      window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=${data.id}`;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Título do produto"
        value={paymentData.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Preço"
        value={paymentData.price}
        onChange={handleChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantidade"
        value={paymentData.quantity}
        onChange={handleChange}
      />
      <button type="submit">Pagar com Mercado Pago</button>
    </form>
  );
};

export default Checkout;
