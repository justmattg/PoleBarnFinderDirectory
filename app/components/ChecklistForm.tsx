'use client';

import { useState, FormEvent } from 'react';

export default function ChecklistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    // TODO: Replace with SendFox API POST — Matt will provide list ID
    console.log('Checklist signup:', { name: name.trim(), email: email.trim() });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="cta-block" style={{ borderStyle: 'dashed', borderColor: 'var(--copper)' }}>
        <h3>Check Your Inbox!</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Your printable checklist is on its way.
        </p>
        <a href="https://polebarnfinder.com" target="_blank" rel="noopener" className="btn-primary">
          Find Builders in Your State →
        </a>
      </div>
    );
  }

  return (
    <div className="cta-block" style={{ borderStyle: 'dashed', borderColor: 'var(--copper)', background: 'var(--bg-section-alt)' }}>
      <h3>Download the Printable Checklist (PDF)</h3>
      <p>Get all 8 questions formatted as a 1-page printable checklist with blank lines for notes to take to your builder meetings.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto' }}>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="given-name"
          style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-warm)', fontSize: '16px', fontFamily: 'var(--font-dm-sans)', background: 'var(--bg-warm-white)' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
          style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-warm)', fontSize: '16px', fontFamily: 'var(--font-dm-sans)', background: 'var(--bg-warm-white)' }}
        />
        <button type="submit" className="btn-primary" style={{ width: '100%' }}>
          Send My Free Checklist
        </button>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
          Professional advice, no spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
