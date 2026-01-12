// src/services/ratesApi.js
const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:4001';

export async function fetchRates() {
  const res = await fetch(`${API_BASE}/api/rates`);
  if (!res.ok) throw new Error('Failed to load rates');
  return res.json();
}

/**
 * updatePayload: { visible, message, rates: [{label, value}, ...] }
 * adminPass: string
 */
export async function updateRates(updatePayload, adminPass) {
  const res = await fetch(`${API_BASE}/api/rates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-admin-pass': adminPass
    },
    body: JSON.stringify(updatePayload)
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Failed to update rates');
  }
  return res.json();
}
