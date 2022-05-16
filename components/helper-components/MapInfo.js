import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// key = AIzaSyBkdSJ6VXe_xKIujJc6hLBFAPmDAZciac4
function Map(props){
    return(
        <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map))
const MApInfo =   () => {
  return (
    <div style={{height: "300px" , width: "400px"}}>
    <WrappedMap 
    isMarkerShown

    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBkdSJ6VXe_xKIujJc6hLBFAPmDAZciac4"
    loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
    />
    </div>
  );
};

export default MApInfo;
