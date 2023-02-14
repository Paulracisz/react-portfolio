
import vegaTouchAppHvac from '../resources/vegatouchcapphvac.jpg'
import trumaAventa from '../resources/trumaAventa.png'

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
          </div>
        </div>
      </div>
  );
}
