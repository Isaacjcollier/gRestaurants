function checkValidation(req, res, next) {
  const name = req.body.name;
  const city = req.body.city;
  const street = req.body.street;
  const zip = req.body.zip;
  const arr = [name, city, street, zip];
  function check(el, index, arr) {
    return (el !== '');
  }
  const valid = arr.every(check);
  const errorMessage = [];
  if (!valid) {
    errorMessage.push('please');
    const renderObject = {};
    renderObject.error = errorMessage;
    // { error: ['some message'] }
    return res.render('restaurant_admin_add', renderObject);
  } else {
    next();
  }
}

module.exports = {
  checkValidation
};
