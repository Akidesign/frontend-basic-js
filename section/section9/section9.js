const userIdList = (jsDatas) => {
  const returnUserId = [];

  const allUserIds = jsonDatas.map((jsonData) => {
    return jsonData.UserId;
  });

  for (UserId of allUserIds) {
    const getUserId = returnUserId.findIndex((eachReturnUserId) => {
      return eachReturnUserId === UserId;
    });

    if (getUserId === -1) {
      returnUserId.push(userId);
    }
  }

  return returnUserId;
};

const fixData = (jsonDatas) => {
  const userIds = userIdList(jsonDatas);
  const array = [];

  for (userId of userIds) {
    const matchedUserData = jsonDatas.filter(
      (jsonData) => jsonData.userId === userId
    );
    for (eachMatchedUserData of matchedUserData) {
      delete eachMatchedUserData.userId;
    }
    array.push(matchedUserData);
  }

  const newDatas = userIds.map((id, index) => {
    return {
      userId: id,
      datas: array[index],
    };
  });
  return newDatas;
};

module.exports = { userIdList, fixData };
