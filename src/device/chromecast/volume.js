const VolumeSlider = ({value, onChange, onRelease}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  
  const handleRelease = (event) => {
    onRelease(event.target.value);
  };

  return (
    <>
      <input 
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        onMouseUp={handleRelease}
        onTouchEnd={handleRelease}
        step="1"
      />
    </>
  );
};

export default VolumeSlider;
