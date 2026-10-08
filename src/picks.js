// 每篇审核原站；摘要与精选理由为原创，不转载正文。
export const CURATED_ON = '2026-10-09';
export const PICKS = [
  {
    "id": "vllm-disaggregated-serving-guide",
    "title": "Taking vLLM Apart: A Practical Guide to Disaggregated Serving",
    "url": "https://vllm.ai/blog/2026-09-29-disaggregated-serving-guide",
    "published": "2026-09-29T00:00:00Z",
    "sourceId": "vllm",
    "summary": "逐步拆开 prefill、decode 与 CPU 前端，给出部署示例，并用相同硬件说明拆分如何改善尾延迟、又如何被 KV 传输拖累。",
    "reason": "同时回答何时值得拆分、何时应继续共置；有实际命令和失败条件，适合做部署决策前的技术读物。"
  },
  {
    "id": "flashinfer-autotuner-v2",
    "title": "FlashInfer Autotuner v2: Tune the Way You Serve",
    "url": "https://flashinfer.ai/2026/09/22/autotuner-v2.html",
    "published": "2026-09-22T00:00:00Z",
    "sourceId": "flashinfer",
    "summary": "解释为什么 eager 调用与 CUDA Graph 回放会选出不同的最优内核，并展示调优结果缓存、兼容性校验与多 rank 一致性的实现。",
    "reason": "把性能测量边界与生产复用正确性连起来；有对照实验，而不是只展示单个内核的最快数字。"
  },
  {
    "id": "lmcache-raw-block",
    "title": "Raw Block in LMCache: Building a Fast, Recoverable NVMe Tier for KV Cache",
    "url": "https://blog.lmcache.ai/en/2026/09/22/raw-block-in-lmcache-building-a-fast-recoverable-nvme-tier-for-kv-cache/",
    "published": "2026-09-22T23:07:18Z",
    "sourceId": "lmcache",
    "summary": "沿实现演进介绍 KV cache 的裸块 NVMe 层：定长槽、直接 I/O、恢复元数据、io_uring 与多进程配额，交代各路径的设备约束。",
    "reason": "有具体 PR 和故障恢复规则，并坦诚指出正确性通过不等于延迟更好，适合存储/推理工程师精读。"
  },
  {
    "id": "flashinfer-mega-moe",
    "title": "MegaMoE in FlashInfer: Fused Expert-Parallel MoE Kernels",
    "url": "https://flashinfer.ai/2026/09/22/mega-moe.html",
    "published": "2026-09-22T00:00:00Z",
    "sourceId": "flashinfer",
    "summary": "将 expert dispatch、量化、矩阵运算与结果合并放入持久内核，说明通信/计算重叠、不同后端与精度权衡。",
    "reason": "同时提供调用接口、分布式正确性检查和明确硬件范围；比较量化配置时提醒结合准确性门槛阅读。"
  },
  {
    "id": "vllm-tiered-kv-offloading",
    "title": "Tiered KV Cache Offloading in vLLM",
    "url": "https://vllm.ai/blog/2026-09-10-tiered-kv-offloading",
    "published": "2026-09-10T00:00:00Z",
    "sourceId": "vllm",
    "summary": "以 CPU DRAM 为中心组织 GPU、文件系统、对象存储与远端缓存，说明异步卸载、按需加载和跨并行配置共享的内存布局。",
    "reason": "给出真实配置与缓存生命周期，能直接帮助理解长上下文服务为什么反复重算、如何扩展缓存容量。"
  },
  {
    "id": "lmcache-kv-editing-sdk",
    "title": "From Research Paper to Real Workload: KV-Cache Editing with the LMCache SDK",
    "url": "https://blog.lmcache.ai/en/2026/09/07/from-research-paper-to-real-workload-kv-cache-editing-with-the-lmcache-sdk/",
    "published": "2026-09-08T06:55:00Z",
    "sourceId": "lmcache",
    "summary": "用 prefill、主机侧编辑、decode 三阶段接口将 KV 压缩实验接到实际推理栈，并避免编辑开销混进 GPU 热路径。",
    "reason": "不止介绍算法：具体解释中间张量、缓存布局与并发请求如何打通，适合检验研究优化能否落地。"
  },
  {
    "id": "llm-d-token-aware-routing",
    "title": "Sticky Until Saturated: Token-Aware Routing in llm-d",
    "url": "https://llm-d.ai/blog/sticky-until-saturated-token-aware-routing",
    "published": "2026-08-17T09:00:00Z",
    "sourceId": "llm-d",
    "summary": "让请求优先命中已有前缀缓存，节点达到饱和阈值后再按负载分配；分别匹配 prefill 与 decode 的瓶颈。",
    "reason": "解释缓存亲和造成热点的反例、阈值校准和实验配置；基准范围与单次运行限制都有交代。"
  },
  {
    "id": "llm-d-p2p-kv-sharing",
    "title": "Pull, Don't Recompute: Peer-to-Peer KV Cache Sharing in llm-d",
    "url": "https://llm-d.ai/blog/p2p-kv-cache-sharing-llm-d",
    "published": "2026-08-15T09:00:00Z",
    "sourceId": "llm-d",
    "summary": "节点忙碌时把请求送往空闲节点，再从原节点拉取已计算的 KV；介绍路由器、CPU 缓存层和 NIXL 的职责。",
    "reason": "说明短前缀传输可能不划算、本地命中时无需搬运；对照实验区分缓存复制收益与完整调度策略收益。"
  }
];
