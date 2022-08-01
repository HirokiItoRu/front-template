import { handlers as user } from "./user";
import { handlers as userGql } from "./userGql";
// export const handlers = [...user];
export const handlers = [...user, ...userGql];
