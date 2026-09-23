import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';

import titleSlideBg from '@assets/spacexai_background.png';
import wordmarkWhite from '@assets/spacexai - wordmark - white - transparent.png';
import symbolWhite from '@assets/spacexai - symbol - white - transparent.svg';
import symbolBlack from '@assets/spacexai - symbol - black - transparent.png';

export const design: DesignSystem = {
  palette: { bg: '#F7F7F4', text: '#26251E', accent: '#005288' },
  fonts: {
    display: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
    body: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',
  },
  typeScale: { hero: 103, body: 34 },
  radius: 4,
};

const font = '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif';
const PAD = 110;

const colors = {
  paper: '#F7F7F4',
  text: '#26251E',
  accent: '#005288',
  accentTint: '#DCE6EF',
  soft: '#EBE7DE',
  muted: '#9B9A92',
  secondary: '#5C5B54',
  body: '#3E3D36',
  dark: '#020202',
  darkText: '#FFFFFF',
  darkMuted: '#999999',
};

const styles = `
  @keyframes mobileFadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .mobileFadeUp { opacity: 0; animation: mobileFadeUp 0.6s cubic-bezier(.2,.7,.2,1) both; }
  @media (prefers-reduced-motion: reduce) {
    .mobileFadeUp { animation: none; opacity: 1; }
  }
`;

const Styles = () => <style>{styles}</style>;

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: 22,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: colors.muted,
      marginBottom: 16,
      fontFamily: font,
    }}
  >
    {children}
  </div>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 1.14,
      letterSpacing: '-0.02em',
      margin: 0,
      color: colors.text,
      fontFamily: font,
      maxWidth: 1560,
    }}
  >
    {children}
  </h1>
);

const HeroTitle = ({
  children,
  color = colors.darkText,
}: {
  children: React.ReactNode;
  color?: string;
}) => (
  <h1
    style={{
      fontSize: 103,
      fontWeight: 700,
      lineHeight: 1.04,
      letterSpacing: '-0.03em',
      margin: 0,
      color,
      fontFamily: font,
      maxWidth: 1500,
    }}
  >
    {children}
  </h1>
);

const CoverWordmark = () => (
  <img
    src={wordmarkWhite}
    alt="SpaceXAI"
    style={{ position: 'absolute', bottom: 64, right: 48, height: 48, width: 'auto', zIndex: 1 }}
  />
);

const SpaceXAILogo = ({ onDark = false }: { onDark?: boolean }) => (
  <img
    src={onDark ? symbolWhite : symbolBlack}
    alt="SpaceXAI"
    style={{ position: 'absolute', top: 48, right: 48, height: 40, width: 'auto' }}
  />
);

const FadeUp = ({
  delay = 0,
  fill = false,
  children,
  style,
}: {
  delay?: number;
  fill?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div
    className="mobileFadeUp"
    style={{ animationDelay: `${delay}s`, ...(fill ? { height: '100%' } : null), ...style }}
  >
    {children}
  </div>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingBottom: 24,
    }}
  >
    {children}
  </div>
);

const ContentPage = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: colors.paper,
      color: colors.text,
      padding: PAD,
      position: 'relative',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: font,
    }}
  >
    <Styles />
    <SpaceXAILogo />
    {children}
  </div>
);

const SquareBullet = ({ children }: { children: React.ReactNode }) => (
  <li
    style={{
      display: 'flex',
      gap: 18,
      alignItems: 'flex-start',
      fontSize: 32,
      lineHeight: 1.4,
      color: colors.text,
      marginBottom: 20,
      listStyle: 'none',
    }}
  >
    <span style={{ width: 12, height: 12, marginTop: 13, flexShrink: 0, background: colors.accent }} />
    <span>{children}</span>
  </li>
);

// Full-width soft row with a 6px left accent bar on the same element (PPTX-safe strip).
const SoftRow = ({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) => (
  <div
    style={{
      background: highlight ? colors.accentTint : colors.soft,
      borderLeft: `6px solid ${colors.accent}`,
      padding: '20px 30px',
      boxSizing: 'border-box',
    }}
  >
    {children}
  </div>
);

const RowLead = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 31, fontWeight: 700, lineHeight: 1.2, color: colors.text }}>{children}</div>
);

const RowCopy = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 27, lineHeight: 1.35, color: colors.secondary, marginTop: 6 }}>{children}</div>
);

// Soft column for parallel (non-flow) comparisons — top accent, never a white card.
const Column = ({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
}) => (
  <div
    style={{
      height: '100%',
      background: colors.soft,
      borderTop: `6px solid ${colors.accent}`,
      padding: '28px 30px',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: colors.accent,
        marginBottom: 14,
      }}
    >
      {label}
    </div>
    <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.2, color: colors.text, marginBottom: 14 }}>
      {heading}
    </div>
    <div style={{ fontSize: 26, lineHeight: 1.42, color: colors.body }}>{children}</div>
  </div>
);

// Linear-flow card — soft fill, top accent, text inside (PPTX-editable box).
const FlowCard = ({ label, detail }: { label: string; detail: string }) => (
  <div
    style={{
      flex: 1,
      minWidth: 0,
      background: colors.soft,
      borderTop: `6px solid ${colors.accent}`,
      padding: '22px 22px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }}
  >
    <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.2, color: colors.text }}>{label}</div>
    <div style={{ fontSize: 23, lineHeight: 1.35, color: colors.secondary, marginTop: 8 }}>{detail}</div>
  </div>
);

const Arrow = () => (
  <span
    style={{
      alignSelf: 'center',
      flexShrink: 0,
      width: 52,
      textAlign: 'center',
      fontSize: 40,
      fontWeight: 700,
      color: colors.accent,
    }}
  >
    →
  </span>
);

const Chip = ({ children, dim = false }: { children: React.ReactNode; dim?: boolean }) => (
  <span
    style={{
      display: 'inline-block',
      whiteSpace: 'nowrap',
      background: dim ? colors.soft : colors.accentTint,
      color: dim ? colors.secondary : colors.accent,
      fontSize: 26,
      fontWeight: 700,
      padding: '10px 20px',
      borderLeft: `6px solid ${dim ? colors.muted : colors.accent}`,
    }}
  >
    {children}
  </span>
);

const PresenterCard = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
    <div
      style={{
        width: 84,
        height: 84,
        flexShrink: 0,
        background: colors.accent,
        color: '#FFFFFF',
        display: 'grid',
        placeItems: 'center',
        fontSize: 34,
        fontWeight: 700,
        letterSpacing: '0.02em',
      }}
    >
      SS
    </div>
    <div>
      <div style={{ fontSize: 34, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1 }}>Sunny Shah</div>
      <div style={{ fontSize: 26, color: colors.darkMuted, marginTop: 6 }}>Workshop host</div>
    </div>
  </div>
);

// 1. Cover (dark)
const Cover: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: colors.dark,
      color: '#FFFFFF',
      padding: PAD,
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      fontFamily: font,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <img
      src={titleSlideBg}
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
    />
    <Styles />
    <div className="mobileFadeUp" style={{ position: 'relative', zIndex: 1 }}>
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: colors.darkMuted,
          marginBottom: 26,
        }}
      >
        Cursor workshop · Apr 2026
      </div>
      <HeroTitle>Cursor for Mobile Developers</HeroTitle>
      <p style={{ margin: '32px 0 0', fontSize: 44, fontWeight: 400, lineHeight: 1.28, color: colors.darkText, maxWidth: 1360 }}>
        The Agents Window as a sidecar for Xcode and Android Studio
      </p>
    </div>
    <div className="mobileFadeUp" style={{ position: 'relative', zIndex: 1, marginTop: 64, animationDelay: '0.14s' }}>
      <PresenterCard />
    </div>
    <CoverWordmark />
  </div>
);

// 2. Agenda (canonical)
const AgendaRow = ({ num, text }: { num: string; text: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'baseline',
      background: colors.soft,
      borderLeft: `6px solid ${colors.accent}`,
      padding: '16px 30px',
      boxSizing: 'border-box',
    }}
  >
    <span
      style={{
        whiteSpace: 'pre',
        fontSize: 36,
        fontWeight: 700,
        color: colors.accent,
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {num + '   '}
    </span>
    <span style={{ fontSize: 36, fontWeight: 700, color: colors.text }}>{text}</span>
  </div>
);

const Agenda: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>SpaceXAI × Cursor</Eyebrow>
      <h1 style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0, color: colors.text, fontFamily: font }}>
        Agenda
      </h1>
    </FadeUp>
    <Body>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <FadeUp delay={0.06}><AgendaRow num="01." text="Agents Window as the mobile sidecar" /></FadeUp>
        <FadeUp delay={0.12}><AgendaRow num="02." text="iOS: Apple Xcode MCP bridge" /></FadeUp>
        <FadeUp delay={0.18}><AgendaRow num="03." text="Live: Snapchat-clone lenses in Simulator" /></FadeUp>
        <FadeUp delay={0.24}><AgendaRow num="04." text="Android: JetBrains ACP + IDE MCP" /></FadeUp>
        <FadeUp delay={0.3}><AgendaRow num="05." text="Live: Keep notes + IntelliJ plugin" /></FadeUp>
        <FadeUp delay={0.36}><AgendaRow num="06." text="Skills, spend, and what is coming next" /></FadeUp>
      </div>
    </Body>
  </ContentPage>
);

// 3. Framing
const Framing: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>Framing</Eyebrow>
      <Title>Keep Xcode and Android Studio. Cursor is the sidecar.</Title>
    </FadeUp>
    <Body>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: '1fr', gap: 22 }}>
        <FadeUp delay={0.08} fill>
          <Column label="iOS" heading="Stay in Xcode">
            Build, sign, and run stay where they already work. Nothing about your toolchain moves.
          </Column>
        </FadeUp>
        <FadeUp delay={0.16} fill>
          <Column label="Android" heading="Stay in Studio">
            Android Studio and IntelliJ keep owning the emulator, Gradle, and the debugger.
          </Column>
        </FadeUp>
        <FadeUp delay={0.24} fill>
          <Column label="Cursor" heading="Agents Window + MCP">
            Runs beside your IDE and reaches into it through MCP, and ACP on Android.
          </Column>
        </FadeUp>
      </div>
    </Body>
  </ContentPage>
);

// 4. Agents Window (what it is)
const AgentsWindow: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>Agents Window</Eyebrow>
      <Title>An agent-first native app, not a VS Code fork</Title>
    </FadeUp>
    <Body>
      <FadeUp delay={0.08}>
        <p style={{ margin: '0 0 30px', fontSize: 34, lineHeight: 1.45, color: colors.body, maxWidth: 1520 }}>
          The Agents Window is a standalone app built around agents. It does not replace the mobile IDE. It sits next to it.
        </p>
      </FadeUp>
      <ul style={{ margin: 0, padding: 0 }}>
        <FadeUp delay={0.16}><SquareBullet>Open it from the Command Palette, or the Agents Window button top-right</SquareBullet></FadeUp>
        <FadeUp delay={0.24}><SquareBullet>Run it as a sidecar beside Xcode or Android Studio</SquareBullet></FadeUp>
        <FadeUp delay={0.32}><SquareBullet>Keep your IDE for building, signing, and running the app</SquareBullet></FadeUp>
      </ul>
    </Body>
  </ContentPage>
);

// 5. Agents Window layout
const AgentsLayout: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>Agents Window</Eyebrow>
      <Title>Inside the window: prompt, agents, workspace</Title>
    </FadeUp>
    <Body>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: '1fr', gap: 22 }}>
        <FadeUp delay={0.08} fill>
          <Column label="Left" heading="Prompt pane">
            Where you brief the agent and steer the run.
          </Column>
        </FadeUp>
        <FadeUp delay={0.16} fill>
          <Column label="Center" heading="Agent list">
            Every agent across your workspaces, running in parallel.
          </Column>
        </FadeUp>
        <FadeUp delay={0.24} fill>
          <Column label="Right" heading="Workspace panel">
            Files, a sandbox terminal, Cursor Browser, and review or commit.
          </Column>
        </FadeUp>
      </div>
      <FadeUp delay={0.32}>
        <div style={{ marginTop: 22 }}>
          <SoftRow>
            <RowLead>Marketplace for plugins</RowLead>
            <RowCopy>Install MCP servers and skills packs so the window can reach your IDE.</RowCopy>
          </SoftRow>
        </div>
      </FadeUp>
    </Body>
  </ContentPage>
);

// 6. The missing piece
const MissingPiece: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>The missing piece</Eyebrow>
      <Title>Generating Swift and Kotlin is the easy part</Title>
    </FadeUp>
    <Body>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <FadeUp delay={0.1}>
          <SoftRow>
            <RowLead>Easy: writing the code</RowLead>
            <RowCopy>An agent produces Swift and Kotlin edits all day without touching your IDE.</RowCopy>
          </SoftRow>
        </FadeUp>
        <FadeUp delay={0.2}>
          <SoftRow>
            <RowLead>The gap: proving it runs</RowLead>
            <RowCopy>Build, Simulator and emulator, logs, and diagnostics all live inside the real IDE.</RowCopy>
          </SoftRow>
        </FadeUp>
        <FadeUp delay={0.3}>
          <SoftRow highlight>
            <RowLead>MCP, and ACP on Android, close the loop</RowLead>
            <RowCopy>The bridge lets the agent build, run, and read results back from the IDE itself.</RowCopy>
          </SoftRow>
        </FadeUp>
      </div>
    </Body>
  </ContentPage>
);

// 7. iOS setup
const IosSetup: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>iOS setup</Eyebrow>
      <Title>iOS: install the Apple Xcode MCP</Title>
    </FadeUp>
    <Body>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <FadeUp delay={0.08}>
          <SoftRow>
            <RowLead>Apple maintains the Xcode MCP server</RowLead>
            <RowCopy>It ships from Apple, so the bridge tracks Xcode itself.</RowCopy>
          </SoftRow>
        </FadeUp>
        <FadeUp delay={0.16}>
          <SoftRow>
            <RowLead>Install it into ~/.cursor/mcp.json</RowLead>
            <RowCopy>Use the deep link, or paste the server JSON by hand.</RowCopy>
          </SoftRow>
        </FadeUp>
        <FadeUp delay={0.24}>
          <SoftRow>
            <RowLead>Approve the Xcode Allow prompts</RowLead>
            <RowCopy>Annoying but expected the first time each capability is used.</RowCopy>
          </SoftRow>
        </FadeUp>
      </div>
      <FadeUp delay={0.34}>
        <div style={{ display: 'flex', alignItems: 'stretch', marginTop: 24 }}>
          <FlowCard label="Xcode XPC" detail="The IDE exposes actions" />
          <Arrow />
          <FlowCard label="MCP server" detail="Apple's Xcode bridge" />
          <Arrow />
          <FlowCard label="Cursor MCP client" detail="The agent calls in" />
        </div>
      </FadeUp>
    </Body>
  </ContentPage>
);

// 8. Xcode MCP map
const McpMapRow = ({ label, detail, highlight = false }: { label: string; detail: string; highlight?: boolean }) => (
  <SoftRow highlight={highlight}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, flexWrap: 'wrap' }}>
      <span style={{ fontSize: 30, fontWeight: 700, color: highlight ? colors.accent : colors.text, minWidth: 300 }}>
        {label}
      </span>
      <span style={{ fontSize: 27, lineHeight: 1.3, color: colors.secondary }}>{detail}</span>
    </div>
  </SoftRow>
);

const XcodeMcpMap: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>iOS</Eyebrow>
      <Title>What the Xcode MCP exposes</Title>
    </FadeUp>
    <Body>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <FadeUp delay={0.06}><McpMapRow label="File System" detail="Read and edit files in the Xcode project" /></FadeUp>
        <FadeUp delay={0.12}><McpMapRow label="Build & Test" detail="Build, run, and test straight from the agent" /></FadeUp>
        <FadeUp delay={0.18}><McpMapRow label="Diagnostics" detail="Errors, warnings, and runtime logs" /></FadeUp>
        <FadeUp delay={0.24}><McpMapRow label="Intelligence" detail="Docs, Simulator previews, and Swift snippets" highlight /></FadeUp>
        <FadeUp delay={0.3}><McpMapRow label="Workspace" detail="Schemes, targets, and project state" /></FadeUp>
      </div>
    </Body>
  </ContentPage>
);

// 9. Intelligence trio
const IntelligenceTrio: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>iOS</Eyebrow>
      <Title>The Intelligence tools change the loop</Title>
    </FadeUp>
    <Body>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: '1fr', gap: 22 }}>
        <FadeUp delay={0.08} fill>
          <Column label="DocumentationSearch" heading="Apple docs in context">
            Pulls Apple documentation and WWDC guidance without leaving the run.
          </Column>
        </FadeUp>
        <FadeUp delay={0.16} fill>
          <Column label="RenderPreview" heading="See the screen">
            Sends Simulator screenshots back to the agent as visual proof.
          </Column>
        </FadeUp>
        <FadeUp delay={0.24} fill>
          <Column label="ExecuteSnippet" heading="Run Swift">
            Runs Swift in a REPL to check behavior before committing to an edit.
          </Column>
        </FadeUp>
      </div>
    </Body>
  </ContentPage>
);

// 10. Live loop (linear)
const LiveLoop: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>Live</Eyebrow>
      <Title>The live loop, end to end</Title>
    </FadeUp>
    <Body>
      <FadeUp delay={0.1}>
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          <FlowCard label="Prompt" detail="Describe the change" />
          <Arrow />
          <FlowCard label="Edit" detail="Agent writes Swift" />
          <Arrow />
          <FlowCard label="Build & run" detail="Via the Xcode MCP" />
          <Arrow />
          <FlowCard label="Proof" detail="Simulator screenshot" />
          <Arrow />
          <FlowCard label="Iterate" detail="Refine and repeat" />
        </div>
      </FadeUp>
      <FadeUp delay={0.24}>
        <div style={{ marginTop: 26 }}>
          <SoftRow>
            <RowLead>Demo: Snapchat-clone home lenses</RowLead>
            <RowCopy>Collapse the row of lenses into one Lenses button that opens the tray on tap.</RowCopy>
          </SoftRow>
        </div>
      </FadeUp>
    </Body>
  </ContentPage>
);

// 11. Android path A: ACP
const AndroidAcp: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>Android · Path A</Eyebrow>
      <Title>JetBrains ACP: Cursor inside AI Assistant</Title>
    </FadeUp>
    <Body>
      <ul style={{ margin: '0 0 8px', padding: 0 }}>
        <FadeUp delay={0.1}><SquareBullet>JetBrains AI Assistant plugin plus the Cursor CLI as the ACP bridge</SquareBullet></FadeUp>
        <FadeUp delay={0.18}><SquareBullet>Install Cursor from the ACP registry inside AI Chat</SquareBullet></FadeUp>
        <FadeUp delay={0.26}><SquareBullet>Pass-through to the IntelliJ MCP is optional</SquareBullet></FadeUp>
      </ul>
      <FadeUp delay={0.34}>
        <div style={{ display: 'flex', gap: 18, marginTop: 18, flexWrap: 'wrap' }}>
          <Chip>Ask</Chip>
          <Chip>Plan</Chip>
          <Chip>Agent</Chip>
          <Chip dim>Debug: not in ACP yet</Chip>
        </div>
      </FadeUp>
    </Body>
  </ContentPage>
);

// 12. Android path B: IDE MCP + plugin
const AndroidMcp: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>Android · Path B</Eyebrow>
      <Title>IDE MCP plus the IntelliJ Cursor plugin</Title>
    </FadeUp>
    <Body>
      <ul style={{ margin: '0 0 8px', padding: 0 }}>
        <FadeUp delay={0.1}><SquareBullet>Add the MCP Server and Debugger MCP plugins in Android Studio</SquareBullet></FadeUp>
        <FadeUp delay={0.18}><SquareBullet>Sunny's IntelliJ Cursor plugin wires MCP client defs and skills</SquareBullet></FadeUp>
        <FadeUp delay={0.26}><SquareBullet>The sidecar Agents Window stays preferred for the full modes</SquareBullet></FadeUp>
      </ul>
      <FadeUp delay={0.34}>
        <div style={{ marginTop: 18 }}>
          <SoftRow>
            <RowLead>GitHub: sanatshah / Cursor-Plugin</RowLead>
            <RowCopy>Open-source plugin that registers the MCP clients and skills for you.</RowCopy>
          </SoftRow>
        </div>
      </FadeUp>
    </Body>
  </ContentPage>
);

// 13. Android live
const AndroidLive: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>Live</Eyebrow>
      <Title>Android live: duplicate a note</Title>
    </FadeUp>
    <Body>
      <FadeUp delay={0.1}>
        <div style={{ display: 'flex', alignItems: 'stretch' }}>
          <FlowCard label="Prompt" detail="Add duplicate-note" />
          <Arrow />
          <FlowCard label="Edit in Studio" detail="Agent writes Kotlin" />
          <Arrow />
          <FlowCard label="MCP / ACP" detail="Drive IDE actions" />
          <Arrow />
          <FlowCard label="See it" detail="Note duplicates" />
        </div>
      </FadeUp>
      <FadeUp delay={0.24}>
        <div style={{ marginTop: 26 }}>
          <SoftRow>
            <RowLead>A Google Keep-style notes app</RowLead>
            <RowCopy>Optionally open each edited file as the agent works so the room can follow along.</RowCopy>
          </SoftRow>
        </div>
      </FadeUp>
    </Body>
  </ContentPage>
);

// 14. Tips
const Tips: Page = () => (
  <ContentPage>
    <FadeUp>
      <Eyebrow>Wrap-up</Eyebrow>
      <Title>Tips, and what is coming next</Title>
    </FadeUp>
    <Body>
      <ul style={{ margin: 0, padding: 0 }}>
        <FadeUp delay={0.08}><SquareBullet>Prefer skills over rules for rebuild, run, and profile steps</SquareBullet></FadeUp>
        <FadeUp delay={0.14}><SquareBullet>Use Composer or execution models for heavy MCP to control spend</SquareBullet></FadeUp>
        <FadeUp delay={0.2}><SquareBullet>Run parallel agents across iOS and Android workspaces in one window</SquareBullet></FadeUp>
        <FadeUp delay={0.26}><SquareBullet>React Native and Expo are easier: hot reload, less build MCP</SquareBullet></FadeUp>
        <FadeUp delay={0.32}><SquareBullet>Simulator click automation is not available yet; screenshots are</SquareBullet></FadeUp>
        <FadeUp delay={0.38}><SquareBullet>Cloud Android emulators and richer mobile cloud are coming, not GA</SquareBullet></FadeUp>
      </ul>
    </Body>
  </ContentPage>
);

// 15. Closer (dark)
const Closer: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: colors.dark,
      color: '#FFFFFF',
      padding: PAD,
      position: 'relative',
      boxSizing: 'border-box',
      fontFamily: font,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Styles />
    <SpaceXAILogo onDark />
    <div className="mobileFadeUp">
      <HeroTitle>Mobile is not unsupported.</HeroTitle>
      <p style={{ margin: '32px 0 0', fontSize: 42, fontWeight: 400, lineHeight: 1.3, color: colors.darkText, maxWidth: 1400 }}>
        You need the IDE MCP or ACP bridge, and the Agents Window sidecar.
      </p>
    </div>
    <div className="mobileFadeUp" style={{ marginTop: 56, animationDelay: '0.14s' }}>
      <div style={{ fontSize: 48, fontWeight: 700, color: '#FFFFFF' }}>Questions?</div>
      <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.darkMuted, marginTop: 18 }}>
        Apr 2026 · Cursor workshop
      </div>
    </div>
  </div>
);

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';

export const transition: SlideTransition = {
  duration: 200,
  exit: {
    duration: 140,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-4px)' },
    ],
  },
  enter: {
    duration: 200,
    delay: 80,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

export const meta: SlideMeta = {
  title: 'Cursor for Mobile Developers',
  theme: 'spacexai-brand',
  createdAt: '2026-09-23T17:38:06.274Z',
};

export default [
  Cover,
  Agenda,
  Framing,
  AgentsWindow,
  AgentsLayout,
  MissingPiece,
  IosSetup,
  XcodeMcpMap,
  IntelligenceTrio,
  LiveLoop,
  AndroidAcp,
  AndroidMcp,
  AndroidLive,
  Tips,
  Closer,
] satisfies Page[];
