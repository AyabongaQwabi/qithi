'use client';

import { useState, useEffect, useCallback } from 'react';

type TabType = 'membership' | 'help' | 'genomy' | 'oral_history' | 'directory';
type Row = Record<string, unknown>;

const TABS: { id: TabType; label: string; table: string }[] = [
  { id: 'membership',   label: 'Membership',    table: 'membership_applications' },
  { id: 'help',         label: 'Help Requests',  table: 'help_requests' },
  { id: 'genomy',       label: 'Genomy',         table: 'genomy_signups' },
  { id: 'oral_history', label: 'Oral History',   table: 'oral_history_submissions' },
  { id: 'directory',    label: 'Directory',      table: 'directory_registrations' },
];

const STATUS_OPTIONS: Record<TabType, string[]> = {
  membership:   ['pending', 'under_review', 'approved', 'rejected', 'suspended'],
  help:         ['pending', 'under_review', 'approved', 'rejected', 'fulfilled'],
  genomy:       ['not_sent', 'kit_sent', 'sample_received', 'processing', 'complete'],
  oral_history: ['received', 'reviewed', 'published', 'archived'],
  directory:    [],
};

const STATUS_FIELD: Record<TabType, string> = {
  membership:   'status',
  help:         'status',
  genomy:       'kit_status',
  oral_history: 'status',
  directory:    '',
};

const STATUS_COLORS: Record<string, string> = {
  pending:        '#E8A857',
  under_review:   '#D4A96A',
  approved:       '#4CAF50',
  rejected:       '#f44336',
  suspended:      '#9E8C7A',
  fulfilled:      '#4CAF50',
  not_sent:       '#9E8C7A',
  kit_sent:       '#E8A857',
  sample_received:'#D4A96A',
  processing:     '#D4A96A',
  complete:       '#4CAF50',
  received:       '#E8A857',
  reviewed:       '#D4A96A',
  published:      '#4CAF50',
  archived:       '#9E8C7A',
};

const s = {
  page: {
    minHeight: '100vh',
    background: '#1A0F0A',
    color: '#F5E6C8',
    fontFamily: 'var(--font-body), Inter, sans-serif',
  } as React.CSSProperties,
  header: {
    background: '#2C1810',
    borderBottom: '1px solid rgba(196, 98, 45, 0.3)',
    padding: '20px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as React.CSSProperties,
};

function PasswordGate({ onAuth }: { onAuth: () => void }) {
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: pw }),
    });
    if (res.ok) {
      onAuth();
    } else {
      setError('Incorrect password.');
    }
    setLoading(false);
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#1A0F0A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div
        style={{
          background: '#2C1810',
          border: '1px solid rgba(196, 98, 45, 0.3)',
          padding: '48px',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: '2rem',
            fontWeight: 600,
            color: '#E8A857',
            marginBottom: '8px',
          }}
        >
          AmaQithi
        </p>
        <p
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#C4622D',
            marginBottom: '32px',
          }}
        >
          Admin Portal
        </p>
        <form onSubmit={handleSubmit}>
          <label
            style={{
              display: 'block',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#D4A96A',
              marginBottom: '8px',
            }}
          >
            Password
          </label>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            required
            autoFocus
            style={{
              width: '100%',
              background: 'rgba(245,230,200,0.05)',
              border: '1px solid rgba(196,98,45,0.3)',
              padding: '10px 14px',
              color: '#F5E6C8',
              fontSize: '0.9rem',
              outline: 'none',
              marginBottom: '16px',
              display: 'block',
              boxSizing: 'border-box',
            }}
          />
          {error && (
            <p style={{ color: '#C4622D', fontSize: '0.8rem', marginBottom: '12px' }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              background: '#C4622D',
              color: '#F5E6C8',
              border: 'none',
              padding: '12px',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            {loading ? 'Checking…' : 'Enter'}
          </button>
        </form>
      </div>
    </div>
  );
}

function StatusBadge({ value }: { value: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '0.6rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: STATUS_COLORS[value] ?? '#9E8C7A',
        border: `1px solid ${STATUS_COLORS[value] ?? '#9E8C7A'}`,
        padding: '2px 8px',
        whiteSpace: 'nowrap',
      }}
    >
      {value}
    </span>
  );
}

function EntryRow({
  row,
  index,
  tabId,
  table,
  onUpdated,
}: {
  row: Row;
  index: number;
  tabId: TabType;
  table: string;
  onUpdated: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const [newStatus, setNewStatus] = useState('');
  const [notes, setNotes] = useState('');
  const [updating, setUpdating] = useState(false);
  const [updateMsg, setUpdateMsg] = useState('');

  const name = `${row.full_name ?? ''} ${row.surname ?? ''}`.trim() || '—';
  const email = String(row.email ?? '—');
  const date = row.created_at
    ? new Date(String(row.created_at)).toLocaleDateString('en-ZA')
    : '—';
  const statusField = STATUS_FIELD[tabId];
  const currentStatus = statusField ? String(row[statusField] ?? '') : '';
  const statusOptions = STATUS_OPTIONS[tabId];

  async function handleUpdateStatus() {
    if (!newStatus) return;
    setUpdating(true);
    setUpdateMsg('');
    try {
      const res = await fetch('/api/admin/update-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ table, id: row.id, status: newStatus, reviewer_notes: notes }),
      });
      if (res.ok) {
        setUpdateMsg('Updated.');
        onUpdated();
      } else {
        setUpdateMsg('Failed to update.');
      }
    } catch {
      setUpdateMsg('Network error.');
    } finally {
      setUpdating(false);
    }
  }

  return (
    <div
      style={{
        background: index % 2 === 0 ? '#2C1810' : 'rgba(44,24,16,0.5)',
        borderBottom: '1px solid rgba(196,98,45,0.1)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr auto auto auto',
          gap: '12px',
          padding: '12px 20px',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.88rem', color: '#F5E6C8' }}>{name}</span>
        <span style={{ fontSize: '0.82rem', color: '#9E8C7A', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {email}
        </span>
        <span style={{ fontSize: '0.72rem', color: '#9E8C7A', whiteSpace: 'nowrap' }}>{date}</span>
        {currentStatus && <StatusBadge value={currentStatus} />}
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'none',
            border: '1px solid rgba(196,98,45,0.3)',
            color: '#C4622D',
            padding: '4px 12px',
            fontSize: '0.72rem',
            letterSpacing: '0.06em',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {expanded ? 'Hide' : 'View'}
        </button>
      </div>

      {expanded && (
        <div style={{ padding: '4px 20px 24px', borderTop: '1px solid rgba(196,98,45,0.1)' }}>
          {/* All fields */}
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', marginBottom: '20px' }}>
            <tbody>
              {Object.entries(row).map(([k, v]) => (
                <tr key={k}>
                  <td
                    style={{
                      padding: '5px 12px 5px 0',
                      color: '#9E8C7A',
                      whiteSpace: 'nowrap',
                      verticalAlign: 'top',
                      width: '180px',
                      fontSize: '0.75rem',
                    }}
                  >
                    {k}
                  </td>
                  <td style={{ padding: '5px 0', color: '#D4A96A', lineHeight: 1.5 }}>
                    {v === null || v === undefined
                      ? <span style={{ color: '#9E8C7A', fontStyle: 'italic' }}>—</span>
                      : typeof v === 'object'
                      ? JSON.stringify(v)
                      : String(v)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Status update */}
          {statusOptions.length > 0 && (
            <div
              style={{
                background: 'rgba(196,98,45,0.06)',
                border: '1px solid rgba(196,98,45,0.2)',
                padding: '16px 20px',
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
              }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#9E8C7A',
                    marginBottom: '6px',
                  }}
                >
                  Update Status
                </label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  style={{
                    background: '#1A0F0A',
                    border: '1px solid rgba(196,98,45,0.3)',
                    color: '#F5E6C8',
                    padding: '6px 12px',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                  }}
                >
                  <option value="">Select…</option>
                  {statusOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#9E8C7A',
                    marginBottom: '6px',
                  }}
                >
                  Reviewer Notes
                </label>
                <input
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Optional notes…"
                  style={{
                    width: '100%',
                    background: '#1A0F0A',
                    border: '1px solid rgba(196,98,45,0.3)',
                    color: '#F5E6C8',
                    padding: '6px 12px',
                    fontSize: '0.8rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <button
                onClick={handleUpdateStatus}
                disabled={!newStatus || updating}
                style={{
                  background: newStatus ? '#C4622D' : 'rgba(196,98,45,0.2)',
                  border: 'none',
                  color: '#F5E6C8',
                  padding: '8px 20px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: newStatus ? 'pointer' : 'not-allowed',
                }}
              >
                {updating ? 'Saving…' : 'Save'}
              </button>
              {updateMsg && (
                <span style={{ fontSize: '0.8rem', color: '#E8A857' }}>{updateMsg}</span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TabContent({ tabId, table }: { tabId: TabType; table: string }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [count, setCount] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/admin/entries?type=${tabId}&page=${page}`);
      if (!res.ok) throw new Error('Failed to load');
      const json = await res.json() as { entries: Row[]; count: number };
      setRows(json.entries ?? []);
      setCount(json.count ?? 0);
    } catch {
      setError('Failed to load entries.');
    } finally {
      setLoading(false);
    }
  }, [tabId, page]);

  useEffect(() => { load(); }, [load]);

  const pendingCount = rows.filter(
    (r) => r.status === 'pending' || r.status === 'received' || r.kit_status === 'not_sent'
  ).length;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div
            style={{
              background: 'rgba(196,98,45,0.1)',
              border: '1px solid rgba(196,98,45,0.25)',
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 600,
                color: '#E8A857',
              }}
            >
              {loading ? '—' : (count ?? rows.length)}
            </span>
            <span style={{ fontSize: '0.65rem', color: '#9E8C7A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              total
            </span>
          </div>
          {pendingCount > 0 && (
            <div
              style={{
                background: 'rgba(232,168,87,0.1)',
                border: '1px solid rgba(232,168,87,0.35)',
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: '#E8A857',
                }}
              >
                {pendingCount}
              </span>
              <span style={{ fontSize: '0.65rem', color: '#9E8C7A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                pending
              </span>
            </div>
          )}
        </div>
        <button
          onClick={() => { window.location.href = `/api/admin/export?type=${tabId}`; }}
          style={{
            background: 'transparent',
            border: '1px solid #C4622D',
            color: '#C4622D',
            padding: '10px 20px',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Export CSV
        </button>
      </div>

      {/* Column header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr auto auto auto',
          gap: '12px',
          padding: '8px 20px',
          background: 'rgba(196,98,45,0.08)',
          borderBottom: '1px solid rgba(196,98,45,0.2)',
          fontSize: '0.6rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#9E8C7A',
        }}
      >
        <span>Name</span>
        <span>Email</span>
        <span>Date</span>
        <span>Status</span>
        <span></span>
      </div>

      {loading && (
        <p style={{ padding: '24px 20px', color: '#9E8C7A', fontSize: '0.85rem' }}>Loading…</p>
      )}
      {error && (
        <p style={{ padding: '24px 20px', color: '#C4622D', fontSize: '0.85rem' }}>{error}</p>
      )}
      {!loading && !error && rows.length === 0 && (
        <p style={{ padding: '24px 20px', color: '#9E8C7A', fontSize: '0.85rem' }}>No entries yet.</p>
      )}
      {!loading && rows.map((row, i) => (
        <EntryRow
          key={String(row.id ?? i)}
          row={row}
          index={i}
          tabId={tabId}
          table={table}
          onUpdated={load}
        />
      ))}

      {/* Pagination */}
      {(count ?? 0) > 50 && (
        <div style={{ display: 'flex', gap: '8px', padding: '20px', justifyContent: 'center' }}>
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            style={{
              background: 'none',
              border: '1px solid rgba(196,98,45,0.3)',
              color: '#C4622D',
              padding: '6px 16px',
              fontSize: '0.75rem',
              cursor: page === 1 ? 'not-allowed' : 'pointer',
              opacity: page === 1 ? 0.4 : 1,
            }}
          >
            ← Prev
          </button>
          <span style={{ display: 'flex', alignItems: 'center', fontSize: '0.75rem', color: '#9E8C7A', padding: '0 8px' }}>
            Page {page}
          </span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={rows.length < 50}
            style={{
              background: 'none',
              border: '1px solid rgba(196,98,45,0.3)',
              color: '#C4622D',
              padding: '6px 16px',
              fontSize: '0.75rem',
              cursor: rows.length < 50 ? 'not-allowed' : 'pointer',
              opacity: rows.length < 50 ? 0.4 : 1,
            }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('membership');

  if (!authed) {
    return <PasswordGate onAuth={() => setAuthed(true)} />;
  }

  const activeTabDef = TABS.find((t) => t.id === activeTab)!;

  return (
    <div style={s.page}>
      <header style={s.header}>
        <span
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#E8A857',
          }}
        >
          AmaQithi
        </span>
        <span
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C4622D',
          }}
        >
          Admin Portal
        </span>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '1px',
            background: 'rgba(196,98,45,0.15)',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'rgba(196,98,45,0.15)' : '#2C1810',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #C4622D' : '2px solid transparent',
                padding: '14px 20px',
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: activeTab === tab.id ? '#E8A857' : '#9E8C7A',
                letterSpacing: '0.04em',
                cursor: 'pointer',
                flex: 1,
                minWidth: '120px',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <TabContent key={activeTab} tabId={activeTab} table={activeTabDef.table} />
      </div>
    </div>
  );
}
