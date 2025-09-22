import ServicePage from "../pages/ServicePage";

export function meta() {
  return [{ title: "Services" }];
}

export default function ServicesRoute() {
  return <ServicePage />;
}