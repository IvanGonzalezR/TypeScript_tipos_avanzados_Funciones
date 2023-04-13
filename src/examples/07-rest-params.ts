import { ROLES, User } from "./01-enum"

const currentUser: User = {
  username: 'kikeG',
  role: ROLES.CUSTOMER,
}

const checkAdminRole = (): boolean => {
  if (currentUser.role === 'admin') {
    return true;
  }
  return false;
}

const checkRole = (
  role1: string,
  role2: string
): boolean => {
  if (currentUser.role === role1) {
    return true;
  }
  if (currentUser.role === role2) {
    return true;
  }
  return false;
}

console.log(
  'CheckRoleV1',
  checkAdminRole()
);
console.log(
  'CheckRoleV1',
  checkRole(ROLES.ADMIN, ROLES.SELLER)
);

const checkRoleV2 = (
  roles: string[]
): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}
console.log(
  'CheckRoleV2',
  checkRoleV2([ ROLES.ADMIN, ROLES.SELLER ])
);

// CON REST PARAMS
const checkRoleV3 = (
  ...roles: string[]
): boolean => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
}
console.log(
  'CheckRoleV3',
  checkRoleV3(ROLES.ADMIN, ROLES.CUSTOMER)
);

export { checkAdminRole, checkRole };