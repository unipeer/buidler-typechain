export interface TypechainConfig {
  outDir?: string;
  target?: "ethers-v4" | "truffle" | "web3-v1" | "ethers-v5";
  onCompile?: boolean;
  onTest?: boolean;
}
