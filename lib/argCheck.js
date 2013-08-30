
exports.validate = function (cmds) {
   var ret = true;

   if (cmds.count == 3) {

      if (cmds.type != "js" && cmds.type != "json" && cmds.type != "both") {
         console.log("Error: unknown processing type!!");
         ret = false;
      }

      // TODO: check input file exists

      // TODO: check to over write output filename
   }
   else
   {
       if (cmds.count == 0){
          // TODO: Output a help message
       }
       else
       {
           console.log("Error: invalid number of command arguments!!");

           if (!cmds.fromFile)
           {
               console.log("Error: Missing input filename!!");
           }
           if (!cmds.toFile)
           {
               console.log("Error: Missing output filename!!");
           }
           if (!cmds.type)
           {
               console.log("Error: Missing processing type!!");
           }
       }
       ret = false;
   }

   return ret;
};