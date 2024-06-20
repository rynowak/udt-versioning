import { createTypeSpecLibrary, definePackageFlags, setTypeSpecNamespace } from "@typespec/compiler";
import type { DecoratorContext, Model, Type } from "@typespec/compiler";

export const $lib = createTypeSpecLibrary({
  name: "udt-versioning",
  diagnostics: {},
} as const);

export const $flags = definePackageFlags({
  decoratorArgMarshalling: "new",
});

export const { reportDiagnostic, createDiagnostic } = $lib;

export function $resource(context: DecoratorContext, target: Model) {
}
setTypeSpecNamespace("Radius", $resource);