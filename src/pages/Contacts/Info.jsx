import "./Info.css"

function Info (promps){
  return <div className="container">
     <div className="a"><img src={promps.icon} alt="icon" /></div>
     <div className="a">{promps.nom}</div>
     <div className="a">{promps.information}</div>
  </div>
}

export default Info 