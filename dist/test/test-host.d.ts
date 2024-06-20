import { Diagnostic } from "@typespec/compiler";
export declare function createUdtVersioningTestHost(): Promise<import("@typespec/compiler/testing").TestHost>;
export declare function createUdtVersioningTestRunner(): Promise<import("@typespec/compiler/testing").BasicTestRunner>;
export declare function emitWithDiagnostics(code: string): Promise<[Record<string, string>, readonly Diagnostic[]]>;
export declare function emit(code: string): Promise<Record<string, string>>;
