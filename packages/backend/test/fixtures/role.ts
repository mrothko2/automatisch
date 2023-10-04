type RoleParams = {
  name?: string;
  key?: string;
};

const createRole = async (params: RoleParams = {}) => {
  params.name = params?.name || 'Viewer';
  params.key = params?.key || 'viewer';

  const [role] = await knex.table('roles').insert(params).returning('*');

  return role;
};

export default createRole;
