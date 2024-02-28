exports.errorHandler = (error, req, res, next) =>  {
    console.log("Error occured!");
    console.log(error);
    res.status(500).render("shared/500")
}