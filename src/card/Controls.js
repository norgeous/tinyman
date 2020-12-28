import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

const Controls = ({endpoint}) => {
  const [controls, setControls] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${endpoint}:9009/list`);
        const json = await res.json();
        console.log(json);
        setControls(json);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [endpoint]);

  if (controls.length === 0) return <>[ no controls ]</>;

  const click = async (control) => {
    try {
      const res = await fetch(`${endpoint}:9009/${control}`);
      const text = await res.text();
      alert(text);
    } catch (e) {
      console.log(e);
    }
  };

  return controls.map((control) => (
    <button key={control} onClick={() => click(control)}>
      {control}
    </button>
  ));
};

export default Controls;
