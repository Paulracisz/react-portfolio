
// stylesheet
import '../stylesheets/contributions.css'
// images
import vegaTouchAppHvac from '../resources/vegatouchcapphvac.jpg'
import trumaAventa from '../resources/trumaAventa.png'
import truTank from '../resources/trutanktransparent.png'
import tanks from '../resources/veagtouchtanks.jpg'

export default function Contributions() {
  return (
      <div className="fold-down-3">
        <div className="experience-grid">
          <div className="lynx-photo">
            <img
              className="truma-photo"
              src={trumaAventa}
              alt="truma aventa portable air conditioner unit"
            ></img>
            <img
              className="truma-photo"
              src={vegaTouchAppHvac}
              alt="vegatouch mira app screenshot of the HVAC page from firefly integrations"
            ></img>
          </div>
          <div className="lynx-description">
            <p className="lynx-text">
              When RV manufacturers began to experience shortages of air
              conditioner units due to supply issues, the Truma Aventa was
              created as a solution. It is a portable roof-mounted air
              conditioner and dehumidifer that quickly became a staple for the
              new and upcoming luxury RV motorhomes. I implemented this new air
              conditioner unit, and its new features into the VegaTouch Mira
              app.
            </p>
          </div>          <div className="lynx-photo">
            <img
              className="truma-photo"
              src={truTank}
              alt="trutank logo and tank graphic"
            ></img>
            <img
              className="truma-photo"
              src={tanks}
              alt="vegatouch mira app screenshot of the tanks from firefly integrations"
            ></img>   
          </div>
          <div className="lynx-description">
            <p className="lynx-text">
             This is the TruTank tank monitoring system. It allows the user to get accurate readings for their RV tanks such as a Fresh Water Tank, Grey Tank, Black Tank and more. Users began to experience issues in the field with their VegaTouch apps when they could not read diagnostic values for their TruTanks such as the strength of the sensor's signal, the capacity of the tank in mililiters, and other important information specific to each tank. I implemented a bug fix that allowed the users to see this data once again, and help diagnose specific issues that might be happening in the event of a sensor failure.

            </p>
          </div>
        </div>
      </div>
  );
}
