/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ItemReactTab = ({colors,dimensions,sizes,weight}) => {
  return (
    <div className="px-20">
      <Tabs>
        <TabList>
          <Tab
            style={{
              padding: "10px",
              cursor: "pointer",
              border: "0",
              borderRight: "",
              marginRight: "10px",
              marginBottom: "20px",
              textAlign: "center",
              fontFamily: "fantasy",
            }}
          >
            Description
          </Tab>
          <Tab
            style={{
              padding: "10px",
              cursor: "pointer",
              border: "0",
              borderLeft: "",
              marginRight: "10px",
              marginBottom: "20px",
              textAlign: "center",
              fontFamily: "fantasy",
            }}
          >
            Information
          </Tab>
        </TabList>
        <TabPanel>
          <p className="w-[1100px] swiperStyle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et
            magnis dis parturient montes nascetur ridiculus mus. Vestibulum
            ultricies aliquam convallis. Maecenas ut tellus mi. Proin tincidunt,
            lectus eu volutpat mattis, ante metus lacinia tellus, vitae
            condimentum nulla enim bibendum nibh. Praesent turpis risus,
            interdum nec venenatis id, pretium sit amet purus.
          </p>
        </TabPanel>
        <TabPanel>
          <p className="mb-2  informationClass">
            <span>Weight: </span>
            {weight}
          </p>
          <p className="mb-2 informationClass">
            <span>Dimensions: </span>
            {dimensions}
          </p>
          <p className="mb-2 informationClass">
            <span>Colors: </span>
            {colors}
          </p>
          <p className="mb-2 informationClass">
            <span>Sizes: </span>
            {sizes}
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ItemReactTab;
