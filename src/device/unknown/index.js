import { DateTime } from 'luxon';

const Unknown = ({device}) => {
  const { ip, type, seen } = device;

  return (
    <>
      <div>
        {ip}
      </div>
      <div>
        {type}
      </div>
      <div>
        (last seen {DateTime.fromMillis(seen).toRelative()})
      </div>
    </>
  );
};

export default Unknown;
