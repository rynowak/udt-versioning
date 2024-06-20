import { createTypeSpecLibrary } from "@typespec/compiler";

export const $lib = createTypeSpecLibrary({
  name: "udt-versioning",
  diagnostics: {},
});

export const { reportDiagnostic, createDiagnostic } = $lib;
