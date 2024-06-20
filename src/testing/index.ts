import { resolvePath } from "@typespec/compiler";
import { createTestLibrary, TypeSpecTestLibrary } from "@typespec/compiler/testing";
import { fileURLToPath } from "url";

export const UdtVersioningTestLibrary: TypeSpecTestLibrary = createTestLibrary({
  name: "udt-versioning",
  packageRoot: resolvePath(fileURLToPath(import.meta.url), "../../../../"),
});
