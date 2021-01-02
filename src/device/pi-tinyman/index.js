import useEndpoint from '../../hooks/useEndpoint';
import Header from '../../card/Header';
import Card from '../../card/Card';
import CardFront from './CardFront';
import CardBack from './CardBack';

const PiTinyMan = ({ip}) => {
  const { status, data } = useEndpoint(`http://${ip}:9009/sysinfo`);

  const header = <Header title={data?.HOST_NAME || ip} />;

  return (
    <Card status={status}>
      {data ? [
        <CardFront key="1" header={header} {...data} />,
        <CardBack key="2" header={header} {...data} ip={ip}/>
      ] : [
        <div key="1" className="card-front">{header}no data</div>,
        <div key="2" className="card-front">{header}no data</div>,
      ]}
    </Card>
  );
};

export default PiTinyMan;
