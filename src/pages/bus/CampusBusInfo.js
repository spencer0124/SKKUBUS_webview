import React from "react";
import flutterCommunicate from "../../common/flutterCommunicate";

const seoulLat = 37.587308;
const seoulLon = 126.993688;
const seoulDestnameEncode =
  "%EC%8A%A4%EA%BE%B8%EB%B2%84%EC%8A%A4%20%7C%20%EC%9D%B8%EC%82%AC%EC%BA%A0%20%EC%85%94%ED%8B%80%20%EC%9C%84%EC%B9%98";

const suwonLat = 37.292345;
const suwonLon = 126.975532;
const suwonDestnameEncode =
  "%EC%8A%A4%EA%BE%B8%EB%B2%84%EC%8A%A4%20%7C%20%EC%9E%90%EA%B3%BC%EC%BA%A0%20%EC%85%94%ED%8B%80%20%EC%9C%84%EC%B9%98";

const s = {
  root: {
    fontFamily:
      "'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    background: "#FFFFFF",
    color: "#191F28",
    WebkitFontSmoothing: "antialiased",
    paddingBottom: "env(safe-area-inset-bottom)",
    minHeight: "100vh",
  },
  section: { padding: "28px 20px" },
  sectionBorder: { borderTop: "8px solid #F4F4F5" },
  sectionLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: "#8B95A1",
    letterSpacing: "0.02em",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1.4,
    marginBottom: 20,
  },
  opRow: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 14,
    color: "#4E5968",
    lineHeight: 1.5,
  },
  opDot: {
    width: 4,
    height: 4,
    borderRadius: "50%",
    background: "#B0B8C1",
    flexShrink: 0,
  },
  opCaution: {
    marginTop: 12,
    padding: "12px 14px",
    background: "#FFF8F0",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 500,
    color: "#B86E00",
    lineHeight: 1.4,
  },
  feeHero: {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: "-0.04em",
  },
  noticeCard: {
    background: "#F4F4F5",
    borderRadius: 16,
    padding: 20,
  },
  noticeItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    fontSize: 14,
    color: "#4E5968",
    lineHeight: 1.6,
    letterSpacing: "-0.01em",
  },
  noticeDot: {
    flexShrink: 0,
    width: 4,
    height: 4,
    borderRadius: "50%",
    background: "#B0B8C1",
    marginTop: 9,
  },
  routeCard: {
    background: "#F4F4F5",
    borderRadius: 16,
    padding: "22px 20px",
    marginBottom: 12,
  },
  routeCardLast: {
    background: "#F4F4F5",
    borderRadius: 16,
    padding: "22px 20px",
  },
  routeDirBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    padding: "5px 12px",
    background: "#fff",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: "-0.01em",
    marginBottom: 18,
  },
  routeTimeline: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    paddingLeft: 22,
  },
  routeTimelineLine: {
    position: "absolute",
    left: 5,
    top: 8,
    bottom: 8,
    width: 2,
    background: "#E8E8EA",
    borderRadius: 1,
  },
  routeStop: {
    position: "relative",
    padding: "7px 0",
    fontSize: 15,
    fontWeight: 500,
    color: "#4E5968",
    letterSpacing: "-0.01em",
  },
  routeStopTerminal: {
    position: "relative",
    padding: "7px 0",
    fontSize: 15,
    fontWeight: 700,
    color: "#191F28",
    letterSpacing: "-0.01em",
  },
  boardingInfo: {
    marginTop: 16,
    paddingTop: 16,
    borderTop: "1px solid #E8E8EA",
  },
  boardingLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: "#8B95A1",
    letterSpacing: "0.02em",
    marginBottom: 6,
  },
  boardingName: {
    fontSize: 15,
    fontWeight: 700,
    color: "#191F28",
    letterSpacing: "-0.01em",
    marginBottom: 12,
  },
  mapButtons: { display: "flex", gap: 8 },
  mapBtn: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: "11px 0",
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 600,
    textDecoration: "none",
    color: "#191F28",
    background: "#fff",
    border: "none",
    cursor: "pointer",
    letterSpacing: "-0.01em",
    fontFamily: "inherit",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0",
    borderBottom: "1px solid #F2F3F5",
    cursor: "pointer",
    background: "none",
    border: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#F2F3F5",
    width: "100%",
    fontFamily: "inherit",
    textAlign: "left",
  },
  contactItemLast: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0",
    cursor: "pointer",
    background: "none",
    border: "none",
    width: "100%",
    fontFamily: "inherit",
    textAlign: "left",
  },
  contactName: { fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em" },
  contactSub: { fontSize: 13, color: "#8B95A1", marginTop: 2 },
  contactNumber: {
    fontSize: 15,
    fontWeight: 500,
    color: "#3182F6",
    flexShrink: 0,
  },
};

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M3 7h8m0 0L8 4m3 3L8 10"
      stroke="#191F28"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function RouteStop({ name, terminal }) {
  const dotStyle = {
    position: "absolute",
    left: -22,
    top: "50%",
    transform: "translate(-1px, -50%)",
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: terminal ? "#191F28" : "#fff",
    border: terminal ? "2.5px solid #191F28" : "2.5px solid #B0B8C1",
  };

  return (
    <div style={terminal ? s.routeStopTerminal : s.routeStop}>
      <div style={dotStyle} />
      {name}
    </div>
  );
}

function MapButtons({ lat, lon, destnameEncode }) {
  const naverUrl = `nmap://route/walk?dlat=${lat}&dlng=${lon}&dname=${destnameEncode}`;
  const kakaoUrl = `kakaomap://route?ep=${lat},${lon}&by=FOOT&eName=${destnameEncode}`;
  const appleUrl = `maps://?t=m&daddr=${lat},${lon}`;

  return (
    <div style={s.mapButtons}>
      <button style={s.mapBtn} onClick={() => flutterCommunicate(naverUrl)}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect width="16" height="16" rx="4" fill="#03C75A" />
          <path
            d="M4 11V5h1.6l2.8 4V5h1.6v6h-1.6L5.6 7v4H4z"
            fill="#fff"
          />
        </svg>
        네이버
      </button>
      <button style={s.mapBtn} onClick={() => flutterCommunicate(kakaoUrl)}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect width="16" height="16" rx="4" fill="#FEE500" />
          <path
            d="M8 4C5.5 4 3.5 5.6 3.5 7.5c0 1.2.8 2.3 2 3l-.4 1.5c0 .1.1.2.2.1L7 11.2c.3 0 .7.1 1 .1 2.5 0 4.5-1.6 4.5-3.5S10.5 4 8 4z"
            fill="#3C1E1E"
          />
        </svg>
        카카오
      </button>
      <button style={s.mapBtn} onClick={() => flutterCommunicate(appleUrl)}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect width="16" height="16" rx="4" fill="#333" />
          <path
            d="M11.3 6.7C10.3 5.6 9.2 5 8 5s-2.3.6-3.3 1.7L8 10.5l3.3-3.8z"
            fill="#4CD964"
          />
          <path
            d="M8 5c-1.2 0-2.3.6-3.3 1.7L8 10.5V5z"
            fill="#34C759"
          />
        </svg>
        Apple
      </button>
    </div>
  );
}

function CampusBusInfo() {
  return (
    <div style={s.root}>
      {/* 1. 운행시간 */}
      <div style={s.section}>
        <div style={s.sectionLabel}>운행시간</div>
        <div style={s.sectionTitle}>매주 금요일</div>
        <div style={s.opRow}>
          <div style={s.opDot} />
          금요일 7시 버스는 8시 출발로 대체
        </div>
        <div style={s.opCaution}>
          토요일 · 일요일 · 공휴일 · 학교휴일 운행없음
        </div>
      </div>

      {/* 2. 요금 */}
      <div style={{ ...s.section, ...s.sectionBorder }}>
        <div style={s.sectionLabel}>요금 및 결제</div>
        <div style={s.feeHero}>무료</div>
      </div>

      {/* 3. 안내사항 */}
      <div style={{ ...s.section, ...s.sectionBorder }}>
        <div style={s.sectionLabel}>참고</div>
        <div style={s.sectionTitle}>안내사항</div>
        <div style={s.noticeCard}>
          <div style={s.noticeItem}>
            <div style={s.noticeDot} />
            <span>
              금요일에는 기존 인자셔틀 버스와 별도로 학부대학 셔틀버스가
              추가운영됩니다
            </span>
          </div>
          <div style={{ ...s.noticeItem, marginTop: 10 }}>
            <div style={s.noticeDot} />
            <span>스꾸버스 시간표는 모든 버스 통합 시간표입니다</span>
          </div>
        </div>
      </div>

      {/* 4. 분실물 연락처 */}
      <div style={{ ...s.section, ...s.sectionBorder }}>
        <div style={s.sectionLabel}>문의</div>
        <div style={s.sectionTitle}>분실물 연락처</div>
        <button
          style={s.contactItem}
          onClick={() => flutterCommunicate("tel:01089822852")}
        >
          <div>
            <div style={s.contactName}>인자셔틀 업무용</div>
            <div style={s.contactSub}>일반 인자셔틀 분실물</div>
          </div>
          <span style={s.contactNumber}>010-8982-2852</span>
        </button>
        <button
          style={s.contactItem}
          onClick={() => flutterCommunicate("tel:027600991")}
        >
          <div>
            <div style={s.contactName}>학부대학 행정실 (인사캠)</div>
            <div style={s.contactSub}>금요일 증차노선 관련</div>
          </div>
          <span style={s.contactNumber}>02-760-0991</span>
        </button>
        <button
          style={s.contactItemLast}
          onClick={() => flutterCommunicate("tel:0312994224")}
        >
          <div>
            <div style={s.contactName}>학부대학 행정실 (자과캠)</div>
            <div style={s.contactSub}>금요일 증차노선 관련</div>
          </div>
          <span style={s.contactNumber}>031-299-4224</span>
        </button>
      </div>

      {/* 5. 노선 */}
      <div style={{ ...s.section, ...s.sectionBorder }}>
        <div style={s.sectionLabel}>노선</div>
        <div style={s.sectionTitle}>운행 경로</div>

        <div style={s.routeCard}>
          <div style={s.routeDirBadge}>
            인사캠 <ArrowIcon /> 자과캠
          </div>
          <div style={s.routeTimeline}>
            <div style={s.routeTimelineLine} />
            <RouteStop name="인사캠" terminal />
            <RouteStop name="자과캠" terminal />
          </div>
          <div style={s.boardingInfo}>
            <div style={s.boardingLabel}>탑승장소</div>
            <div style={s.boardingName}>600주년 기념관 건너편</div>
            <MapButtons
              lat={seoulLat}
              lon={seoulLon}
              destnameEncode={seoulDestnameEncode}
            />
          </div>
        </div>

        <div style={s.routeCardLast}>
          <div style={s.routeDirBadge}>
            자과캠 <ArrowIcon /> 인사캠
          </div>
          <div style={s.routeTimeline}>
            <div style={s.routeTimelineLine} />
            <RouteStop name="자과캠" terminal />
            <RouteStop name="인사캠" terminal />
          </div>
          <div style={s.boardingInfo}>
            <div style={s.boardingLabel}>탑승장소</div>
            <div style={s.boardingName}>N센터 앞</div>
            <MapButtons
              lat={suwonLat}
              lon={suwonLon}
              destnameEncode={suwonDestnameEncode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampusBusInfo;
