import * as React from "react";
import type { SVGProps } from "react";
const SvgMarkChatUnread = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#1f1f1f"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-80v-720q0-33 23.5-56.5T160-880h404q-4 20-4 40t4 40H160v525l46-45h594v-324q23-5 43-13.5t37-22.5v360q0 33-23.5 56.5T800-240H240zm80-720v480zm600 80q-50 0-85-35t-35-85 35-85 85-35 85 35 35 85-35 85-85 35" />
  </svg>
);
export default SvgMarkChatUnread;
