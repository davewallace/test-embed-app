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