import { useEffect, useState } from 'react';

import { getCoins } from '../api';

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
    </div>
  );
}

export default Temp;
