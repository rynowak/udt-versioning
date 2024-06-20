import { resolvePath } from "@typespec/compiler";
import { createTestLibrary } from "@typespec/compiler/testing";
import { fileURLToPath } from "url";
export const UdtVersioningTestLibrary = createTestLibrary({
    name: "udt-versioning",
    packageRoot: resolvePath(fileURLToPath(import.meta.url), "../../../../"),
});
//# sourceMappingURL=index.js.map