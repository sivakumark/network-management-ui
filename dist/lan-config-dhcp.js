(function(){dust.register("lan-config-dhcp",body_0);function body_0(chk,ctx){return chk.write("<div class=\"span10\" id=\"dhcpIP\"><label class=\"checkbox inline\" for=\"enableDHCP\"> ").helper("eq",ctx,{"block":body_1},{"key":ctx.getPath(false,["dhcp","enabled"]),"value":"true"}).write("<input type=\"checkbox\" ").exists(ctx.getPath(false,["dhcp","enabled"]),ctx,{"block":body_2},null).write("/>Enable DHCP Server </label><button title=\"Add IP Range\" class=\"btn btn-primary pull-right addRange\" id=\"addRange\">Add Range</button></div><div class=\"span10\" id=\"dhcpRanges\"><table class=\"ipRanges\">").section(ctx.getPath(false,["dhcp","ranges"]),ctx,{"block":body_3},null).write("</table></div>");}function body_1(chk,ctx){return chk.write("true");}function body_2(chk,ctx){return chk.write("checked=\"checked\"");}function body_3(chk,ctx){return chk.write("<tr><td><table><tr><td><label class=\"control-label inline\">IP Range</label></td><td><input type=\"text\" maxlength=\"32\" name=\"from\" class=\"input-medium\" value=\"").reference(ctx.get("from"),ctx,"h").write("\" disabled />-<input type=\"text\" maxlength=\"32\" name=\"to\"  class=\"input-medium\" value=\"").reference(ctx.get("to"),ctx,"h").write("\" disabled /></td><td><button title=\"Save Range\" class=\"btn btn-primary deleteRange\">Delete</button></td></tr></table></td></tr>");}return body_0;})();