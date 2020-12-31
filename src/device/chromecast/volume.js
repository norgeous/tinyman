const VolumeSlider = ({value, onChange}) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input 
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={handleChange}
      step="1"
    />
  );
};

export default VolumeSlider;
