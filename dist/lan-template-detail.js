(function(){dust.register("lan-template-detail",body_0);function body_0(chk,ctx){return chk.write("<div class=\"itemborder\"><div class=\"itemHead row-fluid\"><div class=\"span10\"><div class=\"subHead\"><b>").reference(ctx.get("name"),ctx,"h").section(ctx.get("config"),ctx,{"block":body_1},null).write("</b></div><!--<button title=\"Edit LAN Details\" class=\"btn btn-primary pull-right edit\" id=\"editLan\">Edit</button><button title=\"Save LAN Details\" class=\"hide btn btn-primary pull-right save\" id=\"saveLan\">Save</button><button title=\"Cancel LAN Details\" class=\"hide btn btn-primary pull-right cancel\" id=\"cancelLan\">Cancel</button>--></div></div><div class=\"subHead row-fluid\" id=\"selectConfigType\"></div><br><br>").section(ctx.get("config"),ctx,{"block":body_2},{"param":ctx.get("dhcp")}).write("<div id=\"lanConfigType\"></div><br><div class=\"table\" id=\"vlanDetails\"></div></div>");}function body_1(chk,ctx){return chk.write(" ").reference(ctx.get("type"),ctx,"h");}function body_2(chk,ctx){return chk.write("<div class=\"span10\"> ").partial("select-config-type",ctx,{"type":ctx.get("type")}).write("</div>").helper("select",ctx,{"block":body_3},{"key":body_6});}function body_3(chk,ctx){return chk.helper("eq",ctx,{"block":body_4},{"value":"dhcp"}).helper("eq",ctx,{"block":body_5},{"value":"static"});}function body_4(chk,ctx){return chk.write("<div class=\"span10\"> ").partial("lan-config-dhcp",ctx,null).write("</div>\t\t\t \t\t");}function body_5(chk,ctx){return chk.write("<div class=\"span10\">").partial("lan-config-static",ctx,null).write("</div>");}function body_6(chk,ctx){return chk.reference(ctx.get("type"),ctx,"h");}return body_0;})();