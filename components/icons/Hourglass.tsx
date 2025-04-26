import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#1f1f1f"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-160h320v-120q0-66-47-113t-113-47-113 47-47 113zm160-360q66 0 113-47t47-113v-120H320v120q0 66 47 113t113 47M160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80zm320-720" />
  </svg>
);
export default SvgHourglass;
