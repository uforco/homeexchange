import GoogleMapReact from 'google-map-react';

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contactusmap = () => {
    const defaultProps = {
        center: {
            lat: 23.827255,
            lng: 90.406483
        },
        zoom: 15
    };
  return (
    
        <div>
          <div className=' h-[600px] sm:h-[500px] w-full ' >
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyCvnlRBWD0jbar8_s_zH1sVsWlbO31MbMc" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
                
              <AnyReactComponent
                lat={23.827255}
                lng={90.406483}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>

  );
};

export default Contactusmap;
