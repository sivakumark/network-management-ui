(function(){dust.register("lan-view-range-tmp",body_0);function body_0(chk,ctx){return chk.write("<td><table><tr><td><label class=\"control-label inline\" for=\"form1\">IP Range</label></td><td><input type=\"text\" maxlength=\"32\" name=\"from\" id=\"from\" class=\"input-medium\" disabled value=\"").reference(ctx.get("from"),ctx,"h").write("\"/>-<input type=\"text\" maxlength=\"32\" name=\"to\" id=\"to\" class=\"input-medium\" disabled value=\"").reference(ctx.get("to"),ctx,"h").write("\"/></td><td><button title=\"Edit Range\" class=\"btn btn-primary editRange\" id=\"editRange\">Edit</button><button title=\"Delete Range\" class=\"btn deleteRange\" id=\"deleteRange\">Delete</button></td></tr></table></td>");}return body_0;})();