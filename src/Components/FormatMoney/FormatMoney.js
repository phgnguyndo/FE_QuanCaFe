// MoneyFormatter.js
import React from 'react';

function formatMoney(amount) {
  return amount.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}

function MoneyFormatter({ amount }) {
  const formattedAmount = formatMoney(amount);
  return <span>{formattedAmount}</span>;
}

export default MoneyFormatter;
