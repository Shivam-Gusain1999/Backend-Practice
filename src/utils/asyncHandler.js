

const asynceHandler = (requestHandler) => (req, res, next)=>{
Promise.resoleve(requestHandler(req, res, next)).
catch((err)=>next(err))
}

export { asynceHandler };



















// const aysncHandler = (fun) => async (req, res, next)=> {
//     try {
//         await fun(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }