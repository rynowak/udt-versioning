import { createTypeSpecLibrary, definePackageFlags, setTypeSpecNamespace } from "@typespec/compiler";
export const $lib = createTypeSpecLibrary({
    name: "udt-versioning",
    diagnostics: {},
});
export const $flags = definePackageFlags({
    decoratorArgMarshalling: "new",
});
export const { reportDiagnostic, createDiagnostic } = $lib;
export function $resource(context, target) {
}
setTypeSpecNamespace("Radius", $resource);
//# sourceMappingURL=lib.js.map