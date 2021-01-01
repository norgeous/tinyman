const VolumeSlider = ({value, onChange, onRelease}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  
  const handleRelease = (event) => {
    onRelease(event.target.value);
  };

  return (
    <div style={{padding: '0 20px'}}>
      <input 
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        onMouseUp={handleRelease}
        onTouchEnd={handleRelease}
        step="1"
        style={{width: '100%'}}
      />
    </div>
  );
};

export default VolumeSlider;
