import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchUnits } from "../features/unitSlice";

const Pricing = () => {
  const dispatch = useDispatch();
  const [units, setUnits] = useState([]);
  const [climate, setClimate] = useState([]);
  const [nonClimate, setNonClimate] = useState([]);
  let temp = [];
  let temClimate = [];

  useEffect(() => {
    dispatch(fetchUnits()).then((res) => {
      setUnits(res.payload);
    });
    units.map(unit => {
      if (unit.climate) {
        temClimate.push(unit)
      }
      else {
        temp.push(unit)
      }
    })
    setClimate(temClimate);
    setNonClimate(temp);
    temp = [];
    temClimate = [];
  }, [dispatch, climate, nonClimate, units]);

  return (
    <div id="pricing">
      {/* {units.length > 0 ? units.map((unit) => (
        <div key={unit.id} className={unit.climate ? "pricing-card climate" : "pricing-card nonclimate"} >
          {unit.climate ? <h1>{unit.length} x {unit.width} Climate Controlled</h1> : <h1>{unit.length} x {unit.width} Non-Climate Controlled</h1>}
          < h2 > ${unit.price}</h2>
        </div >
      )) : <h1>Loading...</h1>} */}
      <div id="climate">
        <h1>Climate Controlled</h1>
        {climate.length > 0 ? climate.map(unit => {
          return (
            <div key={unit.id} className="pricing-card climate" >
              <h1>{unit.length} x {unit.width} Climate Controlled</h1>
              <h2>${unit.price}</h2>
            </div>
          )
        }) : <h1>Loading...</h1>}
      </div>
      <div id="non-climate">
        <h1>Non-Climate Controlled</h1>
        {nonClimate.length > 0 ? nonClimate.map(unit =>
          <div key={unit.id} className="pricing-card nonclimate" >
            <h1>{unit.length} x {unit.width} Non-Climate Controlled</h1>
            <h2>${unit.price}</h2>
          </div>
        ) : <h1>Loading...</h1>}
      </div>
    </div >
  )
}

export default Pricing