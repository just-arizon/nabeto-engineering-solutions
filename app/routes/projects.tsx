// app/routes/project.tsx
import { Outlet } from "react-router";

export function meta() {
  return [{ title: "Projects" }];
}

export default function ProjectsLayout() {
  return <Outlet />;          // children render here
}