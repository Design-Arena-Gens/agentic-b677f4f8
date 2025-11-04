import Link from 'next/link';

const featureCategories = [
  {
    title: 'Feed Page',
    summary:
      'Dynamic, personalized feed blending professional updates, articles, and thought leadership with rich interaction primitives.',
    pillars: [
      'Modular card system that adapts based on content type (article, quick update, event, poll).',
      'Inline engagement: double-tap to like, swipe actions for share/save, contextual comment composer.',
      'AI-curated filters: Top, Following, Nearby, Industry Focus, and AI Highlights leveraging behavioral signals.'
    ],
    flows: [
      'Primary action CTA anchored bottom-right with expandable composer sheets (text, media, files, polls).',
      'Scrollable smart headers presenting trending tags, events, and curated collections.',
      'Adaptive empty and loading states that double as onboarding guidance.'
    ],
    scaffolding: {
      research: ['Audit competitor interaction patterns', 'Card hierarchy wireframes', 'Personalization signal inventory'],
      design: ['Design system tokens for typography, color, and elevation', 'Content card variants with accessibility annotations', 'Micro-interactions (press states, animations) documented'],
      engineering: ['Feed aggregation service contracts', 'Action APIs (likes, comments, shares) consolidated under GraphQL', 'Edge caching rules for low-latency rendering']
    }
  },
  {
    title: 'Chat Page',
    summary:
      'Real-time messaging layer supporting individual, group, and media-rich collaboration with enterprise-grade reliability.',
    pillars: [
      'Conversation list prioritizes recency + importance signals (mentions, unread counts, pinned threads).',
      'Message composer stacked with rich media, scheduling, voice notes, and quick reactions.',
      'Presence indicators (online, typing, away) and delivery receipts (sent/delivered/read) synced via WebSocket.'
    ],
    flows: [
      'Threaded replies and inline tasks for actioning follow-ups.',
      'Universal search with filters (people, groups, files, date range, tags).',
      'Smart notifications with per-channel mute & digest options.'
    ],
    scaffolding: {
      research: ['Latency and retention SLAs definition', 'Security model (E2EE roadmap, encryption at rest)', 'Message schema (text, file, voice, system)'],
      design: ['Chat bubbles for light/dark themes', 'Attachment gallery & preview states', 'Message status iconography library'],
      engineering: ['WebSocket microservice + fallback polling', 'File storage pipeline with virus scanning', 'Search indexing (vector + keyword) pipeline']
    }
  },
  {
    title: 'Jobs Page',
    summary:
      'Career marketplace blending curated listings, AI recommendations, and streamlined application journeys.',
    pillars: [
      'Segmented control for categories (All, Recommended, Saved, Applied) with quick filter chips.',
      'Advanced filters: role seniority, compensation bands, work style, visa support, team size.',
      'Personalized recommendation engine scoring by profile fit, behavioral signals, and network overlaps.'
    ],
    flows: [
      'Scrollable job cards with hero metrics (salary, match %, recruiter connection).',
      'Save Job (offline-first) and one-tap Quick Apply with resume/profile snapshots.',
      'Job details include employee testimonials, culture video, and insight cards.'
    ],
    scaffolding: {
      research: ['Employer persona interviews', 'Compliance review for geo-specific hiring laws', 'Recommendation algorithm feature catalog'],
      design: ['Search filter mega-sheet responsive spec', 'Job card variants across breakpoints', 'Apply confirmation + resume upload states'],
      engineering: ['ElasticSearch facet schema', 'ML model training loop instrumentation', 'Automated reminders + nudges cron flows']
    }
  },
  {
    title: 'Network Page',
    summary:
      'Connection discovery hub blending graph intelligence with curated community cohorts and discovery mechanics.',
    pillars: [
      'People You May Know grid ranking by shared experiences, mutual connections, skills adjacency.',
      'Industry, location, alumni, and event-based filters with persistent states.',
      'Swipeable discovery carousel introducing themed cohorts (mentors, founders, local leaders).'
    ],
    flows: [
      'Connection request modal with personalized note templates.',
      'Segmented tabs: Discover, Contacts, Invitations, Analytics.',
      'Batch connect workflow for event follow-ups and QR code scanning.'
    ],
    scaffolding: {
      research: ['Social graph clustering analysis', 'Trust & safety heuristics (rate limits, reporting)', 'Onboarding survey mapping to discovery signals'],
      design: ['Avatar treatment & status badges', 'Carousel gestures + empty states', 'Connection analytics cards'],
      engineering: ['GraphQL people search endpoint', 'Deduplication + spam prevention rules', 'Recommendation feedback loops']
    }
  },
  {
    title: 'Profile Page',
    summary:
      'Narrative-driven personal brand canvas with modular sections, dynamic highlights, and shareable public view.',
    pillars: [
      'Smart sections: About, Experience, Spotlight projects, Credentials, Community Impact.',
      'Hero header with cover, headline, onboarding completeness meter.',
      'Highlight reels mixing media, testimonials, and data visualizations.'
    ],
    flows: [
      'Inline editing with autosave drafts and mobile-friendly reorder drag handles.',
      'Profile completeness checklist and badges.',
      'Public share analytics (views, engagement sources, top searches).'
    ],
    scaffolding: {
      research: ['Brand storytelling workshops', 'Recruiter review workflow', 'Data privacy consent tracking'],
      design: ['Section templates + typography scale', 'Highlight reel motion spec', 'Accessibility audit for color contrast'],
      engineering: ['Profile versioning & audit trails', 'Media optimization pipeline', 'Analytics dashboard endpoints']
    }
  },
  {
    title: 'Settings Page',
    summary:
      'Unified control center for account, privacy, notification, and billing preferences designed for clarity and trust.',
    pillars: [
      'Categorized preferences (Account, Privacy & Safety, Notifications, Integrations, Billing).',
      'Audit logs and device management with revoke capabilities.',
      'Consent management (data export, delete requests) aligned with global compliance.'
    ],
    flows: [
      'Push, email, and in-app notification matrix with quick presets.',
      'Security center for MFA, passkeys, session history.',
      'Billing overview with invoices, plan management, downloadable receipts.'
    ],
    scaffolding: {
      research: ['Regulatory checklist (GDPR, CCPA, SOC2 mapping)', 'Incident response playbooks', 'Notification fatigue analysis'],
      design: ['Settings navigation IA', 'Form components for toggles, lists, confirmation patterns', 'Critical action modals (account deletion, export)'],
      engineering: ['Feature flag architecture', 'Notification preference service schema', 'Billing provider webhook processing']
    }
  }
];

const roadmap = [
  {
    phase: 'Discovery & Alignment',
    duration: 'Weeks 1-3',
    objectives: [
      'Product vision workshops, stakeholder mapping, north star definition',
      'User research plan, recruiting, and proto-persona creation',
      'Success metrics framework, instrumentation strategy, KPI baseline'
    ],
    outputs: ['Strategic brief', 'Experience principles', 'Research insights report', 'Analytics requirement doc']
  },
  {
    phase: 'Experience Architecture',
    duration: 'Weeks 4-7',
    objectives: [
      'Information architecture, navigation heuristics, and flow mapping',
      'Design system foundation (tokens, components, motion language)',
      'Technical architecture spikes (real-time infra, recommendation services, security posture)'
    ],
    outputs: ['IA & flow diagrams', 'Component inventory', 'System architecture blueprint', 'Technical risk register']
  },
  {
    phase: 'Design & Engineering Sprints',
    duration: 'Weeks 8-18',
    objectives: [
      'Dual-track agile sprints delivering iterative prototypes and production increments',
      'Usability testing loops (weekly) with target personas',
      'Platform scalability implementation (observability, performance budgets)'
    ],
    outputs: ['High-fidelity prototypes', 'Sprint demos & retros', 'CI/CD pipelines', 'Testing harness & coverage reports']
  },
  {
    phase: 'Launch & Growth Enablement',
    duration: 'Weeks 19-24',
    objectives: [
      'Beta launch with instrumentation, feature flags, and success dashboards',
      'Growth experiments roadmap (activation, retention, referral)',
      'Operational readiness (support playbooks, incident response, SLAs)'
    ],
    outputs: ['Go-to-market toolkit', 'Experiment backlog', 'Operational runbooks', 'Post-launch review cadence']
  }
];

const successMetrics = [
  { track: 'Acquisition', metrics: ['Waitlist to onboard conversion > 35%', 'Day-7 activation > 45%', 'Referrals as % of signups > 20%'] },
  { track: 'Engagement', metrics: ['Weekly active professionals > 60%', 'Feed dwell time > 6m per active day', 'Chat retention (30-day) > 55%'] },
  { track: 'Value Delivery', metrics: ['Job applications per job seeker > 4/month', 'Average accepted connection requests per user > 8/month', 'Employer NPS > 45'] },
  { track: 'Monetization', metrics: ['Premium conversion rate > 6%', 'Job post fulfillment rate > 70%', 'Enterprise deals pipeline velocity +25% QoQ'] }
];

const teamStructure = [
  {
    squad: 'Feed & Growth',
    focus: 'Content discovery, personalization, engagement loops, growth experiments',
    staffing: 'PM, Product Designer, Tech Lead, 3 Mobile Engineers, Data Scientist, Growth Marketer'
  },
  {
    squad: 'Messaging & Presence',
    focus: 'Real-time chat, notifications, presence signals, collaboration tooling',
    staffing: 'PM, Product Designer, Tech Lead, 4 Mobile Engineers, Backend Lead, QA Specialist'
  },
  {
    squad: 'Careers Marketplace',
    focus: 'Job discovery, applications, employer services, analytics',
    staffing: 'PM, Product Designer, Tech Lead, 3 Mobile Engineers, Data/ML Engineer, Content Strategist'
  },
  {
    squad: 'Network Graph',
    focus: 'Connection discovery, recommendations, trust & safety, community programs',
    staffing: 'PM, Product Designer, Tech Lead, 2 Mobile Engineers, ML Scientist, Trust & Safety Analyst'
  },
  {
    squad: 'Profile & Identity',
    focus: 'Profile creation, credentialing, portfolio experiences, analytics',
    staffing: 'PM, Product Designer, Tech Lead, 2 Mobile Engineers, Backend Engineer, UX Writer'
  },
  {
    squad: 'Platform & Compliance',
    focus: 'Settings, security, billing, feature flags, compliance',
    staffing: 'PM, Product Designer, Tech Lead, Backend Engineer, DevOps, Security Engineer'
  }
];

const riskMitigation = [
  {
    risk: 'Low engagement in early cohorts',
    mitigation: 'Launch targeted onboarding, guided tours, and personalized starter packs; analyze funnel daily and run rapid experiments.'
  },
  {
    risk: 'Real-time infrastructure instability',
    mitigation: 'Invest in load testing, auto scaling policies, and fallback transport; establish SRE on-call rotations and chaos drills.'
  },
  {
    risk: 'Recommendation bias or spam exposure',
    mitigation: 'Implement feedback loops, human review flags, transparency dashboards, and trust & safety heuristics from day one.'
  },
  {
    risk: 'Regulatory compliance gaps across regions',
    mitigation: 'Partner with legal early, embed compliance checklists in definition of done, and automate rights management workflows.'
  }
];

export default function HomePage() {
  return (
    <div className="section-space">
      <section className="hero">
        <span className="badge">Aurora Connect · Mobile Product Blueprint</span>
        <h1>Design & Delivery Plan for a Next-Gen Professional Network</h1>
        <p>
          A cohesive strategy that merges human-centered design with scalable engineering to build a mobile-first networking platform.
          This plan deconstructs six core experiences—Feed, Chat, Jobs, Network, Profile, Settings—into actionable design and build tracks.
        </p>
        <div className="stats">
          <div>
            <strong>24 Weeks</strong>
            <span className="subtle">Planned roadmap from discovery to growth enablement</span>
          </div>
          <div>
            <strong>6 Squads</strong>
            <span className="subtle">Cross-functional pods aligned to platform pillars</span>
          </div>
          <div>
            <strong>4 Tracks</strong>
            <span className="subtle">Acquisition, engagement, value, and monetization OKRs</span>
          </div>
        </div>
      </section>

      {featureCategories.map((category) => (
        <section key={category.title} className="section">
          <div className="section-header">
            <h2>{category.title}</h2>
            <span className="tag">Product Area</span>
          </div>
          <p>{category.summary}</p>
          <div className="grid-3">
            <div className="card">
              <h3>Experience Pillars</h3>
              <ul className="check-list">
                {category.pillars.map((pillar) => (
                  <li key={pillar}>{pillar}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Signature Flows</h3>
              <ul className="check-list">
                {category.flows.map((flow) => (
                  <li key={flow}>{flow}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Delivery Foundations</h3>
              <ul className="list">
                <li>
                  <strong>Research</strong>
                  <ul className="check-list">
                    {category.scaffolding.research.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Design</strong>
                  <ul className="check-list">
                    {category.scaffolding.design.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
                <li>
                  <strong>Engineering</strong>
                  <ul className="check-list">
                    {category.scaffolding.engineering.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="section-header">
          <h2>Delivery Roadmap</h2>
          <span className="tag">Timeline</span>
        </div>
        <p>
          Structured four-phase program aligning discovery, design, and engineering in dual-track agile. Each phase culminates with measurable
          artifacts and stakeholder checkpoints.
        </p>
        <div className="timeline">
          {roadmap.map((entry) => (
            <div className="timeline-item" key={entry.phase}>
              <h3>{entry.phase}</h3>
              <p className="subtle">{entry.duration}</p>
              <div className="grid-2">
                <div className="card">
                  <h4>Objectives</h4>
                  <ul className="check-list">
                    {entry.objectives.map((objective) => (
                      <li key={objective}>{objective}</li>
                    ))}
                  </ul>
                </div>
                <div className="card">
                  <h4>Key Outputs</h4>
                  <ul className="check-list">
                    {entry.outputs.map((output) => (
                      <li key={output}>{output}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Success Metrics & Analytics</h2>
          <span className="tag">North Star</span>
        </div>
        <p>
          A balanced scorecard across acquisition, engagement, value delivery, and monetization. Instrument via event taxonomy, dashboards, and cohort analyses.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Track</th>
              <th>Metrics</th>
            </tr>
          </thead>
          <tbody>
            {successMetrics.map((item) => (
              <tr key={item.track}>
                <td>{item.track}</td>
                <td>
                  <ul className="check-list">
                    {item.metrics.map((metric) => (
                      <li key={metric}>{metric}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Team Topology</h2>
          <span className="tag">People</span>
        </div>
        <p>
          Cross-functional squads aligned to product surfaces with central platform enablement. Each squad participates in shared design critiques,
          architecture guilds, and weekly OKR health checks.
        </p>
        <div className="grid-3">
          {teamStructure.map((squad) => (
            <div key={squad.squad} className="card">
              <h3>{squad.squad}</h3>
              <p className="subtle">{squad.focus}</p>
              <div className="chip-row">
                {squad.staffing.split(',').map((role) => (
                  <span key={role.trim()} className="chip">
                    {role.trim()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Risk Register</h2>
          <span className="tag">Mitigation</span>
        </div>
        <p>
          Early identification of critical risks spanning adoption, infrastructure, compliance, and trust. Each risk pairs with mitigation tracks owned by dedicated squads.
        </p>
        <div className="grid-2">
          {riskMitigation.map((entry) => (
            <div key={entry.risk} className="card">
              <h3>{entry.risk}</h3>
              <p className="subtle">{entry.mitigation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Tooling & Integration Stack</h2>
          <span className="tag">Enablement</span>
        </div>
        <div className="grid-3">
          <div className="card">
            <h3>Product & Research</h3>
            <ul className="check-list">
              <li>Productboard for roadmap intelligence</li>
              <li>Maze & UserTesting for rapid validation</li>
              <li>Notion workspace for discovery artifacts</li>
            </ul>
          </div>
          <div className="card">
            <h3>Design & Collaboration</h3>
            <ul className="check-list">
              <li>Figma tokens & Variants linked to design system repo</li>
              <li>Zeroheight for documentation portal</li>
              <li>Storybook for component QA + a11y checks</li>
            </ul>
          </div>
          <div className="card">
            <h3>Engineering & Ops</h3>
            <ul className="check-list">
              <li>Expo + React Native for mobile build</li>
              <li>GraphQL BFF backed by serverless functions</li>
              <li>Datadog + Sentry observability stack</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Adoption Flywheel</h2>
          <span className="tag">Growth</span>
        </div>
        <p>
          Multi-channel activation strategy anchored in high-signal invites, content creation incentives, and community-led programming to generate compounding network effects.
        </p>
        <div className="grid-3">
          <div className="card">
            <h3>Onboarding</h3>
            <ul className="check-list">
              <li>Guided onboarding journeys tailored by persona</li>
              <li>Interactive profile completeness tracker</li>
              <li>Personalized feed seeding with recommended follows</li>
            </ul>
          </div>
          <div className="card">
            <h3>Engagement</h3>
            <ul className="check-list">
              <li>Weekly prompts and content challenges</li>
              <li>Contextual chat nudges and re-engagement loops</li>
              <li>Job and network insights surfaced via push notifications</li>
            </ul>
          </div>
          <div className="card">
            <h3>Advocacy</h3>
            <ul className="check-list">
              <li>Referral rewards for successful connections</li>
              <li>Creator spotlight program & native analytics</li>
              <li>Community-led events with automated follow-up workflows</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Implementation Notes</h2>
          <span className="tag">Dependencies</span>
        </div>
        <p>
          Platform assumes mobile-first execution using React Native with shared component library. Web parity delivered via Expo for Web. Backend services orchestrated through a modular microservice architecture with GraphQL API gateway.
        </p>
        <div className="grid-2">
          <div className="card">
            <h3>Data & Personalization</h3>
            <ul className="check-list">
              <li>Event streaming via Kafka → Feature store for recommendations</li>
              <li>Contextual personalization toggles respecting privacy controls</li>
              <li>Explainability layer for recommendation transparency</li>
            </ul>
          </div>
          <div className="card">
            <h3>Quality Bar</h3>
            <ul className="check-list">
              <li>Automated regression via Detox + Jest for mobile flows</li>
              <li>Release readiness checklist with performance budget gating</li>
              <li>Beta cohort feedback loops tracked in analytics dashboard</li>
            </ul>
          </div>
        </div>
        <p className="quote">
          “Build the trust graph first; nurture high-signal interactions, then scale automation.”
        </p>
        <Link className="badge" href="#">Download Full Program Charter</Link>
      </section>

      <p className="footer-note">Aurora Connect · Product & Engineering PMO · 2024</p>
    </div>
  );
}
