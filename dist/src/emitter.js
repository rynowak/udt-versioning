import { emitFile, resolvePath } from "@typespec/compiler";
export async function $onEmit(context) {
    if (!context.program.compilerOptions.noEmit) {
        await emitFile(context.program, {
            path: resolvePath(context.emitterOutputDir, "output.txt"),
            content: "Hello world\n",
        });
    }
}
//# sourceMappingURL=emitter.js.map