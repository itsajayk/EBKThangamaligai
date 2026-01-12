import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchRates, updateRates } from "../Services/ratesApi";

/**
 * AdminPanel
 * - Fetches current rates and metadata
 * - Allows add / remove / edit / reorder (move up/down)
 * - Shows a live preview (mini)
 * - Requires admin password to save
 * - Displays status and server updatedAt after save
 */

export default function AdminPanel() {
  const [data, setData] = useState(null);
  const [rates, setRates] = useState([]);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
  const [adminPass, setAdminPass] = useState("");
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetchRates()
      .then((d) => {
        if (!mounted) return;
        setData(d);
        setRates(Array.isArray(d.rates) ? d.rates : []);
        setMessage(d.message || "");
        setVisible(Boolean(d.visible));
      })
      .catch((err) => {
        console.error("fetchRates failed", err);
        setStatus("Failed to load rates");
      });
    return () => (mounted = false);
  }, []);

  function updateRateAt(i, field, value) {
    setRates((rs) => rs.map((r, idx) => (idx === i ? { ...r, [field]: value } : r)));
  }

  function addRate() {
    setRates((rs) => [...rs, { label: "New Label", value: "" }]);
  }

  function removeRate(i) {
    if (!window.confirm("Remove this rate?")) return;
    setRates((rs) => rs.filter((_, idx) => idx !== i));
  }

  function moveUp(i) {
    if (i === 0) return;
    setRates((rs) => {
      const copy = [...rs];
      [copy[i - 1], copy[i]] = [copy[i], copy[i - 1]];
      return copy;
    });
  }

  function moveDown(i) {
    setRates((rs) => {
      if (i === rs.length - 1) return rs;
      const copy = [...rs];
      [copy[i + 1], copy[i]] = [copy[i], copy[i + 1]];
      return copy;
    });
  }

  async function save() {
    if (!adminPass) {
      setStatus("Enter admin password");
      return;
    }
    setSaving(true);
    setStatus("Saving...");
    try {
      const payload = { visible, message, rates };
      const res = await updateRates(payload, adminPass);
      // update local state with server response if provided
      if (res?.data) {
        setData(res.data);
        setRates(res.data.rates || []);
        setMessage(res.data.message || "");
        setVisible(Boolean(res.data.visible));
        setStatus("Saved successfully");
      } else {
        setStatus("Saved (no server response body)");
      }
    } catch (err) {
      console.error(err);
      setStatus("Save failed: " + (err?.message || String(err)));
    } finally {
      setSaving(false);
      setTimeout(() => setStatus(""), 3500);
    }
  }

  const updatedAt = data?.updatedAt ? new Date(data.updatedAt).toLocaleString() : null;

  return (
    <Panel>
      <Header>
        <h3>Admin — Info Bar</h3>
        <Meta>Last saved: {updatedAt || "—"}</Meta>
      </Header>

      <FormRow>
        <label>Visible</label>
        <input type="checkbox" checked={visible} onChange={(e) => setVisible(e.target.checked)} />
      </FormRow>

      <FormRow>
        <label>Message</label>
        <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Today's Gold & Silver Rates" />
      </FormRow>

      <SectionTitle>Rates</SectionTitle>

      {rates.length === 0 && <InfoNote>No rates configured. Add a rate below.</InfoNote>}

      {rates.map((r, i) => (
        <RateRow key={i}>
          <div style={{ flex: 1 }}>
            <SmallLabel>Label</SmallLabel>
            <input value={r.label} onChange={(e) => updateRateAt(i, "label", e.target.value)} />
          </div>

          <div style={{ width: 160 }}>
            <SmallLabel>Value (numeric)</SmallLabel>
            <input value={r.value} onChange={(e) => updateRateAt(i, "value", e.target.value)} />
          </div>

          <Actions>
            <button type="button" onClick={() => moveUp(i)} title="Move up">▲</button>
            <button type="button" onClick={() => moveDown(i)} title="Move down">▼</button>
            <button type="button" onClick={() => removeRate(i)} title="Remove">✕</button>
          </Actions>
        </RateRow>
      ))}

      <AddRow>
        <button type="button" onClick={addRate}>+ Add rate</button>
      </AddRow>

      <FormRow style={{ marginTop: 18 }}>
        <label>Admin password</label>
        <input type="password" value={adminPass} onChange={(e) => setAdminPass(e.target.value)} placeholder="Admin password" />
      </FormRow>

      <SaveRow>
        <button onClick={save} disabled={saving}>{saving ? "Saving..." : "Save changes"}</button>
        <Status>{status}</Status>
      </SaveRow>

      <PreviewTitle>Preview</PreviewTitle>
      <PreviewBar role="status" aria-live="polite">
        <PreviewLeft>{message || "Today's Rates"}</PreviewLeft>
        <PreviewTicker>
          {rates.length === 0 ? (
            <PreviewItem>No rates</PreviewItem>
          ) : (
            rates.map((r, i) => (
              <PreviewItem key={i}>
                <span>{r.label}</span>
                <strong>₹{r.value}</strong>
              </PreviewItem>
            ))
          )}
        </PreviewTicker>
        <PreviewRight>{updatedAt ? `Updated ${updatedAt}` : "—"}</PreviewRight>
      </PreviewBar>
    </Panel>
  );
}

/* ================= styles ================= */

const Panel = styled.div`
  max-width: 920px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 12px 40px rgba(0,0,0,0.06);
  font-family: "Khula", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
`;

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom: 12px;

  h3 { margin: 0; }
`;

const Meta = styled.div`
  font-size: 13px;
  color: #666;
`;

const FormRow = styled.div`
  display:flex;
  align-items:center;
  gap:12px;
  margin:12px 0;

  label { min-width:140px; font-weight:700; color:#222; }
  input[type="text"], input[type="password"], input[type="number"], input[type="email"], input {
    padding:8px 10px;
    border-radius:8px;
    border:1px solid #e6e6e6;
    width:100%;
  }
  input[type="checkbox"] { transform:scale(1.1); }
`;

const SectionTitle = styled.h4`
  margin-top: 18px;
  margin-bottom: 8px;
`;

const InfoNote = styled.div`
  padding: 10px 12px;
  background: #fffbe6;
  border-radius: 8px;
  color: #8a6b00;
  margin-bottom: 12px;
`;

const RateRow = styled.div`
  display:flex;
  gap:12px;
  margin:8px 0;
  align-items:flex-end;

  input { padding:8px 10px; border-radius: 8px; border:1px solid #e6e6e6; width:100%; }
`;

const SmallLabel = styled.div`
  font-size:12px;
  color:#666;
  margin-bottom:6px;
`;

const Actions = styled.div`
  display:flex;
  gap:6px;

  button {
    padding:8px 10px;
    border-radius:8px;
    border:1px solid #ddd;
    background:#fff;
    cursor:pointer;
  }
`;

const AddRow = styled.div`
  margin-top:8px;
`;

const SaveRow = styled.div`
  margin-top:18px;
  display:flex;
  align-items:center;
  gap:12px;

  button {
    padding:10px 16px;
    border-radius:10px;
    border:0;
    background:#c9a24d;
    color:#111;
    font-weight:700;
    cursor:pointer;
  }
`;

const Status = styled.div`
  color:#444;
  font-size:13px;
`;

const PreviewTitle = styled.h5`
  margin-top: 20px;
  margin-bottom: 8px;
`;

const PreviewBar = styled.div`
  display:flex;
  gap:12px;
  align-items:center;
  background: linear-gradient(90deg,#ffda66,#ffcf33);
  padding:8px 12px;
  border-radius:10px;
`;

const PreviewLeft = styled.div`
  min-width:180px;
  font-weight:700;
`;

const PreviewTicker = styled.div`
  display:flex;
  gap:12px;
  flex:1;
  overflow:hidden;
  align-items:center;
`;

const PreviewItem = styled.div`
  display:flex;
  gap:8px;
  align-items:center;
  white-space:nowrap;
  font-weight:700;

  strong { color:#b40000; margin-left:6px; }
`;

const PreviewRight = styled.div`
  min-width:140px;
  text-align:right;
  font-size:13px;
  color:#444;
`;
