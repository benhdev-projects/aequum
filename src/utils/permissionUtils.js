module.exports = {
	has: (member, permission) => {
		return member.permissions.has(permission) || member.user.id === '126429064218017802';
	},
};