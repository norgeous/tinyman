import readableBytes from 'readable-bytes';

import Doughnut from './doughnut';
import Thermometer from './thermometer';
import Of from './Of';

import './CardFront.css';

const CardFront = ({
  header,
  CPU_USAGE,
  CPU_PROCESSES,
  CPU_TEMPERATURE,
  GPU_TEMPERATURE,
  RAM_USAGE,
  RAM_TOTAL,
  GPU_RAM_USAGE,
  GPU_RAM_TOTAL,
  DISK_USAGE,
  DISK_TOTAL,
}) => {

  return (
    <div className="card-front">

      {header}

      <main>

        <div className="row">
          <div className="tile">
            <h3>CPU</h3>
            <Doughnut value={CPU_USAGE} total={100} />
            <div>{CPU_PROCESSES} proc</div>
          </div>
          <div className="tile">
            <h3>CPU</h3>
            <Thermometer value={CPU_TEMPERATURE} />
            <div>{CPU_TEMPERATURE}°C</div>
          </div>
          <div className="tile">
            <h3>GFX</h3>
            <Thermometer value={GPU_TEMPERATURE} />
            <div>{GPU_TEMPERATURE}°C</div>
          </div>
        </div>

        <div className="row">
          <div className="tile">
            <h3>SYS RAM</h3>
            <Doughnut value={RAM_USAGE} total={RAM_TOTAL} />
            <Of numerator={readableBytes(RAM_USAGE, 10)} denominator={readableBytes(RAM_TOTAL, 10)} />
          </div>
          <div className="tile">
            <h3>GFX RAM</h3>
            <Doughnut value={GPU_RAM_USAGE} total={GPU_RAM_TOTAL} />
            <Of numerator={readableBytes(GPU_RAM_USAGE, 10)} denominator={readableBytes(GPU_RAM_TOTAL, 10)} />
          </div>
          <div className="tile">
            <h3>DISK</h3>
            <Doughnut value={DISK_USAGE} total={DISK_TOTAL} />
            <Of numerator={readableBytes(DISK_USAGE, 10)} denominator={readableBytes(DISK_TOTAL, 10)} />
          </div>
        </div>

      </main>
    </div>
  );
};

export default CardFront;
