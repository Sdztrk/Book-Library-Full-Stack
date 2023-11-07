exports.errorHandler = (err, req,res,next) => {
    const errStatusCode = res.errStatusCode || 500
    console.log(`Errorhandler runned`.red.underline)
    res.status(errStatusCode).send({
        error:true,
        message: err.message
    })
}