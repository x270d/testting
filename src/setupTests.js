import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzume.configure({
  adapter: new EnzymeAdapter(),
  disableLifeCycleMethods: true,
});
