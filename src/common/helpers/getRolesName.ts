import { IRole } from '@/interfaces';

export const getRolesName = (roles: IRole[]) => {
    return roles.map((role: IRole) => role.name).join(', ');
};
