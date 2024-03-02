exports.getSessionData = async (req) => {
  const sessionData = await req.session.flashedData;
  req.session.flashedData = null;
  return sessionData;
};

exports.flashDataIntoSession = (req, data, action) => {
  req.session.flashedData = data;
  return req.session.save(action);
};
