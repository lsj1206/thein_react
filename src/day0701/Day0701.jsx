import "./day0701.css";
import AccessDom from "./AccessDom";
import RenderCheck from "./RenderCheck";
import TrackingState from "./TrackingState";
import MyUseReduser from "./MyUseReduser";
import WithoutCallback from "./WithoutCallback";
import WithCallback from "./WithCallback";

function Day0701() {
  return (
    <>
      <RenderCheck />
      <hr />
      <AccessDom />
      <hr />
      <TrackingState />
      <hr />
      <MyUseReduser />
      <hr />
      <WithoutCallback />
      <hr />
      <WithCallback />
    </>
  );
}

export default Day0701;
