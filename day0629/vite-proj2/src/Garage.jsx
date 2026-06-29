import Car from "./Car";
import Car2 from "./Car2";

const mycar1 = {
  name: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969,
};

function Garage() {
  return (
    <div>
      <Car brand="Ford" />
      <Car brand="BMW" />
      <Car brand="르노" />
      <Car brand="기아" />
      <Car2 carinfo={mycar1} />
    </div>
  );
}

export default Garage;
