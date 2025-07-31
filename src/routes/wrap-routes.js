import { contactManagementRouter } from "./contacts";
import { healthRouter } from "./health";
export const wrapRoutes = (app) => {
  healthRouter(app);
  contactManagementRouter(app);
};
