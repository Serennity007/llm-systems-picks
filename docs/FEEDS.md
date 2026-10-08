# AI工程精选来源池

默认只订阅本仓库的 [人工精选 RSS](https://serennity007.github.io/llm-systems-picks/feed.xml)。来源池只供维护者发现候选，不整源导入。不收云厂商通用营销、模型发布速报和泛软件工程资讯。

由 src/feeds.js 自动生成；混合来源中的宣传、公告和跑题文章逐篇排除。源可抓取不代表所有文章应进入频道。

| 来源 | 为什么参考 | 质量依据 | 代表文章 | 候选订阅 |
| --- | --- | --- | --- | --- |
| FlashInfer | 维护者讲解注意力、采样、MoE 与 GPU 内核；作为候选池，只发布人工挑选的文本推理技术文章。 | 实现团队署名，包含公开 API、后端代码、正确性检查与硬件/执行模式限定；不是第三方新闻改写。 | [FlashInfer Autotuner v2: Tune the Way You Serve](https://flashinfer.ai/2026/09/22/autotuner-v2.html) | [候选 RSS](https://flashinfer.ai/feed.xml) |
| LMCache Engineering | KV cache、存储层、可恢复性与推理工作负载；专注基础设施，不导入全量动态。 | LMCache 与实际贡献者共同署名，列出实现 PR、I/O 约束、故障恢复规则；明确区分正确性证明与性能收益。 | [Raw Block in LMCache: Building a Fast, Recoverable NVMe Tier for KV Cache](https://blog.lmcache.ai/en/2026/09/22/raw-block-in-lmcache-building-a-fast-recoverable-nvme-tier-for-kv-cache/) | [候选 RSS](https://blog.lmcache.ai/en/feed/) |
| vLLM Engineering | 候选池混有多模态条目；本仓库只手选文本推理、P/D、缓存等实质技术文，不默认订阅该全量源。 | 核心实现者给出部署命令、同硬件比较、指标与适用条件；公开说明 P/D 可能损害首 token 延迟。 | [Taking vLLM Apart: A Practical Guide to Disaggregated Serving](https://vllm.ai/blog/2026-09-29-disaggregated-serving-guide) | [候选 RSS](https://vllm.ai/blog/rss.xml) |
| llm-d Engineering | 分布式文本推理的路由与 KV 共享；原 feed 含视觉/多模态文章，这些不进入 picks。 | Google、IBM 与 Red Hat 实作工程师解释调度设计、负载条件、实验配置和局限；有完整 benchmark 而非概念介绍。 | [Sticky Until Saturated: Token-Aware Routing in llm-d](https://llm-d.ai/blog/sticky-until-saturated-token-aware-routing) | [候选 RSS](https://llm-d.ai/blog/rss.xml) |

## 未采用或不整源订阅

| 候选 | 原因 | 地址 |
| --- | --- | --- |
| SGLang 官方 blog RSS | 实际抓取返回 HTML，不能解析为 RSS/Atom；官方网站很有价值，但本轮未找到可用原生 RSS，不伪造订阅地址。 | [候选地址](https://www.sglang.io/blog/rss.xml) |
| LMSYS Blog RSS | 实际 HTTP 404；/rss.xml 同样 404。 | [候选地址](https://www.lmsys.org/blog/feed.xml) |
| Modal Blog 全量 | 可解析 140 条，但混合公司新闻、产品更新与图像生成；本轮工程候选池已有四个更专门的实作来源。 | [候选地址](https://modal.com/blog/atom.xml) |
| Tim Dettmers 全量 | 可解析，最新 2026-09-21；研究、职业建议和 agent 文章混合，当前四个维护者来源对文本推理部署更集中。 | [候选地址](https://timdettmers.com/feed/) |
| 泛关键词推理教程/SEO 内容 | 检索到多篇关键词完整但没有可核实的一手实现或实验；不为凑数收录二手概述。 | — |
| 上游候选池中的视觉/视频/多模态条目 | 逐篇排除，包括 vLLM Video Captioning、llm-d Serving Multimodal 与 Kimi-VL；只发布上述人工白名单。 | — |

无公开 RSS 的优质网页不伪造订阅地址。网络不可达只说明当前环境不可用，不代表源站不存在。
