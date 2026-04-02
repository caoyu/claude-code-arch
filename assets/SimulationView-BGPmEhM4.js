import{A as e,C as t,T as n,c as r,ct as i,d as a,g as o,h as s,i as c,lt as l,m as u,p as d,s as f,st as p,t as m,u as h,z as g}from"./_plugin-vue_export-helper-BTlzfn9M.js";import{l as _}from"./index-CzWyVkOV.js";var v={class:`fade-in`},ee={class:`card`},te={class:`scenarios-grid`},ne=[`onClick`],re=[`innerHTML`],y={key:0,class:`card simulation-card`},b={class:`card-title`},x={class:`progress-section`},S={class:`progress-bar`},C={class:`progress-info`},w={class:`progress-percent`},T={class:`simulation-main`},E={class:`steps-sidebar`},D=[`onClick`],O={class:`step-status`},k={key:0,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`3`},A={key:1},j={class:`step-info`},M={class:`step-title`},N={class:`step-component`},P={class:`step-detail`},ie={class:`detail-header`},F={class:`component-badge`},I={class:`detail-desc`},L={class:`highlight-box`},R={key:0,class:`data-section`},z={class:`code-block`},B={key:1,class:`data-section`},V={class:`code-block`},H={class:`control-bar`},U=[`disabled`],W={class:`step-indicators`},G=[`onClick`],K=[`disabled`],q=m(o({__name:`SimulationView`,setup(o){let m=[{id:`file-edit`,title:`文件编辑`,desc:`修改 config.ts 中的端口配置`,gradient:`linear-gradient(135deg, #818cf8 0%, #a5b4fc 100%)`,icon:`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>`,steps:[{title:`接收用户输入`,description:`Claude Code 接收用户的文件编辑请求`,component:`REPL`,input:`用户: "帮我修改 config.ts 中的端口配置，改为 8080"`,highlight:`用户输入被解析为自然语言指令，系统准备处理文件编辑任务`},{title:`解析意图`,description:`分析用户意图，识别需要执行的操作类型`,component:`IntentParser`,output:`{
  "action": "file_edit",
  "target": "config.ts",
  "operation": "modify_port",
  "value": "8080"
}`,highlight:`系统识别出这是一个文件修改任务，目标文件是 config.ts`},{title:`读取文件`,description:`使用 FileReadTool 读取目标文件内容`,component:`FileReadTool`,input:`{ "file": "config.ts" }`,output:`export const config = {
  port: 3000,
  host: 'localhost',
  debug: true
};`,highlight:`工具执行前会进行权限检查，确认用户允许读取该文件`},{title:`生成编辑计划`,description:`分析文件内容，确定需要修改的具体位置`,component:`EditPlanner`,output:`{
  "replacements": [{
    "oldText": "port: 3000",
    "newText": "port: 8080"
  }]
}`,highlight:`AI 分析文件结构，精确定位需要修改的代码行`},{title:`执行文件编辑`,description:`使用 FileEditTool 应用修改`,component:`FileEditTool`,input:`{
  "file": "config.ts",
  "replacements": [{
    "oldText": "port: 3000",
    "newText": "port: 8080"
  }]
}`,output:`文件修改成功，已更新 config.ts`,highlight:`编辑操作需要用户确认，系统显示 diff 供审核`},{title:`返回结果`,description:`向用户展示修改结果和确认信息`,component:`OutputHandler`,output:`✅ 已修改 config.ts，端口从 3000 改为 8080`,highlight:`任务完成，系统提供简洁的总结和确认`}]},{id:`code-search`,title:`代码搜索`,desc:`查找所有使用了 deprecated API 的文件`,gradient:`linear-gradient(135deg, #38bdf8 0%, #22d3ee 100%)`,icon:`<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>`,steps:[{title:`接收搜索请求`,description:`用户发起代码搜索请求`,component:`REPL`,input:`用户: "查找所有使用了 deprecated API 的文件"`,highlight:`搜索请求可能涉及多个文件和复杂的模式匹配`},{title:`构建搜索策略`,description:`分析搜索需求，选择合适的搜索工具`,component:`SearchPlanner`,output:`{
  "strategy": "grep_search",
  "patterns": [
    "@deprecated",
    "deprecatedApi",
    "DEPRECATED"
  ],
  "scope": "project"
}`,highlight:`系统选择 GrepTool 进行高效的文本搜索`},{title:`执行搜索`,description:`使用 GrepTool 在项目中搜索匹配的文件`,component:`GrepTool`,input:`{
  "pattern": "@deprecated",
  "output": "file_line"
}`,output:`src/api/client.ts:45: // @deprecated Use newApi instead
src/utils/helpers.ts:12: @deprecated
src/components/OldButton.tsx:8: * @deprecated`,highlight:`并发搜索多个模式，快速定位所有匹配项`},{title:`分析结果`,description:`整理搜索结果，去除重复和误报`,component:`ResultAnalyzer`,output:`{
  "totalFiles": 3,
  "files": [
    "src/api/client.ts",
    "src/utils/helpers.ts",
    "src/components/OldButton.tsx"
  ]
}`,highlight:`结果被结构化，方便后续处理和展示`},{title:`生成报告`,description:`生成人类可读的搜索报告`,component:`ReportGenerator`,output:`找到 3 个文件使用了 deprecated API:

1. src/api/client.ts (第45行)
2. src/utils/helpers.ts (第12行)
3. src/components/OldButton.tsx (第8行)`,highlight:`报告包含文件路径、行号和上下文信息`}]},{id:`multi-step`,title:`多步任务`,desc:`创建一个新的 React 组件并添加测试`,gradient:`linear-gradient(135deg, #34d399 0%, #34d399 100%)`,icon:`<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>`,steps:[{title:`任务分解`,description:`将复杂任务分解为多个子任务`,component:`TaskPlanner`,input:`用户: "创建一个新的 React 组件并添加测试"`,output:`{
  "subtasks": [
    "创建组件文件",
    "编写组件代码",
    "创建测试文件",
    "编写测试代码"
  ]
}`,highlight:`复杂任务被分解为可管理的子任务序列`},{title:`创建组件文件`,description:`使用 FileWriteTool 创建组件文件`,component:`FileWriteTool`,input:`{
  "file": "src/components/UserCard.tsx",
  "content": "..."
}`,highlight:`文件创建前检查目录结构和命名规范`},{title:`编写组件代码`,description:`生成 React 组件代码`,component:`CodeGenerator`,output:`export interface UserCardProps {
  name: string;
  email: string;
}

export function UserCard({ name, email }: UserCardProps) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}`,highlight:`生成的代码包含类型定义和基础实现`},{title:`创建测试文件`,description:`创建对应的测试文件`,component:`FileWriteTool`,input:`{
  "file": "src/components/UserCard.test.tsx"
}`,highlight:`测试文件遵循命名约定：ComponentName.test.tsx`},{title:`编写测试代码`,description:`生成单元测试代码`,component:`TestGenerator`,output:`import { render, screen } from '@testing-library/react';
import { UserCard } from './UserCard';

test('renders user information', () => {
  render(<UserCard name="John" email="john@example.com" />);
  expect(screen.getByText('John')).toBeInTheDocument();
});`,highlight:`测试覆盖组件的主要功能和渲染逻辑`},{title:`验证结果`,description:`检查创建的文件和代码质量`,component:`Validator`,output:`✅ UserCard.tsx 创建成功
✅ UserCard.test.tsx 创建成功
✅ 所有测试通过`,highlight:`最终验证确保任务完成质量`}]},{id:`mcp-call`,title:`MCP 调用`,desc:`使用 GitHub MCP 查看最新的 PR`,gradient:`linear-gradient(135deg, #fbbf24 0%, #fbbf24 100%)`,icon:`<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>`,steps:[{title:`接收 MCP 请求`,description:`用户请求通过 MCP 调用外部服务`,component:`REPL`,input:`用户: "使用 GitHub MCP 查看最新的 PR"`,highlight:`MCP 请求需要已配置并连接的 MCP Server`},{title:`路由到 MCP`,description:`识别 MCP 工具调用请求`,component:`ToolRouter`,output:`{
  "toolType": "mcp",
  "server": "github",
  "tool": "list_pull_requests"
}`,highlight:`系统识别这是 MCP 工具调用而非内置工具`},{title:`准备 MCP 请求`,description:`构建 MCP 协议格式的请求`,component:`MCPClient`,input:`{
  "method": "tools/call",
  "params": {
    "name": "github/list_pull_requests",
    "arguments": {
      "state": "open",
      "sort": "created",
      "direction": "desc"
    }
  }
}`,highlight:`请求遵循 JSON-RPC 2.0 格式的 MCP 协议`},{title:`发送到 MCP Server`,description:`通过传输层发送请求到 GitHub MCP Server`,component:`TransportLayer`,output:`HTTP POST https://api.github.com/mcp/tools/call`,highlight:`支持多种传输协议：stdio、SSE、HTTP`},{title:`接收 MCP 响应`,description:`接收并解析 MCP Server 的响应`,component:`MCPClient`,output:`{
  "result": {
    "pull_requests": [
      { "number": 123, "title": "Fix login bug" },
      { "number": 122, "title": "Add dark mode" }
    ]
  }
}`,highlight:`响应被标准化为与内置工具相同的格式`},{title:`展示结果`,description:`格式化并展示 PR 列表`,component:`OutputHandler`,output:`最新的 Pull Requests:

#123: Fix login bug
#122: Add dark mode`,highlight:`MCP 工具的结果与内置工具无缝集成`}]}],q=g(`file-edit`),J=g(0),Y=f(()=>m.find(e=>e.id===q.value)),X=f(()=>Y.value?.steps||[]),Z=f(()=>X.value[J.value]),Q=f(()=>(J.value+1)/X.value.length*100);function ae(e){q.value=e,J.value=0}function oe(){J.value<X.value.length-1&&J.value++}function se(){J.value>0&&J.value--}function $(e){J.value=e}return(o,f)=>(t(),a(`div`,v,[f[8]||=d(`<div class="page-header" data-v-30fe7601><h1 class="page-title" data-v-30fe7601>场景模拟</h1><p class="page-subtitle" data-v-30fe7601>交互式执行演练 - 理解 Claude Code 的执行路径</p></div><div class="card" data-v-30fe7601><div class="card-title" data-v-30fe7601><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30fe7601><circle cx="12" cy="12" r="10" data-v-30fe7601></circle><path d="M12 16v-4M12 8h.01" data-v-30fe7601></path></svg> 概述 </div><p class="overview-text" data-v-30fe7601> 通过模拟真实场景，直观理解 Claude Code 在不同请求下的执行流程。 选择一个预设场景，逐步查看每个执行步骤，了解涉及的组件、输入输出数据， 以及系统如何处理各种任务类型。 </p></div>`,2),r(`div`,ee,[f[0]||=d(`<div class="card-title" data-v-30fe7601><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-30fe7601><rect x="3" y="3" width="7" height="7" data-v-30fe7601></rect><rect x="14" y="3" width="7" height="7" data-v-30fe7601></rect><rect x="14" y="14" width="7" height="7" data-v-30fe7601></rect><rect x="3" y="14" width="7" height="7" data-v-30fe7601></rect></svg> 选择场景 </div>`,1),r(`div`,te,[(t(),a(c,null,n(m,e=>r(`div`,{key:e.id,class:p([`scenario-card`,{active:q.value===e.id}]),onClick:t=>ae(e.id)},[r(`div`,{class:`scenario-icon`,style:i({background:e.gradient})},[(t(),a(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,innerHTML:e.icon},null,8,re))],4),r(`h4`,null,l(e.title),1),r(`p`,null,l(e.desc),1)],10,ne)),64))])]),q.value?(t(),a(`div`,y,[r(`div`,b,[f[1]||=r(`svg`,{class:`icon`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[r(`polygon`,{points:`5 3 19 12 5 21 5 3`})],-1),u(` 模拟执行: `+l(Y.value?.title),1)]),r(`div`,x,[r(`div`,S,[r(`div`,{class:`progress-fill`,style:i({width:Q.value+`%`})},null,4)]),r(`div`,C,[r(`span`,null,`步骤 `+l(J.value+1)+` / `+l(X.value.length),1),r(`span`,w,l(Math.round(Q.value))+`%`,1)])]),r(`div`,T,[r(`div`,E,[(t(!0),a(c,null,n(X.value,(e,n)=>(t(),a(`div`,{key:n,class:p([`step-item`,{active:J.value===n,completed:J.value>n,pending:J.value<n}]),onClick:e=>$(n)},[r(`div`,O,[J.value>n?(t(),a(`svg`,k,[...f[2]||=[r(`polyline`,{points:`20 6 9 17 4 12`},null,-1)]])):(t(),a(`span`,A,l(n+1),1))]),r(`div`,j,[r(`div`,M,l(e.title),1),r(`div`,N,l(e.component),1)])],10,D))),128))]),r(`div`,P,[s(_,{name:`slide`,mode:`out-in`},{default:e(()=>[(t(),a(`div`,{key:J.value,class:`detail-content`},[r(`div`,ie,[r(`h3`,null,l(Z.value?.title),1),r(`span`,F,l(Z.value?.component),1)]),r(`p`,I,l(Z.value?.description),1),r(`div`,L,[f[3]||=r(`div`,{class:`highlight-label`},[r(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[r(`polygon`,{points:`13 2 3 14 12 14 11 22 21 10 12 10 13 2`})]),u(` 关键要点 `)],-1),r(`p`,null,l(Z.value?.highlight),1)]),Z.value?.input?(t(),a(`div`,R,[f[4]||=r(`div`,{class:`data-label`},[r(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[r(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),r(`polyline`,{points:`17 8 12 3 7 8`}),r(`line`,{x1:`12`,y1:`3`,x2:`12`,y2:`15`})]),u(` 输入数据 `)],-1),r(`div`,z,[r(`pre`,null,l(Z.value?.input),1)])])):h(``,!0),Z.value?.output?(t(),a(`div`,B,[f[5]||=r(`div`,{class:`data-label`},[r(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[r(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),r(`polyline`,{points:`7 10 12 15 17 10`}),r(`line`,{x1:`12`,y1:`15`,x2:`12`,y2:`3`})]),u(` 输出数据 `)],-1),r(`div`,V,[r(`pre`,null,l(Z.value?.output),1)])])):h(``,!0)]))]),_:1})])]),r(`div`,H,[r(`button`,{class:`control-btn`,disabled:J.value===0,onClick:se},[...f[6]||=[r(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[r(`path`,{d:`M19 12H5M12 19l-7-7 7-7`})],-1),u(` 上一步 `,-1)]],8,U),r(`div`,W,[(t(!0),a(c,null,n(X.value,(e,n)=>(t(),a(`button`,{key:n,class:p([`indicator`,{active:J.value===n,completed:J.value>n}]),onClick:e=>$(n)},null,10,G))),128))]),r(`button`,{class:`control-btn primary`,disabled:J.value===X.value.length-1,onClick:oe},[...f[7]||=[u(` 下一步 `,-1),r(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`},[r(`path`,{d:`M5 12h14M12 5l7 7-7 7`})],-1)]],8,K)])])):h(``,!0)]))}}),[[`__scopeId`,`data-v-30fe7601`]]);export{q as default};