import "./Category.css";
import { Dialog } from "@mui/material";
import Inputs from "../../../../Components/input/normalinput/inputs";
import Footer_Dialog from "../../../../Components/Footer_Dialog/Footer_Dialog";
import { useNavigate } from "react-router-dom";
import { CategoryPage } from "../../ServicesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
function Category() {
  const navigate = useNavigate();
  const goToServicesPage = () => {
    navigate("/services");
  };
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const dispatch=useDispatch();
  const handlesubmit=( event)=>{
    event.preventDefault();

    dispatch(CategoryPage({name,type}));

  }
  
  return (
    <Dialog open={open}>
      <div className="add_category ">
        <span>Add Category</span>
        <Inputs placeholder="name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <Inputs placeholder="property" type="text" value={type} on onChange={(e)=>setType(e.target.value)} />
        <div className="d">
          <Footer_Dialog onClick1={goToServicesPage} onClick2={handlesubmit} />
        </div>
      </div>
    </Dialog>
  );
}

export default Category;
