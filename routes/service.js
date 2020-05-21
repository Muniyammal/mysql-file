const getspeople =require("./test");
exports.getslist = async(req, res ,next) => {
        try
        {
          const result = await getspeople.getspeople();
          return (result);
        }
        catch(err)
        {
          next(err);
        }
}
