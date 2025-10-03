import { Outlet } from "react-router";
export function meta() {
  return [{ title: "Policies" }];
}

export default function PoliciesRoute() {
  return <Outlet />;
}