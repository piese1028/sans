r.dbCreate('sans')
r.db('sans').tableCreate('users')
r.db('sans').grant('sans', {read: true, write: true})
r.db('sans').table('roles')
