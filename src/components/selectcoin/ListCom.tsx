import { useState, useEffect } from 'react';
import axios from 'axios';
// import { CoinListSpace, List, ListCard, ListImg, ListGroup, ListText } from './Styled';

function ListCom(): any {
  const [DB, setDB] = useState<any[]>([]);
  const [To, setTo] = useState(false);
  useEffect(() => {
    axios.get(`/coins/titles`).then((response) => {
      console.log(response.data);
      setDB(response.data);
      setTo(!To);
    });
  }, []);
  console.log(To);
  if (To) {
    return (
      <div>
        {DB[0].label} {To}
      </div>
    );
  }
  return <div>he</div>;
}

export default ListCom;
