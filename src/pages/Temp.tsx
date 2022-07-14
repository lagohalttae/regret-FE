import { useEffect, useState } from 'react';

import { getCoins } from '../api';

import Products from '../productData/products.json';

interface ICoinInfo {
  coinId: string;
  label: string;
  imageUrl: string;
}

function Temp(): any {
  const [coinList, setCoinList] = useState<ICoinInfo[]>([]);

  useEffect(() => {
    getCoins(setCoinList);
  }, []);

  return (
    <div>
      <div>
        {coinList.map((item) => {
          return <div key={item.coinId}>{item.label}</div>;
        })}
      </div>

      <div>
        {Products.products.map((item) => {
          return <img src={item.image} alt=" " height={300} />;
        })}
      </div>

      <div>
        {Products.products.map((item) => {
          return <img src={item.imageWhite} alt=" " height={300} />;
        })}
      </div>
    </div>
  );
}

export default Temp;
