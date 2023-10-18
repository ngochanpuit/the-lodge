const GoogleMapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.58492328305985!2d105.08919304076991!3d9.987193617708433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b4650c9b9bdb%3A0x893473f4eb19bee3!2zNjM0IMSQxrDhu51uZyAzIFRow6FuZyAyLCBWxKluaCBM4bqhYywgUuG6oWNoIEdpw6EsIEtpw6puIEdpYW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1697517594318!5m2!1svi!2s"
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
