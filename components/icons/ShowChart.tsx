import * as React from "react";
import type { SVGProps } from "react";
const SvgShowChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#1f1f1f"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m140-220-60-60 300-300 160 160 284-320 56 56-340 384-160-160z" />
  </svg>
);
export default SvgShowChart;
