import TestRenderer from "react-test-renderer";
import "./shared-no-style.native";
import { sharedNoShortHeadline } from "./shared-oa2.base";

export default () => sharedNoShortHeadline(TestRenderer.create);
