import "./Hotel-Page.css";
import Head1 from "../../../Components/Head/Head1";
import s2 from "../../../assets/hotel-page.svg";
import s3 from "./../../../assets/hotel-dashboard.svg";
import { useNavigate } from "react-router-dom";

import {
  Statistics4,
  Statistics2,
  Statistics3,
  Statistics1,
  Portfolio,
} from "../../../Components";
const Hotel_Page = () => {
  // Define an array of portfolio items
  const portfolioItems = [
    s2, // First portfolio item
    s2, // Second portfolio item
    // Add more items as needed
  ];
  let navigate = useNavigate();

  const goToAddHotel = () => {
    navigate("/add-room");
  };
  const goToCarRentalPage = () => {
    navigate("");
  };
  return (
    <div>
      <Head1
        image={s3}
        Title="Hotels Dashboard"
        subTitle="Here’s what’s going on at your business right now"
        titleButton1="Add Room"
        onClickNavigation={goToAddHotel}
      />
      <Portfolio images={portfolioItems} onClickNav={goToCarRentalPage} />
      <div className="statistics">
        <Statistics1
          series1={10}
          series2={20}
          series3={30}
          series4={40}
          series5={50}
          series6={60}
          px1={2020}
          px2={2021}
          px3={2022}
          px4={2023}
          px5={2024}
          px6={2025}
        />
        <Statistics2
          value1={400}
          value2={200}
          value3={300}
          value4={500}
          label1={"Group A"}
          label2={"Group B"}
          label3={"Group C"}
          label4={"Group D"}
        />
        <Statistics3
          a1={2}
          a2={3}
          a3={4}
          a4={1}
          a5={2}
          b1={4}
          b2={4}
          b3={2}
          b4={1}
          b5={2}
          c1={5}
          c2={6}
          c3={3}
          c4={7}
          c5={1}
        />
        <Statistics4
          uv1={-15.69}
          uv2={-20.63}
          uv3={89.22}
          uv4={190.67}
          uv5={286.69}
          uv6={76.63}
          uv7={31.47}
        />
      </div>
    </div>
  );
};

export default Hotel_Page;
