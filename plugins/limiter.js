let handler = m => m

handler.all = async function(m, {conn} ) {
	let user = global.db.data.users[m.sender]
	if ((user.money * 1) > 1000000000) {
		user.money = 1000000000
	} else if ((user.money * 1) < 0) {
		user.money = 0
	}
	if ((user.limitjoin * 1) > 10) {
		 user.limitjoin = 10
	}
	if ((user.limit * 1) > 100000) {
		 user.limit = 100000
	}
	if ((user.exp * 1) > 1000000000) {
	  user.exp = 1000000000
	}
	if ((user.bank * 1) > 10000000000) {
	  user.bank = 10000000000
	}
}

module.exports = handler