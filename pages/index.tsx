import Head from 'next/head'
import { useState } from 'react'

const navItems = [
  ['Overview', '⌂'],
  ['Products', '▣'],
  ['Members', '♙'],
  ['Payments', '◉'],
  ['Support', '◇'],
  ['Settings', '⚙'],
]

const activities = [
  ['New membership', 'Sofia Benali joined Creator Pro', '2 min ago', 'SB', 'green'],
  ['Payment received', '€49.00 from Youssef Amrani', '18 min ago', 'YA', 'blue'],
  ['Product updated', 'AI Content Engine was edited', '41 min ago', 'AI', 'purple'],
  ['Support request', 'Refund request from Lina K.', '1 hr ago', 'LK', 'orange'],
]

export default function Home() {
  const [active, setActive] = useState('Overview')
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <>
      <Head>
        <title>Whop Agent — Business Operations</title>
        <meta name="description" content="AI-assisted business operations dashboard for Whop." />
        <meta name="theme-color" content="#f7f8fa" />
      </Head>
      <div className="app-shell">
        <aside className={menuOpen ? 'sidebar sidebar-open' : 'sidebar'}>
          <div className="brand"><span className="brand-mark">W</span><span>whop agent</span></div>
          <div className="workspace"><span className="workspace-dot" /> Ismail Group AI <span className="chevron">⌄</span></div>
          <nav aria-label="Main navigation">
            <p className="nav-label">Workspace</p>
            {navItems.map(([label, icon]) => <button key={label} className={active === label ? 'nav-item active' : 'nav-item'} onClick={() => { setActive(label); setMenuOpen(false) }}><span className="nav-icon">{icon}</span>{label}{label === 'Support' && <span className="nav-badge">4</span>}</button>)}
          </nav>
          <div className="sidebar-bottom"><div className="agent-status"><span className="status-dot" /><div><strong>Agent online</strong><small>Monitoring your business</small></div></div><div className="profile"><span className="avatar avatar-dark">IG</span><div><strong>Ismail Group</strong><small>Owner</small></div><span className="more">•••</span></div></div>
        </aside>

        <main className="main-content">
          <header className="topbar"><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">☰</button><div className="breadcrumb">Workspace <span>/</span> {active}</div><div className="top-actions"><label className="search"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search anything" /></label><button className="icon-button" aria-label="Notifications">♧<i /></button><button className="help-button">?</button></div></header>
          <div className="page-wrap">
            <div className="page-heading"><div><p className="eyebrow">THURSDAY, AUGUST 20, 2026</p><h1>Good morning, Ismail<span>.</span></h1><p className="subtitle">Here&apos;s what&apos;s happening with your business today.</p></div><button className="primary-button">+ Create product</button></div>
            <section className="stats-grid" aria-label="Business summary"><Stat label="Total revenue" value="€12,840.50" change="+12.5%" detail="vs. last month" icon="↗" tone="green" /><Stat label="Active members" value="1,284" change="+8.2%" detail="vs. last month" icon="♙" tone="blue" /><Stat label="Conversion rate" value="4.68%" change="+2.1%" detail="vs. last month" icon="◒" tone="purple" /><Stat label="Open support" value="24" change="-14.3%" detail="vs. last month" icon="◇" tone="orange" /></section>
            <section className="content-grid"><div className="panel revenue-panel"><div className="panel-head"><div><h2>Revenue overview</h2><p>Track your revenue performance over time.</p></div><select aria-label="Revenue period"><option>Last 30 days</option><option>Last 90 days</option></select></div><div className="revenue-total"><strong>€4,280.50</strong><span className="positive">+18.4%</span></div><div className="chart" aria-label="Revenue chart"><div className="chart-y"><span>€5k</span><span>€4k</span><span>€3k</span><span>€2k</span><span>€1k</span><span>€0</span></div><div className="chart-area"><div className="grid-lines" /><svg viewBox="0 0 760 220" preserveAspectRatio="none" role="img" aria-label="Revenue increasing chart"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#7c5cff" stopOpacity=".28" /><stop offset="1" stopColor="#7c5cff" stopOpacity="0" /></linearGradient></defs><path d="M0,185 C40,180 50,165 82,174 S120,120 160,150 S205,140 242,145 S280,92 320,126 S355,80 390,105 S435,94 465,110 S505,65 545,85 S590,70 620,75 S660,43 700,58 S730,30 760,20 L760,220 L0,220Z" fill="url(#fill)" /><path d="M0,185 C40,180 50,165 82,174 S120,120 160,150 S205,140 242,145 S280,92 320,126 S355,80 390,105 S435,94 465,110 S505,65 545,85 S590,70 620,75 S660,43 700,58 S730,30 760,20" fill="none" stroke="#7658f5" strokeWidth="3" /></svg><div className="chart-labels"><span>Jul 22</span><span>Jul 27</span><span>Aug 1</span><span>Aug 6</span><span>Aug 11</span><span>Aug 16</span><span>Aug 20</span></div></div></div></div><div className="panel activity-panel"><div className="panel-head"><div><h2>Recent activity</h2><p>Latest updates from your workspace.</p></div><button className="text-button">View all →</button></div><div className="activity-list">{activities.map(([title, desc, time, initials, tone]) => <div className="activity" key={desc}><span className={`avatar avatar-${tone}`}>{initials}</span><div className="activity-copy"><strong>{title}</strong><span>{desc}</span></div><time>{time}</time></div>)}</div></div></section>
            <section className="bottom-grid"><div className="panel quick-panel"><div className="panel-head"><div><h2>Quick actions</h2><p>Common tasks, right at your fingertips.</p></div></div><div className="quick-actions"><button><span className="quick-icon purple-icon">▣</span><span><strong>Create a product</strong><small>Launch something new</small></span><b>→</b></button><button><span className="quick-icon blue-icon">♙</span><span><strong>View members</strong><small>Manage your community</small></span><b>→</b></button><button><span className="quick-icon orange-icon">◇</span><span><strong>Handle support</strong><small>24 requests waiting</small></span><b>→</b></button></div></div><div className="panel insight-panel"><div className="insight-icon">✦</div><p className="eyebrow">AGENT INSIGHT</p><h2>Your revenue is trending up.</h2><p>Creator Pro is your top-performing product this month, contributing 62% of total revenue.</p><button className="outline-button">View product analytics →</button></div></section>
          </div>
        </main>
      </div>
    </>
  )
}

function Stat({ label, value, change, detail, icon, tone }: { label: string; value: string; change: string; detail: string; icon: string; tone: string }) { return <div className="stat-card"><div className={`stat-icon ${tone}`}>{icon}</div><p>{label}</p><strong>{value}</strong><div><span className={change.startsWith('-') ? 'negative' : 'positive'}>{change}</span><small>{detail}</small></div></div> }
