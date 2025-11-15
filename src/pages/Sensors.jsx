function Sensors() {
  return (
    <div style={{ width: '100%', height: '100%' }}>  {/* Changed from 100vh to 100% */}
      <iframe
        src="https://michael-phillips.github.io/sensor-dashboard/"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="Sensor Dashboard"
      />
    </div>
  );
}

export default Sensors;
