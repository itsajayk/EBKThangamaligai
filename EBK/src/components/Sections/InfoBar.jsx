import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { fetchRates } from "../Services/ratesApi";

/**
 * InfoBar - infinite scrolling financial ticker
 * - Fixed height (40px)
 * - Duplicates items for seamless loop
 * - Pauses on hover (desktop)
 * - Exposes --info-bar-height CSS var for navbar offset
 * - Respects prefers-reduced-motion
 */

export default function InfoBar() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchRates()
      .then((d) => {
        if (!mounted) return;
        setData(d);
        document.documentElement.style.setProperty(
          "--info-bar-height",
          d?.visible ? "40px" : "0px"
        );
      })
      .catch(() => {
        // quietly fail; keep bar hidden if API fails
        if (!mounted) return;
        setData(null);
        document.documentElement.style.setProperty("--info-bar-height", "0px");
      });

    return () => {
      mounted = false;
      document.documentElement.style.setProperty("--info-bar-height", "0px");
    };
  }, []);

  if (!data || !data.visible) return null;

  const items = Array.isArray(data.rates) ? data.rates : [];

  // Build readable updated time
  const updated = data.updatedAt ? new Date(data.updatedAt) : null;
  const updatedString = updated
    ? updated.toLocaleString("en-IN", { hour: "2-digit", minute: "2-digit", day: "numeric", month: "short" })
    : null;

  // If no items, still show message
  if (items.length === 0) {
    return (
      <Bar role="status" aria-live="polite">
        <SingleInner className="container">
          <Msg>{data.message || "Rates unavailable"}</Msg>
        </SingleInner>
      </Bar>
    );
  }

  // Create duplicated list for seamless animation
  const loopItems = [...items, ...items];

  return (
    <Bar role="status" aria-live="polite">
      <Inner>
        <Left>
          <Msg>{data.message}</Msg>
        </Left>

        <TickerWrapper aria-hidden={false}>
          <Track>
            {loopItems.map((r, i) => (
              <Item key={`${r.label}-${i}`}>
                <Label>{r.label}</Label>
                <Value>₹{r.value}</Value>
                <Separator aria-hidden>|</Separator>
              </Item>
            ))}
          </Track>
        </TickerWrapper>

        <Right>
          {updatedString && <Updated>Updated {updatedString}</Updated>}
        </Right>
      </Inner>
    </Bar>
  );
}

/* ================== animations ================== */

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

/* Respect reduced motion */
const motion = css`
  animation: ${scroll} 22s linear infinite;
`;

/* ================== styles ================== */

const Bar = styled.div`
  position: fixed;
  top: 0;
  inset-inline: 0;
  height: 40px;
  background: linear-gradient(90deg, #ffcc31ff 0%, #ffbf00ff 100%);
  overflow: hidden;
  z-index: 1100;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  font-family: "Khula", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 0 14px;
  justify-content: space-between;

  @media (max-width: 768px) {
    gap: 6px;
  }
`;


/* Left message */
const Left = styled.div`
  min-width: 220px;
  display: flex;
  align-items: center;

  @media (max-width: 680px) {
     min-width: auto;
    flex-shrink: 0;
  }
  }
`;

const Msg = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: #111;
  letter-spacing: 0.3px;
`;

/* Ticker area - overflow hidden, track moves */
const TickerWrapper = styled.div`
  flex: 1;
  overflow: hidden;
  display: block;
  margin: 0 12px;
`;

/* Track: duplicated entries in a single row */
const Track = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  gap: 8px;
  ${motion}

  /* pause on hover on desktop */
  ${Bar}:hover & {
    animation-play-state: paused;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transform: translateX(0);
  }

  @media (max-width: 768px) {
    /* slightly faster on mobile */
    animation-duration: 16s;
  }
`;

const Item = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  white-space: nowrap;
  padding: 0 8px;
  font-weight: 700;
  color: #111;
  font-size: 13px;
`;

const Label = styled.span`
  opacity: 0.9;
  color: #222;
`;

const Value = styled.strong`
  color: #b40000;
`;

const Separator = styled.span`
  margin-left: 12px;
  opacity: 0.35;
  color: #111;
`;

/* Right (updated at / small info) */
const Right = styled.div`
  min-width: 140px;
  text-align: right;

  @media (max-width: 680px) {

    display: none;

  }
`;

const Updated = styled.div`
  font-size: 12px;
  color: #111;
  font-weight: 700;
`;

/* fallback single inner when no rates */
const SingleInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 16px;
`;
