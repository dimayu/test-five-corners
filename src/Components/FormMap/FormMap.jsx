import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import './FormMap.scss';

export const FormMap = () => {
  const hrefImg = "../img/pin.svg";
  
  return (
    <YMaps>
      <div className="map">
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9}}
             width={"100%"}
             height={"450px"}
             modules={['geocode']}
             
        >
          <Placemark defaultGeometry={[55.751574, 37.573856]}
                     options={{
                       iconLayout: "default#image",
                       iconImageSize: [27, 39],
                       iconImageHref: hrefImg
                     }}
                     />
        </Map>
      </div>
    </YMaps>
  );
}