const { default: navValues } = require("@/helpers/navValues");
const { default: HouseList } = require("./HouseList");
const { default: House } = require("./house");


const ComponentPicker = ({ currentNavLocation }) => {
    switch (currentNavLocation) {
        case navValues.home:
            return <HouseList />;
        case navValues.house:
            return <House />;
        default:
            return (
                <h3>
                    No component for navigation value
                    {currentNavLocation} found
                </h3>
            );
    }
};

export default ComponentPicker;