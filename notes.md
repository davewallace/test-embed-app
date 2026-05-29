# Problem: Shadow DOM styles not isolated from inherited parent styles

> that's one approach, but isn't the shadow dom suppose to be isolated from parent styles?

## Claude response:

You're right — the shadow DOM does block parent stylesheets from applying inside it. External <link> and <style> rules from the parent document won't match elements inside the shadow root.

What does leak through is CSS inheritance. Properties like font-family, color, line-height, font-size, direction, etc. naturally inherit down the DOM tree, and that inheritance crosses the shadow boundary because the shadow host is still a child of the parent DOM.

So the shadow DOM isolates against:

Parent document's class/ID/element selectors
Parent <style> and <link> rules
But it does not isolate against:

Inherited properties flowing from the host element's computed styles
CSS custom properties (they inherit by design)
The :host { all: initial; } fix is the standard way to sever that inheritance at the boundary. It's not a workaround — it's the intended mechanism when you want full style isolation including inherited properties.


# TODO
 - accessible iframes & config + iframe abstraction (`title` and maintain logical structure inside, guidance)
 - http/https + CORS for `inject` mode?
 - Fix half-thought-out Block header removal...

# Assumptions
 - Cross-origin is OK, window.postMessage required
 - Totara App script injected or App built with Totara npm bundle
 - A root DOM node is needed for reliable App height measurement. The body element can't be relied upon (iframe scrolling messes with a stable calculation, debouncing would cause jank with smooth #app controlled animated element height changes)
 - Theme inheritance-resolved CSS Variable API to bundle in the #app, or ideally pass to iframe at runtime