import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

//defined constants
const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {

        const markers = eventData.map(ev => {
            if(ev.categories[0] === NATURAL_EVENT_WILDFIRE) {
                return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
            }
            return null
        })

    return (
        <div className="map">
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyCdOvZRSqV3yNi_hV6k5O8AnJJXSsRzJW0'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
