(function(){dust.register("lan-template",body_0);function body_0(chk,ctx){return chk.write("<div class=\"itemborder\"><div class=\"itemHead row-fluid\"><div class=\"span10\"><div class=\"subHead\"><b>").reference(ctx.get("name"),ctx,"h").section(ctx.get("config"),ctx,{"block":body_1},null).write("</b></div></div><div class=\"span10\">").partial("select-config-type",ctx,null).helper("if",ctx,{"else":body_2,"block":body_3},{"cond":body_4}).write("</div>").section(ctx.get("vlaninterfaces"),ctx,{"block":body_5},null).write("</div></div>");}function body_1(chk,ctx){return chk.write(" ").reference(ctx.get("type"),ctx,"h");}function body_2(chk,ctx){return chk.write("<div class=\"span10 staticView\">").partial("lan-config-static",ctx,null).write("</div>");}function body_3(chk,ctx){return chk.write("<div class=\"span10 itemborder dhcpView\">").partial("lan-config-dhcp",ctx,null).write("</div>");}function body_4(chk,ctx){return chk.write("'").reference(ctx.getPath(false,["config","type"]),ctx,"h").write("'=='dhcp'");}function body_5(chk,ctx){return chk.write("<div class=\"span10\">").partial("vlan-view-details",ctx,{"groupName":body_6}).write("</div>");}function body_6(chk,ctx){return chk.write("group").reference(ctx.get("id"),ctx,"h");}return body_0;})();