import React, { useContext,useState } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import Video from '../components/Video'
import Threed from '../components/3d'


const Mediaview = () => {
    const [manu] = useContext(ManuContext)
    console.log(manu)
    let [view, setView] = useState();
  
    function handleClick(n) {
       setView(n)
      }
 
        return (
            <>
             {Object.keys(manu.api).length !== 0 && (
                 
                 <>
                    {manu.api.exhibits[2].type == "3d" ? <div className="toggleMedia"><button onClick={() => handleClick(0)}>LIVE</button><button onClick={() => handleClick(1)}>3D</button></div> : null}
                        { view == 1 ?
                        <Threed></Threed> 
                        : null}
                            { view == 0 || view == undefined ?
                        <Video manu={manu} />
                        : null}
                 </>
            )}
            </>
        )
}

export default Mediaview