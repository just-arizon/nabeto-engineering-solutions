import { Outlet } from "react-router";
export function meta() {
  return [{ title: "Services" }];
}

export default function ServicesRoute() {
  return <Outlet />;
}