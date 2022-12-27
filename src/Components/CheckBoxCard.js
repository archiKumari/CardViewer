import React, {useState} from "react";

import CardList from './CardList'

function CheckBoxCard() {
    const [checkedBoxes, setcheckedBoxes] = useState([false,false,false]);
    const handleChange= (e) => {
        const position = (e.target.value)-1;
        console.log(position);
        const updatedCheckedState = checkedBoxes.map((item, index) =>
            index == position ? !item : item
        );
        console.log(checkedBoxes);
        setcheckedBoxes(updatedCheckedState);
        console.log(checkedBoxes);
        }

      return (
        <>
          <div className="container-fluid top ">
            <div className="container mt-5  pb-5 pt-5">
              <h3 className="form-head-contact-h3 ">
                Select checkbox to view cards!{" "}
              </h3>
      
              <form>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="selected"
                        value="1"
                        id="1"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Year 1
                      </label>
                    </div>  
                  </div>
                  <div className="col-md-4">
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="selected"
                        value="2"
                        id="2"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                          Year 2
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="selected"
                        value="3"
                        id="3"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                          Year 3
                      </label>
                    </div>
                  </div>
                  
                </div>
      
                <div className="form-floating mt-3 mb-3 text-center">
                  <div>
                    <CardList selected={checkedBoxes}/>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      );
}

export default CheckBoxCard;