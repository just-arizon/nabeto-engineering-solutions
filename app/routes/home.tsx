import type { Route } from "./+types/home";
import { HomePage } from "~/pages/HomePage"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nabeto Engineering Limited" },
    {
      name: "description",
      content:
        "NABETO Engineering Limited is an engineering, procurement,installation,construction,operation and maintanance (EPICOM) company in oil and gas industry.",
    },
  ];
}

export default function Home() {

  return <HomePage />
}
