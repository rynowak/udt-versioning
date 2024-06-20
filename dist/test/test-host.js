import { resolvePath } from "@typespec/compiler";
import { createTestHost, createTestWrapper, expectDiagnosticEmpty, } from "@typespec/compiler/testing";
import { UdtVersioningTestLibrary } from "../src/testing/index.js";
export async function createUdtVersioningTestHost() {
    return createTestHost({
        libraries: [UdtVersioningTestLibrary],
    });
}
export async function createUdtVersioningTestRunner() {
    const host = await createUdtVersioningTestHost();
    return createTestWrapper(host, {
        compilerOptions: {
            noEmit: false,
            emit: ["udt-versioning"],
        },
    });
}
export async function emitWithDiagnostics(code) {
    const runner = await createUdtVersioningTestRunner();
    await runner.compileAndDiagnose(code, {
        outputDir: "tsp-output",
    });
    const emitterOutputDir = "./tsp-output/udt-versioning";
    const files = await runner.program.host.readDir(emitterOutputDir);
    const result = {};
    for (const file of files) {
        result[file] = (await runner.program.host.readFile(resolvePath(emitterOutputDir, file))).text;
    }
    return [result, runner.program.diagnostics];
}
export async function emit(code) {
    const [result, diagnostics] = await emitWithDiagnostics(code);
    expectDiagnosticEmpty(diagnostics);
    return result;
}
//# sourceMappingURL=test-host.js.map