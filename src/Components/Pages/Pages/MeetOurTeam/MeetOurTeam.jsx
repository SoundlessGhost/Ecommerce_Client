import { Helmet } from "react-helmet-async";
import AboutUsParallax from "../AboutUs/AboutUsParallax/AboutUsParallax";
import DEVELOPER from "../../../../assets/shahed.jpg";
import abir from "../../../../assets/abir.jpg";
const MeetOurTeam = () => {
  return (
    <div>
      <Helmet>
        <title>Snake Eye || MeetOurTeam</title>
      </Helmet>
      <AboutUsParallax></AboutUsParallax>
      <div className="flex justify-center items-center px-10 py-20 meetTeamContainer">
        <div className="image-container">
          <img
            className="w-[350px]  rounded-md h-[500px]"
            src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNlb3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="text-center mt-3">
            <h1>Mario Amadeo</h1>
            <small>
              <p className=" text-gray-400 ">Ceo</p>
            </small>
          </div>
        </div>
        <div className="image-container">
          <img
            className="w-[400px] rounded-md  mx-20 h-[500px]"
            src={DEVELOPER}
            alt=""
          />
          <div className="text-center mt-3">
            <h1>Shahed Abid Darpon</h1>
            <small>
              <p className=" text-gray-400 ">Developer & Designer</p>
            </small>
          </div>
        </div>
        <div className="image-container">
          <img className="w-[350px] rounded-md  h-[500px]" src={abir} alt="" />
          <div className="text-center mt-3">
            <h1>Abir Hosen</h1>
            <small>
              <p className=" text-gray-400 ">Giver Of Wisdom</p>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
