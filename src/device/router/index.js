const Router = ({ device }) => {

  const { ip, type } = device;

  return (
    <div>
      <div>
        {ip}
      </div>
      <div>
        {type}
      </div>
      <div>
        <a href={`http://${ip}`} target="_blank" rel="noreferrer">http</a>
      </div>
    </div>
  );
};

export default Router;
