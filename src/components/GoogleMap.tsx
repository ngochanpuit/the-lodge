const GoogleMapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401.2650386515429!2d105.08895038500604!3d9.987165519046348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b510ba76e93d%3A0x9287b231e90c2834!2sThe%20Lodge!5e0!3m2!1svi!2s!4v1697802322557!5m2!1svi!2s"
      style={{
        width: '100%',
        height: '400px',
        border: '0',
      }}
      loading="lazy"
    ></iframe>
  );
};

export default GoogleMapComponent;
