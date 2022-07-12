import React, { useEffect, useState } from 'react';
import { getCoinCurrentPrice, getCoinPrice } from '../api';
import { ICoinPrice, ICoinCurrentPrice } from '../interface/coin';

function CoinPrice(): any {
  const [coinPrice, setCoinPrice] = useState<ICoinPrice>();
  const [coinCurrentPrice, setCoinCurrentPrice] = useState<ICoinCurrentPrice>();

  useEffect(() => {
    getCoinPrice(setCoinPrice, 'bitcoin');
    getCoinCurrentPrice(setCoinCurrentPrice, 'bitcoin');
  }, []);
  return (
    <div>
      <div>{coinPrice?.label}</div>
      <div>
        <h1>최고가</h1>
        <div>{coinPrice?.maxPrice.won}</div>
        <div>{coinPrice ? new Date(coinPrice.maxPrice.atMillis).toString() : ''}</div>
      </div>
      <br />
      <div>
        <h1>최저가</h1>
        <div>{coinPrice?.minPrice.won}</div>
        <div>{coinPrice ? new Date(coinPrice.minPrice.atMillis).toString() : ''}</div>
      </div>
      <br />
      <div>
        <h1>현재 가격</h1>
        <div>{coinCurrentPrice?.price.won}</div>
        <div>{coinCurrentPrice ? new Date(coinCurrentPrice.lastUpdated).toString() : ''}</div>
      </div>
    </div>
  );
}

export default CoinPrice;
