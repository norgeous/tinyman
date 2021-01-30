import useEndpoint from '../../hooks/useEndpoint';
import CardFront from './CardFront';
import CardBack from './CardBack';

const PiTinyMan = ({device:{ip}}) => {
  const { status, data } = useEndpoint(`http://${ip}:9009/sysinfo`);

  return (
    <>
      status: {status}
      title: {data?.HOST_NAME || ip}
      {data && <CardFront key="1" header={''} {...data} />}
        {/* // <CardBack key="2" header={''} {...data} ip={ip} /> */}
      {/* ] : [ */}
        {/* // <div key="1" className="card-front">no data</div>, */}
        {/* // <div key="2" className="card-front">no data</div>, */}
      {/* ]} */}
    </>
  );
};

export default PiTinyMan;
