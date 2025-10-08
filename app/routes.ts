import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
// Single Route
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  // route("ceo", "routes/ceo.tsx"), 

// Dynamic Route
  route("services", "routes/services.tsx", [
    index("routes/services/index.tsx"),     
    route(":slug", "routes/services/$slug.tsx"),
  ]),

  route("policies", "routes/policies.tsx", [
    index("routes/policies/index.tsx"),     
  ]),

  route("projects", "routes/projects.tsx", [
    index("routes/projects/index.tsx"),  
    route(":slug", "routes/projects/$slug.tsx"),
  ]),
] satisfies RouteConfig;