const userRedisDao = require('../db/redis/userRedisDao');

class UserService{
    async storeUserId(userSessionId, userId) {
        // await表示当一个异步方法返回结果之后才往下走
        await userRedisDao.storeUserId(userSessionId, userId);
    }

    async getUserIdFromUserSessionByUserSessionId(userSessionId){
        return await userRedisDao.getUserIdFromUserSessionByUserSessionId(userSessionId);
    }

    async resetUserSessionExpirationTime(userSessionId){
        await userRedisDao.resetUserSessionExpirationTime(userSessionId);
    }

    async removeUserSessionByUserSessionId(userSessionId){
        await userRedisDao.removeUserSessionByUserSessionId(userSessionId);
    }
}

module.exports = new UserService();