import "../dist/src/index.js";

using TypeSpec.Reflection;

namespace Radius;

model Resource<TProperties> {
    @visibility("read")
    name: string;

    @visibility("read")
    id: string;

    @visibility("read")
    type: string;

    tags?: Record<string>;
    properties: TProperties;
}

enum Scope {
    ResourceGroup,
}

extern dec resource(target: Model);