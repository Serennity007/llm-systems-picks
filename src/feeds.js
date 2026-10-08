// 频道与候选来源唯一配置；来源池不是默认订阅。
export const DIRECTION = {
  "input": "llm-systems",
  "slug": "llm-systems-picks",
  "name": "AI工程精选",
  "icon": "zap",
  "scope": "LLM 推理引擎、部署、性能优化与生产系统",
  "boundary": "不收云厂商通用营销、模型发布速报和泛软件工程资讯。"
};
export const CURATED_FEEDS = [
  {
    "id": "llm-systems-picks",
    "name": "AI工程精选",
    "category": "article",
    "siteUrl": "https://github.com/Serennity007/llm-systems-picks",
    "feedUrl": "https://serennity007.github.io/llm-systems-picks/feed.xml",
    "note": "人工逐篇精选，附原创摘要与推荐理由；审核并提交后才更新"
  }
];
export const SOURCE_FEEDS = [
  {
    "id": "flashinfer",
    "name": "FlashInfer",
    "siteUrl": "https://flashinfer.ai",
    "feedUrl": "https://flashinfer.ai/feed.xml",
    "note": "维护者讲解注意力、采样、MoE 与 GPU 内核；作为候选池，只发布人工挑选的文本推理技术文章。",
    "quality": "实现团队署名，包含公开 API、后端代码、正确性检查与硬件/执行模式限定；不是第三方新闻改写。",
    "evidenceUrl": "https://flashinfer.ai/2026/09/22/autotuner-v2.html",
    "evidenceTitle": "FlashInfer Autotuner v2: Tune the Way You Serve",
    "verification": {
      "status": 200,
      "format": "atom",
      "itemCount": 9,
      "bytes": 218486,
      "latest": "2026-09-22T01:00:00Z",
      "method": "本机 urllib 实际 HTTP 抓取并用 ElementTree 解析；文章另用 Exa 阅读原站正文"
    }
  },
  {
    "id": "lmcache",
    "name": "LMCache Engineering",
    "siteUrl": "https://blog.lmcache.ai/en/",
    "feedUrl": "https://blog.lmcache.ai/en/feed/",
    "note": "KV cache、存储层、可恢复性与推理工作负载；专注基础设施，不导入全量动态。",
    "quality": "LMCache 与实际贡献者共同署名，列出实现 PR、I/O 约束、故障恢复规则；明确区分正确性证明与性能收益。",
    "evidenceUrl": "https://blog.lmcache.ai/en/2026/09/22/raw-block-in-lmcache-building-a-fast-recoverable-nvme-tier-for-kv-cache/",
    "evidenceTitle": "Raw Block in LMCache: Building a Fast, Recoverable NVMe Tier for KV Cache",
    "verification": {
      "status": 200,
      "format": "rss",
      "itemCount": 10,
      "bytes": 273212,
      "latest": "2026-10-02T04:14:00Z",
      "method": "本机 urllib 实际 HTTP 抓取并用 ElementTree 解析；文章另用 Exa 阅读原站正文"
    }
  },
  {
    "id": "vllm",
    "name": "vLLM Engineering",
    "siteUrl": "https://vllm.ai/blog",
    "feedUrl": "https://vllm.ai/blog/rss.xml",
    "note": "候选池混有多模态条目；本仓库只手选文本推理、P/D、缓存等实质技术文，不默认订阅该全量源。",
    "quality": "核心实现者给出部署命令、同硬件比较、指标与适用条件；公开说明 P/D 可能损害首 token 延迟。",
    "evidenceUrl": "https://vllm.ai/blog/2026-09-29-disaggregated-serving-guide",
    "evidenceTitle": "Taking vLLM Apart: A Practical Guide to Disaggregated Serving",
    "verification": {
      "status": 200,
      "format": "rss",
      "itemCount": 50,
      "bytes": 37196,
      "latest": "2026-10-07T00:00:00Z",
      "method": "本机 urllib 实际 HTTP 抓取并用 ElementTree 解析；从原站 HTML 的 alternate 链接确认 RSS 地址"
    }
  },
  {
    "id": "llm-d",
    "name": "llm-d Engineering",
    "siteUrl": "https://llm-d.ai/blog",
    "feedUrl": "https://llm-d.ai/blog/rss.xml",
    "note": "分布式文本推理的路由与 KV 共享；原 feed 含视觉/多模态文章，这些不进入 picks。",
    "quality": "Google、IBM 与 Red Hat 实作工程师解释调度设计、负载条件、实验配置和局限；有完整 benchmark 而非概念介绍。",
    "evidenceUrl": "https://llm-d.ai/blog/sticky-until-saturated-token-aware-routing",
    "evidenceTitle": "Sticky Until Saturated: Token-Aware Routing in llm-d",
    "verification": {
      "status": 200,
      "format": "rss",
      "itemCount": 20,
      "bytes": 692577,
      "latest": "2026-09-14T10:00:00Z",
      "method": "本机 urllib 实际 HTTP 抓取并用 ElementTree 解析；文章另用 Exa 阅读原站正文"
    }
  }
];
export const EXCLUDED_FEEDS = [
  {
    "name": "SGLang 官方 blog RSS",
    "feedUrl": "https://www.sglang.io/blog/rss.xml",
    "reason": "实际抓取返回 HTML，不能解析为 RSS/Atom；官方网站很有价值，但本轮未找到可用原生 RSS，不伪造订阅地址。"
  },
  {
    "name": "LMSYS Blog RSS",
    "feedUrl": "https://www.lmsys.org/blog/feed.xml",
    "reason": "实际 HTTP 404；/rss.xml 同样 404。"
  },
  {
    "name": "Modal Blog 全量",
    "feedUrl": "https://modal.com/blog/atom.xml",
    "reason": "可解析 140 条，但混合公司新闻、产品更新与图像生成；本轮工程候选池已有四个更专门的实作来源。"
  },
  {
    "name": "Tim Dettmers 全量",
    "feedUrl": "https://timdettmers.com/feed/",
    "reason": "可解析，最新 2026-09-21；研究、职业建议和 agent 文章混合，当前四个维护者来源对文本推理部署更集中。"
  },
  {
    "name": "泛关键词推理教程/SEO 内容",
    "feedUrl": "",
    "reason": "检索到多篇关键词完整但没有可核实的一手实现或实验；不为凑数收录二手概述。"
  },
  {
    "name": "上游候选池中的视觉/视频/多模态条目",
    "feedUrl": "",
    "reason": "逐篇排除，包括 vLLM Video Captioning、llm-d Serving Multimodal 与 Kimi-VL；只发布上述人工白名单。"
  }
];
