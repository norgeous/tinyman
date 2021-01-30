const Router = ({device}) => {

  const {ip, type} = device;

  return (
    <>
      <div>
        {ip}
      </div>
      <div>
        {type}
      </div>
    </>
  );
};

export default Router;
