define("templates",["handlebars"],function(Handlebars){Handlebars.templates={};Handlebars.templates['accordion']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"accordion-item\">\n            <button role=\"button\" class=\"base accordion-item-title ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" aria-expanded=\"false\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n              <div class=\"accordion-item-title-inner\">\n                <div class=\"accordion-item-title-icon icon icon-plus h5\"></div>\n                      ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n              </div>\n            </button>\n            <div class=\"accordion-item-body\">\n                <div class=\"accordion-item-body-inner\">\n                    ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._graphic : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\n            </div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
  return "visited";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                    <div class=\"accordion-item-graphic\">\n                        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\">\n                    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"accordion-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._accordion : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"accordion-widget component-widget\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n";
},"usePartial":true,"useData":true});Handlebars.templates['assessmentResults']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"results-retry component-feedback\">\n            <div class=\"results-retry-inner component-feedback-inner\">\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.retryFeedback : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            </div>\n            <div class=\"results-retry-button\">\n                <button>";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._retry : depth0)) != null ? stack1.button : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</button>\n            </div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._retry : depth0)) != null ? stack1.button : stack1), depth0));
  },"4":function(depth0,helpers,partials,data) {
  return "Retry";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"results-inner component-inner\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"results-widget component-widget\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isRetryEnabled : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n";
},"usePartial":true,"useData":true});Handlebars.templates['assessmentResultsTotal']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"results-inner component-inner\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"usePartial":true,"useData":true});Handlebars.templates['blank']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"blank-inner component-inner\"></div>\n";
  },"useData":true});Handlebars.templates['gmcq']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  return "correct";
  },"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "        <div class=\"gmcq-item component-item ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " "
    + escapeExpression(((helpers.odd || (depth0 && depth0.odd) || helperMissing).call(depth0, (data && data.index), {"name":"odd","hash":{},"data":data})))
    + "\">\n            <input type=\"checkbox\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-labelledby=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\"";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " aria-label=\""
    + escapeExpression(((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helperMissing).call(depth0, (depth0 != null ? depth0.text : depth0), {"name":"a11y_normalize","hash":{},"data":data})))
    + " "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\"/>\n            <label aria-hidden=\"true\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " component-item-color component-item-text-color component-item-border ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isSelected : depth0), {"name":"if","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n\n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" data-large=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\"/>\n\n                <div class=\"gmcq-item-checkbox\">\n                    <div class=\"gmcq-item-state\">\n                        <div class=\"gmcq-item-icon gmcq-answer-icon ";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isRadio : depths[1]), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.program(17, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " icon\"></div>\n                        <div class=\"gmcq-item-icon gmcq-correct-icon icon icon-tick\"></div>\n                        <div class=\"gmcq-item-icon gmcq-incorrect-icon icon icon-cross\"></div>\n                    </div>\n                    <div class=\"gmcq-item-inner h5\">\n                        ";
  stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    </div>\n                </div>\n            </label>\n        </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"7":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"9":function(depth0,helpers,partials,data) {
  return " disabled";
  },"11":function(depth0,helpers,partials,data) {
  return "disabled ";
  },"13":function(depth0,helpers,partials,data) {
  return "selected";
  },"15":function(depth0,helpers,partials,data) {
  return "radio";
  },"17":function(depth0,helpers,partials,data) {
  return "checkbox";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"gmcq-inner component-inner clearfix\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._gmcq : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"gmcq-widget component-widget clearfix ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});Handlebars.templates['graphic']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " graphic-widget-attribution";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "        <div class=\"graphic-attribution\">";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"graphic-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._graphic : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"graphic-widget component-widget";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" data-large=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.large : stack1), depth0))
    + "\" data-small=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.small : stack1), depth0))
    + "\"  tabindex=\"0\"/>\n    </div>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.attribution : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"usePartial":true,"useData":true});Handlebars.templates['hotgraphic']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  return "tile";
  },"5":function(depth0,helpers,partials,data) {
  return "pin";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "          <div class=\"hotgraphic-popup-nav component-item-color\">\n            <button class=\"base hotgraphic-popup-controls back\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\" role=\"button\">\n              <div class=\"hotgraphic-popup-arrow-l component-item-text-color icon icon-controls-small-left\"></div>\n            </button>\n            <div class=\"hotgraphic-popup-count component-item-text-color\">\n              <span class=\"current\">1</span>/<span class=\"total\">3</span>\n            </div>\n            <button class=\"base hotgraphic-popup-controls next\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\" role=\"button\">\n              <div class=\"hotgraphic-popup-arrow-r component-item-text-color icon icon-controls-small-right\"></div>\n            </button>\n          </div>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "          <div class=\"hotgraphic-item component-item item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " "
    + escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_classes","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"hotgraphic-item-graphic\">\n              <div class=\"hotgraphic-item-graphic-inner\">\n                <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\"/>\n              </div>\n            </div>\n            <div class=\"hotgraphic-item-content\">\n              <div class=\"hotgraphic-item-content-inner\">\n                <div class=\"hotgraphic-content-title accessible-text-block\" role=\"heading\" aria-level=\"5\" tabindex=\"0\">\n                  ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                </div>\n                <div class=\"hotgraphic-content-body\">\n                  ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </div>\n              </div>\n            </div>\n          </div>\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, buffer = "        <div class=\"hotgraphic-narrative\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "          <button class=\"base hotgraphic-graphic-pin component-item-text-color ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " hotgraphic-graphic-pin-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._classes : stack1), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-id=\"item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" style=\"top:";
  stack1 = ((helper = (helper = helpers._top || (depth0 != null ? depth0._top : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_top","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "%; left:";
  stack1 = ((helper = (helper = helpers._left || (depth0 != null ? depth0._left : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_left","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "%;\" role=\"button\" aria-label=\"Item "
    + escapeExpression(((helpers.numbers || (depth0 && depth0.numbers) || helperMissing).call(depth0, (data && data.index), {"name":"numbers","hash":{},"data":data})))
    + ". "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + ".\">\n            <div class=\"hotgraphic-graphic-pin-image component-item-color item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" style=\"background-image: url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + ")\"></div>\n          </button>\n";
},"13":function(depth0,helpers,partials,data) {
  return "visited";
  },"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1._classes : stack1), depth0));
  },"17":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "        <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\"/>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"18":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "          <button class=\"base hotgraphic-graphic-pin component-item-text-color item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-id=\"item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" style=\"top:";
  stack1 = ((helper = (helper = helpers._top || (depth0 != null ? depth0._top : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_top","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "%; left:";
  stack1 = ((helper = (helper = helpers._left || (depth0 != null ? depth0._left : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_left","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "%;\" role=\"button\" aria-label=\"Item "
    + escapeExpression(((helpers.numbers || (depth0 && depth0.numbers) || helperMissing).call(depth0, (data && data.index), {"name":"numbers","hash":{},"data":data})))
    + ". "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + ".\">\n            <div class=\"hotgraphic-graphic-pin-icon component-item-color icon icon-pin item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\"></div>\n          </button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"hotgraphic-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hotgraphic : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hotgraphic : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '  ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "  <div class=\"hotgraphic-widget component-widget ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._useGraphicsAsPins : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n\n    <div class=\"hotgraphic-graphic\">\n\n      <div class=\"hotgraphic-popup\" role=\"dialog\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hotgraphic : stack1)) != null ? stack1.ariaPopupLabel : stack1), depth0))
    + "\">\n\n        <div class=\"hotgraphic-popup-toolbar component-item-color clearfix\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._hidePagination : depth0), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "          <button class=\"base hotgraphic-popup-done\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\" role=\"button\">\n            <div class=\"hotgraphic-popup-close component-item-text-color icon icon-cross\"></div>\n          </button>\n        </div>\n\n        <div class=\"hotgraphic-popup-inner clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n      </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._useGraphicsAsPins : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.program(17, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});Handlebars.templates['matching']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "    <div class=\"matching-item item ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n      <div class=\"matching-item-title\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.text : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n      <div class=\"matching-select-container component-item-color\">\n        <div class=\"matching-select-state\">\n          <div class=\"matching-select-icon component-text-color matching-dropdown-icon icon icon-controls-small-down\"></div>\n          <div class=\"matching-select-icon component-text-color matching-correct-icon icon icon-tick\"></div>\n          <div class=\"matching-select-icon component-text-color matching-incorrect-icon icon icon-cross\"></div>\n        </div>\n        <select class=\"matching-select component-text-color\"";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n          <option>\n            "
    + escapeExpression(lambda((depths[1] != null ? depths[1].placeholder : depths[1]), depth0))
    + "\n          </option>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._options : depth0), {"name":"each","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </select>\n      </div>\n    </div>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"9":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"11":function(depth0,helpers,partials,data) {
  return " disabled";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "          <option ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isSelected : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n            "
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)))
    + "\n          </option>\n";
},"14":function(depth0,helpers,partials,data) {
  return "selected";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"matching-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._matching : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._matching : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '  ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "  <div class=\"matching-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n  <div class=\"buttons\">\n  </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});Handlebars.templates['mcq']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, functionType="function", buffer = "        <div class=\"mcq-item component-item component-item-color ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n            <input type=\"checkbox\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-labelledby=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\"";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(13, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " aria-label=\""
    + escapeExpression(((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helperMissing).call(depth0, (depth0 != null ? depth0.text : depth0), {"name":"a11y_normalize","hash":{},"data":data})))
    + "\"/>\n            <label aria-hidden=\"true\" id=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" class=\"component-item-text-color component-item-border";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isSelected : depth0), {"name":"if","hash":{},"fn":this.program(17, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                <div class=\"mcq-item-state\">\n                    <div class=\"mcq-item-icon mcq-answer-icon ";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isRadio : depths[1]), {"name":"if","hash":{},"fn":this.program(19, data, depths),"inverse":this.program(21, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " component-item-text-color icon\"></div>\n                    <div class=\"mcq-item-icon mcq-correct-icon icon icon-tick\"></div>\n                    <div class=\"mcq-item-icon mcq-incorrect-icon icon icon-cross\"></div>\n                </div>\n                <div class=\"mcq-item-inner h5\">\n                    ";
  stack1 = ((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </div>\n            </label>\n        </div>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(11, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"9":function(depth0,helpers,partials,data) {
  return " correct";
  },"11":function(depth0,helpers,partials,data) {
  return " incorrect";
  },"13":function(depth0,helpers,partials,data) {
  return " disabled";
  },"15":function(depth0,helpers,partials,data) {
  return " disabled ";
  },"17":function(depth0,helpers,partials,data) {
  return " selected";
  },"19":function(depth0,helpers,partials,data) {
  return "radio";
  },"21":function(depth0,helpers,partials,data) {
  return "checkbox";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"mcq-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._mcq : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._mcq : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"mcq-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});Handlebars.templates['media']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.transcriptButton : stack1), depth0));
  },"3":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "      <audio src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1), depth0))
    + "\" type=\"audio/mp3\" style=\"width: 100%; height: 100%;\"/>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        <audio src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogg : stack1), depth0))
    + "\" type=\"audio/ogg\" style=\"width: 100%; height: 100%;\"/>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "        <video preload=\"none\" width=\"640\" height=\"360\" poster=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.poster : stack1), depth0))
    + "\" style=\"width:100%; height:100%;\" controls=\"controls\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._useClosedCaptions : depth0), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </video>\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.source : stack1), depth0))
    + "\" type=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.type : stack1), depth0))
    + "\"/>\n";
},"13":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp4 : stack1), depth0))
    + "\" type=\"video/mp4\"/>\n            <source src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.ogv : stack1), depth0))
    + "\" type=\"video/ogg\"/>\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.cc : stack1), {"name":"each","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"16":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                  <track kind=\"subtitles\" src=\""
    + escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"src","hash":{},"data":data}) : helper)))
    + "\" type=\"text/vtt\" srclang=\""
    + escapeExpression(((helper = (helper = helpers.srclang || (depth0 != null ? depth0.srclang : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"srclang","hash":{},"data":data}) : helper)))
    + "\" />\n";
},"18":function(depth0,helpers,partials,data) {
  var stack1, buffer = "    <div class=\"media-transcript-container\">\n\n      <div class=\"media-transcript-button-container\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._externalTranscript : stack1), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1._inlineTranscript : stack1), {"name":"if","hash":{},"fn":this.program(27, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n    </div>\n";
},"19":function(depth0,helpers,partials,data) {
  var stack1, buffer = "          <button class=\"media-inline-transcript-button button\" role=\"button\">\n            <div class=\"transcript-text-container\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), {"name":"if","hash":{},"fn":this.program(20, data),"inverse":this.program(22, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n          </button>\n";
},"20":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptButton : stack1), depth0))
    + "\n";
},"22":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "\n";
},"24":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "          <button onclick=\"window.open('"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLink : stack1), depth0))
    + "')\" class=\"media-external-transcript-button button\" role=\"button\">\n            <div class=\"transcript-text-container\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1), {"name":"if","hash":{},"fn":this.program(25, data),"inverse":this.program(22, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n          </button>\n";
},"25":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.transcriptLinkButton : stack1), depth0))
    + "\n";
},"27":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "          <div class=\"media-inline-transcript-body-container\">\n            <div class=\"media-inline-transcript-body\">\n            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0._transcript : depth0)) != null ? stack1.inlineTranscriptBody : stack1), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n          </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"media-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.transcriptLink : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._media : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"media-widget component-widget a11y-ignore-aria\">\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._media : depth0)) != null ? stack1.mp3 : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._transcript : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    \n</div>\n";
},"usePartial":true,"useData":true});Handlebars.templates['narrative']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "narrative-text-controls";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"narrative-content-item\">\n                    <div class=\"narrative-content-title\">\n                        <div class=\"narrative-content-title-inner accessible-text-block h5\" role=\"heading\" aria-level=\"5\" tabindex=\"0\">\n                            ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += " \n                        </div>\n                    </div>\n                    <div class=\"narrative-content-body\">\n                        <div class=\"narrative-content-body-inner\">\n                            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                        </div> \n                    </div>\n                </div>\n";
},"5":function(depth0,helpers,partials,data) {
  return "                        <div class=\"narrative-progress component-item-color component-item-border\"></div>\n";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <button role=\"button\" class=\"base narrative-strapline-title\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                        <div class=\"narrative-strapline-title-inner accessible-text-block h5\">\n                            ";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " \n                        </div>\n                        <div class=\"icon icon-plus\"></div>\n                        <div class=\"focus-rect\"></div>\n                    </button>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <div class=\"narrative-slider-graphic ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.visited : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                    <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" tabindex=\"0\"/>\n                </div>\n";
},"10":function(depth0,helpers,partials,data) {
  return "visited";
  },"12":function(depth0,helpers,partials,data) {
  return "                <div class=\"narrative-progress component-item-color component-item-border\"></div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"narrative-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._narrative : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"narrative-widget component-widget ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._hasNavigationInTextArea : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n\n        <div class=\"narrative-content\">\n            <div class=\"narrative-content-inner\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                <div class=\"narrative-controls-container clearfix\">\n                    <div class=\"narrative-indicators\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </div>\n                    <button class=\"base narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                        <div class=\"icon icon-controls-left\"></div>\n                    </button>\n                    <button class=\"base narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                        <div class=\"icon icon-controls-right\"></div>\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"narrative-strapline\">\n            <div class=\"narrative-strapline-header\">\n                <div class=\"narrative-strapline-header-inner clearfix\">\n                    <div></div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                </div>\n            </div>\n        </div>\n\n        <div class=\"narrative-slide-container\">\n\n            <button class=\"base narrative-controls narrative-control-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-left\"></div>\n            </button>\n            <button class=\"base narrative-controls narrative-control-right\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.next : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-right\"></div>\n            </button>\n\n            <div class=\"narrative-slider clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n            <div class=\"narrative-indicators\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n        </div>\n\n        <div class=\"clearfix\"></div>\n\n    </div>    \n</div>\n";
},"usePartial":true,"useData":true});Handlebars.templates['slider']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                    <button tabindex=\"0\" role=\"button\" class=\"base slider-scale-number\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "</button>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"10":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"slider-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._slider : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._slider : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"slider-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n        <div class=\"slider-holder clearfix\">\n            <div class=\"slider-scale-labels\">\n                <div class=\"slider-scale-start\" tabindex=\"0\" role=\"region\">"
    + escapeExpression(((helper = (helper = helpers.labelStart || (depth0 != null ? depth0.labelStart : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"labelStart","hash":{},"data":data}) : helper)))
    + "</div>\n                <div class=\"slider-scale-end\" tabindex=\"0\" role=\"region\">"
    + escapeExpression(((helper = (helper = helpers.labelEnd || (depth0 != null ? depth0.labelEnd : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"labelEnd","hash":{},"data":data}) : helper)))
    + "</div>\n            </div>\n            <div class=\"slider-scale-numbers clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n             <div class=\"slider-scaler component-item-color\">\n                <div class=\"slider-modelranges\"></div>\n                <div class=\"slider-markers\"></div>\n                <div class=\"slider-answer component-item-color component-item-text-color\"></div>\n                <div class=\"slider-scale-marker component-item-color component-item-text-color a11y-ignore\" aria-hidden=\"true\" tabindex=\"-1\"></div>\n            </div>\n            <div class=\"slider-background\">\n                <div class=\"slider-item component-item ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                    <div class=\"slider-sliderange\">\n                        <button class=\"base slider-handle component-item-color component-item-text-color a11y-ignore\" tabindex=\"-1\" aria-hidden=\"true\"></button>\n                        <div class=\"slider-bar component-item-color\"></div>\n                    </div>\n                    <div class=\"slider-outer-bar\">\n                    <div class=\"slider-item-state\">\n                        <div class=\"slider-icon slider-correct-icon icon icon-tick\"></div>\n                        <div class=\"slider-icon slider-incorrect-icon icon icon-cross\"></div>\n                    </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"buttons\">\n        </div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});Handlebars.templates['text']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"text-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._text : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"usePartial":true,"useData":true});Handlebars.templates['textinput']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
  return "correct";
  },"7":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "        <div class=\"textinput-item component-item component-item-color component-item-border clearfix ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prefix : depth0), {"name":"if","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.suffix : depth0), {"name":"if","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(12, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.prefix : depth0), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"if","hash":{},"fn":this.program(17, data, depths),"inverse":this.program(19, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.suffix : depth0), {"name":"if","hash":{},"fn":this.program(21, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            <div class=\"textinput-item-state\">\n                <div class=\"textinput-icon textinput-correct-icon icon icon-tick\"></div>\n                <div class=\"textinput-icon textinput-incorrect-icon icon icon-cross\"></div>\n            </div>\n        </div>\n";
},"8":function(depth0,helpers,partials,data) {
  return "prefix";
  },"10":function(depth0,helpers,partials,data) {
  return "suffix";
  },"12":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(13, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"13":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"15":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <label class=\"textinput-item-prefix component-item-text-color\" id=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prefix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                    ";
  stack1 = ((helper = (helper = helpers.prefix || (depth0 != null ? depth0.prefix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"prefix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </label>\n";
},"17":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <input type=\"text\" placeholder=\"";
  stack1 = ((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" id=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-labelledby=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" value=\"\" role=\"textbox\">\n";
},"19":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                <input type=\"text\" placeholder=\"";
  stack1 = ((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" class=\"textinput-item-textbox\" data-id=\"input-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.userAnswer || (depth0 != null ? depth0.userAnswer : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"userAnswer","hash":{},"data":data}) : helper)))
    + "\" disabled=\"true\" role=\"textbox\">\n";
},"21":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <label class=\"textinput-item-suffix component-item-text-color\" id=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "-aria\" for=\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.suffix || (depth0 != null ? depth0.suffix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"suffix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n                    ";
  stack1 = ((helper = (helper = helpers.suffix || (depth0 != null ? depth0.suffix : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"suffix","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                </label>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"textinput-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._textinput : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._textinput : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"textinput-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(7, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <div class=\"buttons\">\n    </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});Handlebars.templates['hotgrid']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                <div class=\"hotgrid-grid-item\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.hasImageStates : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                        <a href=\"#\" class=\"hotgrid-item-image hotgrid-item-states-image\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.title : stack1), depth0));
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.title : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\">                                                                                      \n                            <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\"/>\n                            <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.srcHover : stack1), depth0))
    + "\" class=\"hotgrid-item-image-hover\"/>\n                            <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.srcVisited : stack1), depth0))
    + "\" class=\"hotgrid-item-image-visited\"/>                                          \n                        </a>\n                        <div class=\"hotgrid-item-title\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.title : stack1), depth0))
    + "</div>   \n";
},"5":function(depth0,helpers,partials,data) {
  return ". ";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "                        <a href=\"#\" class=\"hotgrid-item-image hotgrid-item-states-css\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.title : stack1), depth0));
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.title : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\">\n                             <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\"/>\n                        </a>\n                        <div class=\"hotgrid-item-title\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.title : stack1), depth0))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"component-inner hotgrid-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hotgrid : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._hotgrid : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"component-widget hotgrid-widget\">\n\n        <div class=\"hotgrid-grid\">\n            <div class=\"hotgrid-grid-inner clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n        </div>\n\n    </div>\n</div>";
},"usePartial":true,"useData":true});Handlebars.templates['narrativeStrip']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "        <div class=\"ns-slide-container component-item item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n  \n            <a href=\"#\" class=\"ns-controls ns-control-left\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-left\"></div>\n            </a>\n            <a href=\"#\" class=\"ns-controls ns-control-right\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.next : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-right\"></div>\n            </a>\n            \n            <div class=\"ns-slider clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._subItems : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n\n            <div class=\"ns-strapline\">\n                <div class=\"ns-strapline-header\">\n                    <div class=\"ns-strapline-header-inner ns-noop clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._subItems : depth0), {"name":"each","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </div>\n                    <div class=\"ns-strapline-header-inner clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._subItems : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </div> \n                </div>\n            </div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                <div class=\"i"
    + escapeExpression(((helper = (helper = helpers._imageId || (depth0 != null ? depth0._imageId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_imageId","hash":{},"data":data}) : helper)))
    + " ns-slider-graphic ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.visited : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"></div>\n";
},"3":function(depth0,helpers,partials,data) {
  return "visited";
  },"5":function(depth0,helpers,partials,data) {
  return "                        <div class=\"ns-strapline-title\">\n                            <h5 class=\"ns-strapline-title-inner\">\n                            </h5>\n                        </div>\n";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                        <div class=\"ns-strapline-title\">\n                            <h5 class=\"ns-strapline-title-inner\">\n                               ";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " \n                            </h5>\n                        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"ns-inner component-inner\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"ns-widget component-widget\">\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n    </div>    \n</div>\n";
},"usePartial":true,"useData":true});Handlebars.templates['ppq']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  return "correct";
  },"5":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depths[2] != null ? depths[2].desktopLayout : depths[2]), {"name":"if","hash":{},"fn":this.program(7, data, depths),"inverse":this.program(9, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				    		<div class=\"ppq-correct-zone\" style=\"left:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.desktop : depth0)) != null ? stack1.left : stack1), depth0))
    + "%; top:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.desktop : depth0)) != null ? stack1.top : stack1), depth0))
    + "%; width:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.desktop : depth0)) != null ? stack1.width : stack1), depth0))
    + "%; height:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.desktop : depth0)) != null ? stack1.height : stack1), depth0))
    + "%;\"></div>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "				    		<div class=\"ppq-correct-zone\" style=\"left:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.mobile : depth0)) != null ? stack1.left : stack1), depth0))
    + "%; top:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.mobile : depth0)) != null ? stack1.top : stack1), depth0))
    + "%; width:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.mobile : depth0)) != null ? stack1.width : stack1), depth0))
    + "%; height:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.mobile : depth0)) != null ? stack1.height : stack1), depth0))
    + "%;\"></div>\n";
},"11":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "    				<img class=\"ppq-pinboard ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._developerMode : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._pinboardDesktop : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._pinboardDesktop : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._pinboardDesktop : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" draggable=\"false\" style=\"-moz-user-select: none;\" ondragstart=\"return false;\"/>\n";
},"12":function(depth0,helpers,partials,data) {
  return "developer-mode";
  },"14":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "    				<img class=\"ppq-pinboard ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._developerMode : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._pinboardMobile : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" title=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._pinboardMobile : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._pinboardMobile : depth0)) != null ? stack1.title : stack1), depth0))
    + "\" draggable=\"false\" style=\"-moz-user-select: none;\" ondragstart=\"return false;\"/>\n";
},"16":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._selectors : depth0), {"name":"each","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"17":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                        <a class=\"ppq-pin\" href=\"#\" data-id=\"item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n                            <div class=\"ppq-icon ppq-pin-icon icon icon-pin\"></div>\n                            <div class=\"ppq-icon ppq-correct-icon icon icon-tick\"></div>\n                            <div class=\"ppq-icon ppq-incorrect-icon icon icon-cross\"></div>\n                        </a>\n";
},"19":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(20, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"20":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    			    	<a class=\"ppq-pin\" href=\"#\" data-id=\"item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n    			    		<div class=\"ppq-icon ppq-pin-icon icon icon-pin\"></div>\n    			    		<div class=\"ppq-icon ppq-correct-icon icon icon-tick\"></div>\n    			    		<div class=\"ppq-icon ppq-incorrect-icon icon icon-cross\"></div>\n    			    	</a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"ppq-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.ppq : stack1), depth0))
    + "\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"ppq-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n    	<div class=\"ppq-pinboard-container\">\n    		<div class=\"ppq-pinboard-container-inner\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._developerMode : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                <div id=\"ppq-boundary\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.desktopLayout : depth0), {"name":"if","hash":{},"fn":this.program(11, data, depths),"inverse":this.program(14, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._selectable : depth0), {"name":"if","hash":{},"fn":this.program(16, data, depths),"inverse":this.program(19, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\n\n    		</div>\n    	</div>\n    </div>\n    <div>\n        <div class=\"buttons\">\n        </div>\n    </div>\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});Handlebars.templates['questionStrip']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = " disabled ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"2":function(depth0,helpers,partials,data) {
  var stack1, buffer = " complete submitted show-user-answer ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"3":function(depth0,helpers,partials,data) {
  return "correct";
  },"5":function(depth0,helpers,partials,data,depths) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "        <div class=\"qs-slide-container component-item ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n  \n            <a href=\"#\" class=\"qs-controls qs-control-left ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.previous : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-left\"></div>\n            </a>\n            <a href=\"#\" class=\"qs-controls qs-control-right ";
  stack1 = helpers.unless.call(depth0, (depths[1] != null ? depths[1]._isEnabled : depths[1]), {"name":"unless","hash":{},"fn":this.program(9, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.next : stack1), depth0))
    + "\">\n                <div class=\"icon icon-controls-right\"></div>\n            </a>\n            \n            <div class=\"qs-slider clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._subItems : depth0), {"name":"each","hash":{},"fn":this.program(11, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </div>\n\n            <div class=\"qs-strapline\">\n                <div class=\"qs-strapline-header\">\n                    <div class=\"qs-strapline-header-inner qs-noop clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._subItems : depth0), {"name":"each","hash":{},"fn":this.program(14, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    </div>\n                    <div class=\"qs-strapline-header-inner clearfix\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._subItems : depth0), {"name":"each","hash":{},"fn":this.program(16, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </div>\n                </div>\n            </div>\n        </div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, buffer = " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"7":function(depth0,helpers,partials,data) {
  return "incorrect";
  },"9":function(depth0,helpers,partials,data) {
  return " disabled";
  },"11":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                <div class=\"i"
    + escapeExpression(((helper = (helper = helpers._imageId || (depth0 != null ? depth0._imageId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_imageId","hash":{},"data":data}) : helper)))
    + " qs-slider-graphic ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.visited : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"></div>\n";
},"12":function(depth0,helpers,partials,data) {
  return "visited";
  },"14":function(depth0,helpers,partials,data) {
  return "                        <div class=\"qs-strapline-title\">\n                            <h5 class=\"qs-strapline-title-inner\">\n                            </h5>\n                        </div>\n";
  },"16":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                        <div class=\"qs-strapline-title\">\n                            <h5 class=\"qs-strapline-title-inner\">\n                               ";
  stack1 = ((helper = (helper = helpers.strapline || (depth0 != null ? depth0.strapline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"strapline","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + " \n                            </h5>\n                        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "<div class=\"qs-inner component-inner\">\n";
  stack1 = this.invokePartial(partials.component, '    ', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"qs-widget component-widget ";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._isEnabled : depth0), {"name":"unless","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"buttons\"></div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});Handlebars.templates['tabs']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "			<div class=\"tab-content item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n				<div class=\"tab-content-inner\">\n\n					<div class=\"tab-content-item-title\">\n						<div class=\"tab-content-item-title-inner accessible-text-block\" role=\"heading\" aria-level=\"5\" tabindex=\"0\">\n							";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n						</div>\n					</div>\n\n					<div class=\"tab-content-item-body\">\n						<div class=\"tab-content-item-body-inner\">\n							";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n						</div>\n					</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._graphic : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n				</div>\n			</div>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "					<div class=\"tab-content-item-graphic\">\n						<img class=\"tab-content-item-graphic-inner\" src=\"";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" alt=";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + " tabindex=\"0\"/>\n					</div>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "			<a href=\"#\" class=\"tabs-navigation-item\" role=\"button\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.tabTitle || (depth0 != null ? depth0.tabTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tabTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-id=\"item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n				<div class=\"tabs-navigation-item-inner\">\n					";
  stack1 = ((helper = (helper = helpers.tabTitle || (depth0 != null ? depth0.tabTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tabTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n				</div>\n			</a>\n";
},"7":function(depth0,helpers,partials,data) {
  return ". Visited";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"tabs-inner component-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._tabs : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._components : stack1)) != null ? stack1._tabs : stack1)) != null ? stack1.ariaRegion : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n";
  stack1 = this.invokePartial(partials.component, '	', 'component', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "	<div class=\"tabs-widget component-widget clearfix\">\n\n	<div class=\"tabs-content-items\">\n		<div class=\"tabs-content-items-inner\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</div>\n	</div>\n\n	<div class=\"tabs-navigation\">\n		<div class=\"tabs-navigation-inner\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n	</div>\n\n	<div class=\"tabs-content-icon icon icon-arrow-down\"></div>\n\n	</div>\n</div>\n";
},"usePartial":true,"useData":true});Handlebars.templates['adapt-article-reveal']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n<div class=\"article-reveal-inner "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._classes : stack1), depth0))
    + "\" style=\"height:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._height : stack1), depth0))
    + "px; ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._backgroundImage : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.articleReveal : stack1), depth0))
    + "\">\n    \n    <a href=\"#\" class=\"article-reveal-open-button\" style=\"top:"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._triggerPosition : stack1)) != null ? stack1._top : stack1), depth0))
    + "%; left:"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._triggerPosition : stack1)) != null ? stack1._left : stack1), depth0))
    + "%;\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.openArticle : stack1), depth0))
    + "\">\n    <div class=\"article-reveal-open-button-icon icon icon-plus\"></div>\n    <span class=\"article-reveal-open-button-text\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1['_icon-text'] : stack1), depth0))
    + "</span>\n    </a>\n    \n    <a href=\"#\" class=\"article-reveal-close-button\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeArticle : stack1), depth0))
    + "\">\n      <div class=\"article-reveal-close-button-icon icon icon-minus\"></div>\n      <span class=\"article-reveal-close-button-text\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._closeButtonText : stack1), depth0))
    + "</span>\n    </a>\n    \n</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " background: url('"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._backgroundImage : stack1), depth0))
    + "') center top no-repeat; ";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n<div class=\"article-reveal-inner "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._classes : stack1), depth0))
    + "\" style=\"height:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._mobileHeight : stack1), depth0))
    + "px; ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._mobileBackgroundImage : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.articleReveal : stack1), depth0))
    + "\">\n    \n    <a href=\"#\" class=\"article-reveal-open-button\" style=\"top:"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._mobileTriggerPosition : stack1)) != null ? stack1._top : stack1), depth0))
    + "%; left:"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._mobileTriggerPosition : stack1)) != null ? stack1._left : stack1), depth0))
    + "%;\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.openArticle : stack1), depth0))
    + "\">\n    <div class=\"article-reveal-open-button-icon icon icon-plus\"></div>\n    <span class=\"article-reveal-open-button-text\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1['_icon-text'] : stack1), depth0))
    + "</span>\n    </a>\n  \n    <a href=\"#\" class=\"article-reveal-close-button\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeArticle : stack1), depth0))
    + "\">\n      <div class=\"article-reveal-close-button-icon icon icon-minus\"></div>\n      <span class=\"article-reveal-close-button-text\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._closeButtonText : stack1), depth0))
    + "</span>\n    </a>\n\n</div>\n\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return " background: url('"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleReveal : depth0)) != null ? stack1._mobileBackgroundImage : stack1), depth0))
    + "') center top no-repeat; ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isDesktop : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});Handlebars.templates['articleBlockSlider-article']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"article-inner-top\" style=\"background-image:url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleBackgroundTop : depth0)) != null ? stack1.src : stack1), depth0))
    + "); height:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleBackgroundTop : depth0)) != null ? stack1.height : stack1), depth0))
    + "px\"></div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"article-title\">\n        <div class=\"article-title-inner h2\" tabindex=\"0\" role=\"heading\" aria-level=\"2\">\n            ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </div>\n    </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "    <div class=\"article-body\">\n        <div class=\"article-body-inner\">\n            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </div>\n    </div>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "    <div class=\"article-instruction\">\n        <div class=\"article-instruction-inner\">\n            ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </div>\n    </div>\n";
},"9":function(depth0,helpers,partials,data) {
  return " has-arrows";
  },"11":function(depth0,helpers,partials,data) {
  return " has-tabs";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "tabindex=\"0\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.articleBlockSlider : stack1), depth0))
    + "\"";
},"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "style=\"min-height: ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._articleBlockSlider : depth0)) != null ? stack1.minHeight : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "px\"";
},"17":function(depth0,helpers,partials,data) {
  return "	                <a class=\"item-button-arrow\" href=\"#\" data-block-slider=\"left\">\n	                    <div class=\"icon icon-controls-left\"></div>\n	                </a>\n";
  },"19":function(depth0,helpers,partials,data) {
  return "	                <a class=\"item-button-arrow\" href=\"#\" data-block-slider=\"right\">\n	                    <div class=\"icon icon-controls-right\"></div>\n	                </a>\n";
  },"21":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._itemButtons : depth0), {"name":"each","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"22":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "	                <a class=\"item-button "
    + escapeExpression(((helper = (helper = helpers._className || (depth0 != null ? depth0._className : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_className","hash":{},"data":data}) : helper)))
    + "\" href=\"#\" role=\"button\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers._title || (depth0 != null ? depth0._title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_title","hash":{},"data":data}) : helper)))
    + "\" data-block-slider=\"index\" data-block-slider-index=\""
    + escapeExpression(lambda((depth0 != null ? depth0._index : depth0), depth0))
    + "\"><span class=\"item-button-inner\">"
    + escapeExpression(((helper = (helper = helpers._title || (depth0 != null ? depth0._title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_title","hash":{},"data":data}) : helper)))
    + "</span></a>\n";
},"24":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"article-inner-bottom\" style=\"background-image:url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleBackgroundBottom : depth0)) != null ? stack1.src : stack1), depth0))
    + "); height:"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._articleBackgroundBottom : depth0)) != null ? stack1.height : stack1), depth0))
    + "px\"></div>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._articleBackgroundTop : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n<div class=\"article-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"article-block-organise";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._articleBlockSlider : depth0)) != null ? stack1._hasArrows : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._articleBlockSlider : depth0)) != null ? stack1._hasTabs : stack1), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" role=\"region\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaRegions : stack1)) != null ? stack1.articleBlockSlider : stack1), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n	    <div class=\"article-block-slider clearfix\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._articleBlockSlider : depth0)) != null ? stack1.minHeight : stack1), {"name":"if","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n	        <div class=\"block-container clearfix\">\n\n	        </div>\n	    </div>\n	    <div class=\"article-block-toolbar clearfix\">\n	        \n	        <div class=\"item-button-container clearfix\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._articleBlockSlider : depth0)) != null ? stack1._hasArrows : stack1), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._articleBlockSlider : depth0)) != null ? stack1._hasArrows : stack1), {"name":"if","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._articleBlockSlider : depth0)) != null ? stack1._hasTabs : stack1), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	            \n	        </div>\n	         \n	    </div>\n	</div>\n	<div class=\"article-block-bottombar clearfix\"></div>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._articleBackgroundBottom : depth0), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});Handlebars.templates['pageLevelProgress']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isPartOfAssessment : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(26, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <div role=\"listitem\" class=\"page-level-progress-item drawer-item\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    <div class=\"page-level-progress-item-title-inner accessible-text-block h5\">\n                    ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.program(17, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.program(24, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                <button class=\"base page-level-progress-item-title clearfix drawer-item-open\" tabindex=\"0\" role=\"button\" data-page-level-progress-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0));
  },"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0));
  },"10":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"page-level-progress-item-title drawer-item-open disabled clearfix\">\n                    <span class=\"aria-label prevent-default\" tabindex=\"0\" role=\"button\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.locked : stack1), depth0))
    + ". "
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                        <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                            <div class=\"page-level-progress-indicator-bar\">\n                            </div>\n                        </div>\n";
},"13":function(depth0,helpers,partials,data) {
  return "complete";
  },"15":function(depth0,helpers,partials,data) {
  return "incomplete";
  },"17":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isOptional : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.program(20, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"18":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <div class=\"page-level-progress-item-optional-text\">\n                            "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.optionalContent : stack1), depth0))
    + "\n                            </div>\n";
},"20":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                            <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isInteractionComplete : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                                <div class=\"page-level-progress-indicator-bar\">\n                                </div>\n                            </div>\n";
},"22":function(depth0,helpers,partials,data) {
  return "                </button>\n";
  },"24":function(depth0,helpers,partials,data) {
  return "                </div>\n";
  },"26":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <div role=\"listitem\" class=\"page-level-progress-item drawer-item\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(27, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                    <div class=\"page-level-progress-item-title-inner accessible-text-block h5\">\n                    ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(29, data),"inverse":this.program(31, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisible : depth0), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.program(24, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "            </div>\n";
},"27":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                <button class=\"base page-level-progress-item-title clearfix drawer-item-open\" tabindex=\"0\" role=\"button\" data-page-level-progress-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n";
},"29":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                        <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                            <div class=\"page-level-progress-indicator-bar\">\n                            </div>\n                        </div>\n";
},"31":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isOptional : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.program(32, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"32":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                            <div class=\"page-level-progress-indicator page-level-progress-indicator-";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.program(15, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                                <div class=\"page-level-progress-indicator-bar\">\n                                </div>\n                            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"page-level-progress-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgress : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n    <div role=\"list\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.components : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n    <div class=\"aria-label a11y-ignore-focus prevent-default\" tabindex=\"0\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._pageLevelProgress : stack1)) != null ? stack1.pageLevelProgressEnd : stack1), depth0))
    + "\"/>\n</div>\n";
},"useData":true});Handlebars.templates['pageLevelProgressMenu']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"page-level-progress-menu-item-indicator\">\n	<div class=\"page-level-progress-menu-item-indicator-bar\" style=\"width:"
    + escapeExpression(((helper = (helper = helpers.completedChildrenAsPercentage || (depth0 != null ? depth0.completedChildrenAsPercentage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"completedChildrenAsPercentage","hash":{},"data":data}) : helper)))
    + "%\"><span class=\"aria-label\" role=\"region\" tabindex=\"0\"></span></div>\n</div>\n";
},"useData":true});Handlebars.templates['pageLevelProgressNavigation']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"page-level-progress-navigation-completion\">\n    <div class=\"page-level-progress-navigation-bar\"></div>\n</div>\n";
  },"useData":true});Handlebars.templates['resources']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "			<button class=\"base resources-show-all selected\" data-filter=\"all\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.allAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.all : stack1), depth0))
    + "</span>\n			</button>\n";
  stack1 = ((helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", "document", {"name":"if_collection_contains","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", "media", {"name":"if_collection_contains","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_collection_contains || (depth0 && depth0.if_collection_contains) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", "link", {"name":"if_collection_contains","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<button class=\"base resources-show-document\" data-filter=\"document\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.documentAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.document : stack1), depth0))
    + "</span>\n			</button>\n";
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<button class=\"base resources-show-media\" data-filter=\"media\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.mediaAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.media : stack1), depth0))
    + "</span>\n			</button>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<button class=\"base resources-show-link\" data-filter=\"link\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterAria : stack1)) != null ? stack1.linkAria : stack1), depth0))
    + "\" tabindex=\"0\" role=\"button\">\n				<span>"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1._filterButtons : stack1)) != null ? stack1.link : stack1), depth0))
    + "</span>\n			</button>\n";
},"10":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "	<div class=\"resources-item drawer-item "
    + escapeExpression(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_type","hash":{},"data":data}) : helper)))
    + "\">\n		<button class=\"base resources-item-open drawer-item-open\" data-href=\""
    + escapeExpression(((helper = (helper = helpers._link || (depth0 != null ? depth0._link : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_link","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"0\" role=\"button\" aria-label=\""
    + escapeExpression(helpers.lookup.call(depth0, ((stack1 = (depths[1] != null ? depths[1].model : depths[1])) != null ? stack1._filterButtons : stack1), (depth0 != null ? depth0._type : depth0), {"name":"lookup","hash":{},"data":data}))
    + ". "
    + escapeExpression(lambda(((stack1 = (depths[1] != null ? depths[1].model : depths[1])) != null ? stack1.itemAriaExternal : stack1), depth0))
    + ". ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += ". ";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n			<div class=\"drawer-item-title\">\n				<div class=\"drawer-item-title-inner h5\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n			</div>\n			<div class=\"drawer-item-description\">\n				<div class=\"drawer-item-description-inner\">";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n			</div>\n		</button>\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"resources-inner\" role=\"complementary\">\n	<div class=\"resources-filter clearfix resources-col-"
    + escapeExpression(((helpers.return_column_layout_from_collection_length || (depth0 && depth0.return_column_layout_from_collection_length) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", {"name":"return_column_layout_from_collection_length","hash":{},"data":data})))
    + "\">\n";
  stack1 = ((helpers.if_collection_contains_only_one_item || (depth0 && depth0.if_collection_contains_only_one_item) || helperMissing).call(depth0, (depth0 != null ? depth0.resources : depth0), "_type", {"name":"if_collection_contains_only_one_item","hash":{},"fn":this.program(1, data, depths),"inverse":this.program(3, data, depths),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</div>\n	<div class=\"resources-item-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.resources : depth0), {"name":"each","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n	<div class=\"aria-label a11y-ignore-focus prevent-default\" tabindex=\"0\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._extensions : stack1)) != null ? stack1._resources : stack1)) != null ? stack1.resourcesEnd : stack1), depth0))
    + "\"/>\n</div>\n";
},"useData":true,"useDepths":true});Handlebars.templates['trickle-button']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return " locking";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"trickle-button-inner component-inner";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isLocking : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n        <button role=\"button\" class=\"button\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._trickle : depth0)) != null ? stack1._button : stack1)) != null ? stack1.text : stack1), depth0))
    + "</button>\n</div>\n";
},"useData":true});Handlebars.templates['triggered-hide-button']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "<span>";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._triggered : depth0)) != null ? stack1.hideButtonText : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>";
},"3":function(depth0,helpers,partials,data) {
  return "<span class='icon icon-cross'></span>";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<button role=\"button\" tabindex=\"0\" class='triggered-button-hide' data-triggered-id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._triggered : depth0)) != null ? stack1.hideButtonText : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</button>\n";
},"useData":true});Handlebars.templates['triggered-show-button']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "<span>";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._triggered : depth0)) != null ? stack1.showButtonText : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>";
},"3":function(depth0,helpers,partials,data) {
  return "<span class=\"icon icon-plus\"></span>";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._triggered : depth0)) != null ? stack1.showButtonText : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"useData":true});Handlebars.templates['hint']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "		<div class=\"hint-extension-item item-"
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n			<div class=\"hint-extension-item-inner\">\n				<div class=\"hint-extension-item-title\">\n					<div class=\"hint-extension-item-title-inner\">\n						";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n					</div>\n				</div>\n				<div class=\"hint-extension-item-body\">\n					<div class=\"hint-extension-item-body-inner\">\n						";
  stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"body","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n			</div>\n		</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"hint-extension-inner\">\n\n	<a href=\"#\" class=\"hint-extension-button icon icon-light-bulb\"></a>\n\n	<div class=\"hint-extension-widget\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._hint : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n\n</div>\n";
},"useData":true});Handlebars.templates['inspector']=Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, buffer = "<div class=\"inspector-inner\">\n	<";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._tracUrl : depth0), {"name":"if","hash":{},"fn":this.program(2, data, depths),"inverse":this.program(4, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " class=\"inspector-text a11y-ignore\" title=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._parentId : depth0), {"name":"if","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._classes : depth0), {"name":"if","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._layout : depth0), {"name":"if","hash":{},"fn":this.program(10, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "Title: ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(12, data, depths),"inverse":this.program(14, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._component : depth0), {"name":"if","hash":{},"fn":this.program(16, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._selectable : depth0), {"name":"if","hash":{},"fn":this.program(21, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._component : depth0), "matching", {"name":"if_value_equals","hash":{},"fn":this.program(25, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._component : depth0), "slider", {"name":"if_value_equals","hash":{},"fn":this.program(32, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._component : depth0), "textinput", {"name":"if_value_equals","hash":{},"fn":this.program(37, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" tabindex=\"-1\">";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._component : depth0), {"name":"if","hash":{},"fn":this.program(46, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += escapeExpression(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_type","hash":{},"data":data}) : helper)))
    + " <span class=\"inspector-id\">"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "</span></";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._tracUrl : depth0), {"name":"if","hash":{},"fn":this.program(48, data, depths),"inverse":this.program(4, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n	<div class=\"inspector-arrow\"></div>\n</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "a href=\""
    + escapeExpression(((helper = (helper = helpers._tracUrl || (depth0 != null ? depth0._tracUrl : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_tracUrl","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\"";
},"4":function(depth0,helpers,partials,data) {
  return "div";
  },"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "Parent: "
    + escapeExpression(((helper = (helper = helpers._parentId || (depth0 != null ? depth0._parentId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_parentId","hash":{},"data":data}) : helper)))
    + "\n";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "Classes: "
    + escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_classes","hash":{},"data":data}) : helper)))
    + "\n";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "Layout: "
    + escapeExpression(((helper = (helper = helpers._layout || (depth0 != null ? depth0._layout : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_layout","hash":{},"data":data}) : helper)))
    + "\n";
},"12":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)));
  },"14":function(depth0,helpers,partials,data) {
  return "<none>";
  },"16":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\nPage Level Progress: ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._pageLevelProgress : depth0)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(17, data),"inverse":this.program(19, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"17":function(depth0,helpers,partials,data) {
  return "enabled";
  },"19":function(depth0,helpers,partials,data) {
  return "disabled";
  },"21":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\nCorrect:";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"22":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._shouldBeSelected : depth0), {"name":"if","hash":{},"fn":this.program(23, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"23":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helpers.numbers || (depth0 && depth0.numbers) || helperMissing).call(depth0, (data && data.index), {"name":"numbers","hash":{},"data":data})));
},"25":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "\nCorrect:";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(26, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"26":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depths[1] != null ? depths[1]._items : depths[1])) != null ? stack1['1'] : stack1), {"name":"if","hash":{},"fn":this.program(27, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._options : depth0), {"name":"each","hash":{},"fn":this.program(29, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"27":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n"
    + escapeExpression(((helpers.numbers || (depth0 && depth0.numbers) || helperMissing).call(depth0, (data && data.index), {"name":"numbers","hash":{},"data":data})))
    + ".";
},"29":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(30, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"30":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"text","hash":{},"data":data}) : helper)));
},"32":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\nCorrect: ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._correctAnswer : depth0), {"name":"if","hash":{},"fn":this.program(33, data),"inverse":this.program(35, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"33":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers._correctAnswer || (depth0 != null ? depth0._correctAnswer : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_correctAnswer","hash":{},"data":data}) : helper)));
  },"35":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._correctRange : depth0)) != null ? stack1._bottom : stack1), depth0))
    + "–"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._correctRange : depth0)) != null ? stack1._top : stack1), depth0));
},"37":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "\nCorrect:";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._answers : depth0), {"name":"if","hash":{},"fn":this.program(38, data, depths),"inverse":this.program(43, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"38":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._answers : depth0), {"name":"each","hash":{},"fn":this.program(39, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"39":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(40, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"40":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = escapeExpression(lambda(depth0, depth0));
  stack1 = helpers.unless.call(depth0, (data && data.last), {"name":"unless","hash":{},"fn":this.program(41, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"41":function(depth0,helpers,partials,data) {
  return ", ";
  },"43":function(depth0,helpers,partials,data,depths) {
  var stack1;
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._items : depth0), {"name":"each","hash":{},"fn":this.program(44, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"44":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depths[1] != null ? depths[1]._items : depths[1])) != null ? stack1['1'] : stack1), {"name":"if","hash":{},"fn":this.program(27, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._answers : depth0), {"name":"each","hash":{},"fn":this.program(40, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"46":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + " ";
},"48":function(depth0,helpers,partials,data) {
  return "a";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1;
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true,"useDepths":true});Handlebars.templates['prototype-edit']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<a href=\"#\" class=\"a11y-ignore prototype-edit\" tabindex=\"-1\">\nClick here to edit\n</a>";
  },"useData":true});Handlebars.templates['quicknav-bar']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "	<button id=\"previous\" class=\"button button-icon";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._previous : stack1)) != null ? stack1._isHidden : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.isFirstPage : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.isFirstPage : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._previous : stack1)) != null ? stack1.text : stack1), depth0))
    + "\"><div class=\"icon "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._previous : stack1)) != null ? stack1._icon : stack1), depth0))
    + "\"></div></button>\n	<button id=\"root\" class=\"button button-icon";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._root : stack1)) != null ? stack1._isHidden : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._root : stack1)) != null ? stack1.text : stack1), depth0))
    + "\"><div class=\"icon "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._root : stack1)) != null ? stack1._icon : stack1), depth0))
    + "\"></div></button>\n	<button id=\"up\" class=\"button button-icon";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._up : stack1)) != null ? stack1._isHidden : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._up : stack1)) != null ? stack1.text : stack1), depth0))
    + "\"><div class=\"icon "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._up : stack1)) != null ? stack1._icon : stack1), depth0))
    + "\"></div></button>\n	<button id=\"next\" class=\"button button-icon";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._next : stack1)) != null ? stack1._isHidden : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.isLastPage : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.isLastPage : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._next : stack1)) != null ? stack1.text : stack1), depth0))
    + "\"><div class=\"icon "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._next : stack1)) != null ? stack1._icon : stack1), depth0))
    + "\"></div></button>\n";
},"2":function(depth0,helpers,partials,data) {
  return " display-none";
  },"4":function(depth0,helpers,partials,data) {
  return " disabled";
  },"6":function(depth0,helpers,partials,data) {
  return "disabled=\"disabled\"";
  },"8":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "	<button id=\"previous\" class=\"button";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._previous : stack1)) != null ? stack1._isHidden : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.isFirstPage : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.isFirstPage : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._previous : stack1)) != null ? stack1.text : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._previous : stack1)) != null ? stack1.text : stack1), depth0))
    + "</button>\n	<button id=\"root\" class=\"button";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._root : stack1)) != null ? stack1._isHidden : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._root : stack1)) != null ? stack1.text : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._root : stack1)) != null ? stack1.text : stack1), depth0))
    + "</button>\n	<button id=\"up\" class=\"button";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._up : stack1)) != null ? stack1._isHidden : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._up : stack1)) != null ? stack1.text : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._up : stack1)) != null ? stack1.text : stack1), depth0))
    + "</button>\n	<button id=\"next\" class=\"button";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._next : stack1)) != null ? stack1._isHidden : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.isLastPage : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.state : depth0)) != null ? stack1.isLastPage : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._next : stack1)) != null ? stack1.text : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._next : stack1)) != null ? stack1.text : stack1), depth0))
    + "</button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"block-inner quicknav-inner\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1._buttons : stack1)) != null ? stack1._hasIcons : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true});Handlebars.templates['quicknav']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});Handlebars.templates['searchBox']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "	<div class=\"search-title\">\n		<div class=\"search-title-inner\">\n			";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n		</div>\n	</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "	<div class=\"search-description\">\n		<div class=\"search-description-inner\">\n			";
  stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n		</div>\n	</div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = " placeholder=\"";
  stack1 = ((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"placeholder","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\"";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"search-container\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.description : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	<div class=\"search-box\">\n		<input type=\"text\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.placeholder : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " class=\"search-input\">\n		<a href=\"#\" class=\"start-search icon icon-search\"></a>\n	</div>\n\n</div>\n";
},"useData":true});Handlebars.templates['searchResults']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "    <div class=\"search-result\">\n        <div class=\"search-result-inner\">\n            <p class=\"no-results\">";
  stack1 = ((helper = (helper = helpers.noResultsMessage || (depth0 != null ? depth0.noResultsMessage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"noResultsMessage","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</p>\n        </div>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.searchResults : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <div class=\"search-result\">\n            <div class=\"search-result-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.visible : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.program(7, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                <div class=\"relevance-indicator\">\n                    <div class=\"relevance-indicator-inner\" style=\"width:"
    + escapeExpression(((helper = (helper = helpers.searchPercentage || (depth0 != null ? depth0.searchPercentage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"searchPercentage","hash":{},"data":data}) : helper)))
    + "%\"></div>    \n                </div>\n            </div>\n        </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                    <a href=\"#\" class=\"result-title\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</a>\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                    <div class=\"result-title content-hidden\" data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"search-results-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.noResults : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true});Handlebars.templates['boxmenu-item']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "tabindex=\"0\"";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" />\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.visited : stack1), depth0));
  },"7":function(depth0,helpers,partials,data) {
  return "visited";
  },"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "            <span class=\"menu-item-duration accessible-text-block\" role=\"region\" tabindex=\"0\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = ((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"duration","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda;
  stack1 = lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.durationLabel : stack1), depth0);
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"menu-item-inner\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuItem : stack1), depth0))
    + "\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuItem : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n    <div class=\"menu-item-graphic\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0._graphic : depth0)) != null ? stack1.src : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    </div>\n    <div class=\"menu-item-title\">\n        <div class=\"menu-item-title-inner h3 accessible-text-block\" role=\"heading\" aria-level=\"2\" tabindex=\"0\">";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n    </div>\n    <div class=\"menu-item-body\">\n        <div class=\"menu-item-body-inner\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n    </div>\n    <div class=\"menu-item-button\">\n        <button role=\"button\" aria-label=\""
    + escapeExpression(((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkText","hash":{},"data":data}) : helper)))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" class=\"";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isVisited : depth0), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " accessible-text-block\">\n            ";
  stack1 = ((helper = (helper = helpers.linkText || (depth0 != null ? depth0.linkText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"linkText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n        </button>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.duration : depth0), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n";
},"useData":true});Handlebars.templates['boxmenu']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "				<div class=\"menu-title\">\n					<div class=\"menu-title-inner h1 accessible-text-block\" role=\"heading\" aria-level=\"1\" tabindex=\"0\">\n						";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "				<div class=\"menu-body\">\n					<div class=\"menu-body-inner accessible-text-block\">\n						";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n				</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"menu-container\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.ariaRegion : stack1), depth0))
    + "\">\n	<div class='menu-container-inner box-menu-inner clearfix'>\n		<div class=\"menu-header\">\n			<div class=\"menu-header-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n		</div>\n	</div>\n	<div class=\"aria-label relative a11y-ignore-focus prevent-default\" tabindex=\"0\" role=\"region\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._menu : stack1)) != null ? stack1._boxmenu : stack1)) != null ? stack1.menuEnd : stack1), depth0))
    + "</div>\n</div>\n";
},"useData":true});Handlebars.templates['article']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"article-title ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n            <div role=\"heading\" tabindex=\"0\" class=\"article-title-inner h2\"  aria-level=\"2\">\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda;
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._articleHeading : stack1), depth0);
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._articleHeading : stack1), "magazine", {"name":"if_value_equals","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"5":function(depth0,helpers,partials,data) {
  return "<span><span>";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._articleHeading : stack1), "magazine", {"name":"if_value_equals","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"8":function(depth0,helpers,partials,data) {
  return "</span></span>";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"article-body\">\n            <div class=\"article-body-inner\">\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"article-instruction\">\n            <div class=\"article-instruction-inner\">\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n"
    + escapeExpression(((helper = (helper = helpers.themeConfig || (depth0 != null ? depth0.themeConfig : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"themeConfig","hash":{},"data":data}) : helper)))
    + "\n\n<div class=\"article-inner block-container\">\n\n    <div class=\"article-header\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n\n</div>\n";
},"useData":true});Handlebars.templates['block']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "        <div class=\"block-title ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n            <div role=\"heading\" tabindex=\"0\" class=\"block-title-inner h3\"  aria-level=\"3\">\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda;
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._blockHeading : stack1), depth0);
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._blockHeading : stack1), "magazine", {"name":"if_value_equals","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"5":function(depth0,helpers,partials,data) {
  return "<span><span>";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._blockHeading : stack1), "magazine", {"name":"if_value_equals","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"8":function(depth0,helpers,partials,data) {
  return "</span></span>";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"block-body\">\n            <div class=\"block-body-inner\">\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "        <div class=\"block-instruction\">\n            <div class=\"block-instruction-inner\">\n                ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </div>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n"
    + escapeExpression(((helper = (helper = helpers.themeConfig || (depth0 != null ? depth0.themeConfig : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"themeConfig","hash":{},"data":data}) : helper)))
    + "\n<div class=\"block-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n    <div class=\"component-container\">\n    </div>\n</div>";
},"useData":true});Handlebars.templates['buttons']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "    <div class=\"buttons-display\">\n        <div class=\"buttons-marking-icon icon display-none\">\n        </div>\n        <div class=\"buttons-display-inner\">\n        </div>\n    </div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"buttons-inner\">\n    <div class=\"buttons-cluster clearfix\">\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0._shouldDisplayAttempts : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        <button class=\"buttons-action\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\">";
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._submit : stack1)) != null ? stack1.buttonText : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</button>\n        <button class=\"buttons-feedback\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.ariaLabel : stack1), depth0))
    + "\" disabled=\"true\">";
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1._showFeedback : stack1)) != null ? stack1.buttonText : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += "</button>\n    </div>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._shouldDisplayAttempts : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});Handlebars.templates['drawer']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"drawer-inner\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.drawer : stack1), depth0))
    + "\">\n	<div class=\"drawer-toolbar clearfix\">\n		<div class=\"drawer-back-button\">\n		<button class=\"base drawer-back icon icon-controls-small-left\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\">\n		</button>\n		</div>\n		<div class=\"drawer-close-button\">\n		<button class=\"base drawer-close icon icon-cross\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closeDrawer : stack1), depth0))
    + "\">\n		</button>\n		</div>\n	</div>\n	<div class=\"drawer-holder\">\n	</div>\n</div>\n";
},"useData":true});Handlebars.templates['drawerItem']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<button class=\"base drawer-item-open "
    + escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"className","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"drawer-item-title\">\n		<div class=\"drawer-item-title-inner h5\">";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</div>\n	</div>\n	<div class=\"drawer-item-description\">\n		<div class=\"drawer-item-description-inner\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.description : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n	</div>\n</button>";
},"useData":true});Handlebars.templates['loading']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"loading\">\n	<div class=\"loader-gif\"></div>\n</div>\n";
},"useData":true});Handlebars.templates['navigation']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"navigation-inner clearfix\" role=\"navigation\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigation : stack1), depth0))
    + "\">\n    <button class=\"base navigation-back-button icon icon-controls-small-left\" data-event=\"backButton\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.previous : stack1), depth0))
    + "\"></button>\n    <button class=\"base navigation-drawer-toggle-button icon icon-list\" data-event=\"toggleDrawer\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.navigationDrawer : stack1), depth0))
    + "\"></button>\n</div>";
},"useData":true});Handlebars.templates['notify']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                    <div class=\"notify-popup-icon\">\n                        <div class=\"icon";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "prompt", {"name":"if_value_equals","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "alert", {"name":"if_value_equals","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n                        </div>\n                    </div>\n";
},"2":function(depth0,helpers,partials,data) {
  return " icon-question";
  },"4":function(depth0,helpers,partials,data) {
  return " icon-warning";
  },"6":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <div class=\"notify-popup-title\">\n                        <div class=\"notify-popup-title-inner\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n                        ";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                        </div>\n                    </div>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "                    <div class=\"notify-popup-body\">\n                        <div class=\"notify-popup-body-inner\">";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n                    </div>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "                <div class=\"notify-popup-buttons\">\n                    <button class=\"notify-popup-button notify-popup-alert-button\" role=\"button\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.confirmText || (depth0 != null ? depth0.confirmText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"confirmText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</button>\n                </div>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, buffer = "                <div class=\"notify-popup-buttons\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0._prompts : depth0), {"name":"each","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                </div>\n";
},"13":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                        <button class=\"notify-popup-button notify-popup-prompt-button\" data-event=\""
    + escapeExpression(((helper = (helper = helpers._callbackEvent || (depth0 != null ? depth0._callbackEvent : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_callbackEvent","hash":{},"data":data}) : helper)))
    + "\" role=\"button\" aria-label=\"";
  stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"promptText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((helper = (helper = helpers.promptText || (depth0 != null ? depth0.promptText : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"promptText","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</button>\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <button class=\"base notify-popup-done\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n                <div class=\"notify-popup-icon-close icon icon-cross\"></div>\n            </button>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"notify-popup notify-type-"
    + escapeExpression(((helper = (helper = helpers._type || (depth0 != null ? depth0._type : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_type","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers._classes || (depth0 != null ? depth0._classes : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_classes","hash":{},"data":data}) : helper)))
    + "\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\n    <div class=\"notify-popup-inner\">\n        <div class=\"notify-popup-content\">\n            <div class=\"notify-popup-content-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._showIcon : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.title : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "                              \n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "alert", {"name":"if_value_equals","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "prompt", {"name":"if_value_equals","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            </div>\n        </div>\n";
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, (depth0 != null ? depth0._type : depth0), "popup", {"name":"if_value_equals","hash":{},"fn":this.program(15, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </div>\n</div>\n\n\n<div class=\"notify-shadow\"></div>";
},"useData":true});Handlebars.templates['notifyPush']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"notify-push-inner\" role=\"region\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.feedbackPopUp : stack1), depth0))
    + "\">\n	<div class=\"notify-push-title\">\n		<div class=\"notify-push-title-inner h5\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n			";
  stack1 = ((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n		</div>\n	</div>\n	<div class=\"notify-push-body\">\n		<div class=\"notify-push-body-inner\">\n			";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n		</div>\n	</div>\n</div>\n<button class=\"base notify-push-close\" role=\"button\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.closePopup : stack1), depth0))
    + "\">\n	<span class=\"icon icon-cross\"></span>\n</button>";
},"useData":true});Handlebars.templates['page']=Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n    	<div class=\"page-header ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._pageHeader : stack1)) != null ? stack1._showScrollButton : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n    		<div class=\"page-header-inner clearfix\">\n\n    			<div class=\"page-header-content\">\n    				<div class=\"page-header-content-inner\">\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(13, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    				</div>\n    			</div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._pageHeader : stack1)) != null ? stack1._showScrollButton : stack1), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n    		</div>\n    	</div>\n\n";
},"2":function(depth0,helpers,partials,data) {
  return "has-scroll";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "				        <div class=\"page-title ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n				            <div role=\"heading\" tabindex=\"0\" class=\"page-title-inner h1\"  aria-level=\"1\">\n				                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n				                ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n				                ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n				            </div>\n				        </div>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda;
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._pageHeading : stack1), depth0);
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._pageHeading : stack1), "magazine", {"name":"if_value_equals","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"8":function(depth0,helpers,partials,data) {
  return "<span><span>";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._pageHeading : stack1), "magazine", {"name":"if_value_equals","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"11":function(depth0,helpers,partials,data) {
  return "</span></span>";
  },"13":function(depth0,helpers,partials,data) {
  var stack1, buffer = "					    <div class=\"page-body\">\n					        <div class=\"page-body-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.pageBody : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.program(16, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					        </div>\n					    </div>\n";
},"14":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "					            	";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.pageBody : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"16":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "					            	";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"18":function(depth0,helpers,partials,data) {
  return "    			<div class=\"page-header-scroll-button\">\n    				<button class=\"base page-header-scroll-button-inner icon icon-controls-down a11y-ignore\" tabindex=\"-1\" aria-hidden=\"true\"></button>\n    			</div>\n";
  },"20":function(depth0,helpers,partials,data) {
  var stack1, buffer = "		<div class=\"page-header-content\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(23, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n";
},"21":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "			<div class=\"page-title\">\n				<div class=\"page-title-inner h1\" tabindex=\"0\" role=\"heading\" aria-level=\"1\">\n					";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n				</div>\n			</div>\n";
},"23":function(depth0,helpers,partials,data) {
  var stack1, buffer = "			<div class=\"page-body\">\n				<div class=\"page-body-inner\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.pageBody : depth0), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.program(26, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</div>\n			</div>\n";
},"24":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "						";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.pageBody : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"26":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "						";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"28":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <div class=\"page-footer\" style=\"background-color:"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._pageFooter : stack1)) != null ? stack1._backgroundColor : stack1), depth0))
    + "; min-height\">\n    	<div class=\"page-footer-inner clearfix\"></div>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"page-inner article-container\" role=\"main\" aria-label=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._accessibility : depth0)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.page : stack1), depth0))
    + "\">\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._pageHeader : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(20, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._pageFooter : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(28, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});Handlebars.templates['shadow']=Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"shadow\" class=\"shadow display-none\"></div>";
},"useData":true});Handlebars.registerPartial('buttons',Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, buffer = "<button class=\"base button submit\">\n    <span>  \n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.submit : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += " \n    </span>\n</button>\n<button class=\"base button reset\">\n    <span>\n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.reset : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += " \n    </span>\n</button> \n<button class=\"base button model\">\n    <span> \n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.showCorrectAnswer : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  buffer += " \n    </span>\n</button>\n<button class=\"base button user\">\n    <span>\n        ";
  stack1 = lambda(((stack1 = (depth0 != null ? depth0._buttons : depth0)) != null ? stack1.hideCorrectAnswer : stack1), depth0);
  if (stack1 != null) { buffer += stack1; }
  return buffer + " \n    </span>\n</button>";
},"useData":true}));Handlebars.registerPartial('component',Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-title component-title ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n	    <div role=\"heading\" tabindex=\"0\" class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-title-inner component-title-inner\"  aria-level=\"4\">\n	        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	        ";
  stack1 = ((helper = (helper = helpers.displayTitle || (depth0 != null ? depth0.displayTitle : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"displayTitle","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n	        ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._isEnabled : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	    </div>\n	</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda;
  stack1 = lambda(((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._componentHeading : stack1), depth0);
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"4":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._componentHeading : stack1), "magazine", {"name":"if_value_equals","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"5":function(depth0,helpers,partials,data) {
  return "<span><span>";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing;
  stack1 = ((helpers.if_value_equals || (depth0 && depth0.if_value_equals) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0._theme : depth0)) != null ? stack1._headings : stack1)) != null ? stack1._componentHeading : stack1), "magazine", {"name":"if_value_equals","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"8":function(depth0,helpers,partials,data) {
  return "</span></span>";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-body component-body\">\n	    <div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-body-inner component-body-inner\">\n	        ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	    </div>\n	</div>\n";
},"12":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "	<div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction component-instruction\">\n	    <div class=\""
    + escapeExpression(((helper = (helper = helpers._component || (depth0 != null ? depth0._component : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_component","hash":{},"data":data}) : helper)))
    + "-instruction-inner component-instruction-inner\">\n	        ";
  stack1 = ((helpers.a11y_text || (depth0 && depth0.a11y_text) || helperMissing).call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"a11y_text","hash":{},"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n	    </div>\n	</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = escapeExpression(((helper = (helper = helpers.themeConfig || (depth0 != null ? depth0.themeConfig : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"themeConfig","hash":{},"data":data}) : helper)))
    + "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.body : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.instruction : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true}));Handlebars.registerPartial('state',Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-complete\">"
    + escapeExpression(((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helperMissing).call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"a11y_normalize","hash":{},"data":data})))
    + " "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.complete : stack1), depth0))
    + " ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isQuestionType : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._canShowFeedback : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"3":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isCorrect : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.correct : stack1), depth0));
  },"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incorrect : stack1), depth0));
  },"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "		<span tabindex=\"0\" role=\"region\" class=\"aria-label a11y-ignore-focus prevent-default\" id=\"buttons-aria-label-incomplete\">"
    + escapeExpression(((helpers.a11y_normalize || (depth0 && depth0.a11y_normalize) || helperMissing).call(depth0, (depth0 != null ? depth0.displayTitle : depth0), {"name":"a11y_normalize","hash":{},"data":data})))
    + " "
    + escapeExpression(lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0._globals : depth0)) != null ? stack1._accessibility : stack1)) != null ? stack1._ariaLabels : stack1)) != null ? stack1.incomplete : stack1), depth0))
    + "</span>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"accessibility-state\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._isComplete : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true}));});