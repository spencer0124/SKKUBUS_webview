import React from "react";
import flutterCommunicate from "../../common/flutterCommunicate";

const styles = {
  root: {
    fontFamily:
      "'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    background: "#FFFFFF",
    color: "#191F28",
    WebkitFontSmoothing: "antialiased",
    paddingBottom: "env(safe-area-inset-bottom)",
    minHeight: "100vh",
  },
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    padding: "0 20px",
    height: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px solid #F2F3F5",
  },
  navTitle: {
    fontSize: 17,
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  navBack: {
    position: "absolute",
    left: 20,
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    background: "none",
    border: "none",
    padding: 0,
  },
  section: {
    padding: "28px 20px",
  },
  sectionBorder: {
    borderTop: "8px solid #F4F4F5",
  },
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
  timeRow: {
    display: "flex",
    gap: 8,
    marginTop: 16,
  },
  timeBadge: {
    flex: 1,
    background: "#F4F4F5",
    borderRadius: 16,
    padding: 20,
    textAlign: "center",
  },
  timeBadgeLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: "#8B95A1",
    marginBottom: 10,
  },
  timeBadgeValue: {
    fontSize: 17,
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  feeHero: {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: "-0.04em",
    marginBottom: 16,
  },
  payGroupLabel: {
    fontSize: 13,
    fontWeight: 600,
    color: "#8B95A1",
    marginBottom: 10,
  },
  payCard: {
    background: "#F4F4F5",
    borderRadius: 14,
    padding: "16px 18px",
  },
  payItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "5px 0",
    fontSize: 15,
    fontWeight: 500,
    color: "#4E5968",
    letterSpacing: "-0.01em",
  },
  payItemDisabled: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "5px 0",
    fontSize: 15,
    fontWeight: 500,
    color: "#B0B8C1",
    letterSpacing: "-0.01em",
  },
  payIcon: {
    flexShrink: 0,
    fontSize: 15,
    width: 20,
    textAlign: "center",
  },
  payNote: {
    fontSize: 13,
    color: "#8B95A1",
    marginTop: 4,
    paddingLeft: 30,
    lineHeight: 1.4,
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0",
    borderBottom: "1px solid #F2F3F5",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
    transition: "opacity 0.15s",
    background: "none",
    border: "none",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: "#F2F3F5",
    width: "100%",
    fontFamily: "inherit",
  },
  contactItemLast: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
    transition: "opacity 0.15s",
    background: "none",
    border: "none",
    width: "100%",
    fontFamily: "inherit",
  },
  contactName: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: "-0.01em",
  },
  contactNumber: {
    fontSize: 15,
    fontWeight: 500,
    color: "#3182F6",
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
    content: "''",
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
    content: "''",
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
    <div style={terminal ? styles.routeStopTerminal : styles.routeStop}>
      <div style={dotStyle} />
      {name}
    </div>
  );
}

function HSSCBusInfo() {
  return (
    <div style={styles.root}>
      {/* Nav */}
      <div style={styles.nav}>
        <button
          style={styles.navBack}
          onClick={() => window.history.back()}
        >
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <path
              d="M9 1L1 9L9 17"
              stroke="#191F28"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div style={styles.navTitle}>인사캠 셔틀버스</div>
      </div>

      {/* 1. 운행시간 */}
      <div style={styles.section}>
        <div style={styles.sectionLabel}>운행시간</div>
        <div style={styles.sectionTitle}>월요일 ~ 금요일</div>
        <div style={styles.opRow}>
          <div style={styles.opDot} />
          공휴일 운행 안함
        </div>
        <div style={styles.timeRow}>
          <div style={styles.timeBadge}>
            <div style={styles.timeBadgeLabel}>학기중</div>
            <div style={styles.timeBadgeValue}>07:00 ~ 23:00</div>
          </div>
          <div style={styles.timeBadge}>
            <div style={styles.timeBadgeLabel}>방학중</div>
            <div style={styles.timeBadgeValue}>07:00 ~ 19:00</div>
          </div>
        </div>
      </div>

      {/* 2. 요금 및 결제 */}
      <div style={{ ...styles.section, ...styles.sectionBorder }}>
        <div style={styles.sectionLabel}>요금 및 결제</div>
        <div style={styles.feeHero}>400원</div>

        <div style={{ marginBottom: 20 }}>
          <div style={styles.payGroupLabel}>결제 가능</div>
          <div style={styles.payCard}>
            <div style={styles.payItem}>
              <span style={styles.payIcon}>✓</span>체크 / 신용카드
            </div>
            <div style={styles.payNote}>
              후불교통결제 기능 가능한 카드에 한함
            </div>
            <div style={styles.payItem}>
              <span style={styles.payIcon}>✓</span>T머니
            </div>
            <div style={styles.payItem}>
              <span style={styles.payIcon}>✓</span>캐시비카드
            </div>
          </div>
        </div>

        <div>
          <div style={styles.payGroupLabel}>결제 불가</div>
          <div style={styles.payCard}>
            <div style={styles.payItemDisabled}>
              <span style={styles.payIcon}>✕</span>현금
            </div>
            <div style={styles.payItemDisabled}>
              <span style={styles.payIcon}>✕</span>회수권
            </div>
          </div>
        </div>
      </div>

      {/* 3. 연락처 */}
      <div style={{ ...styles.section, ...styles.sectionBorder }}>
        <div style={styles.sectionLabel}>문의</div>
        <div style={styles.sectionTitle}>연락처</div>
        <button
          style={styles.contactItem}
          onClick={() => flutterCommunicate("tel:027601073")}
        >
          <span style={styles.contactName}>학생지원팀</span>
          <span style={styles.contactNumber}>02-760-1073</span>
        </button>
        <button
          style={styles.contactItemLast}
          onClick={() => flutterCommunicate("tel:027600110")}
        >
          <span style={styles.contactName}>인사캠 관리팀</span>
          <span style={styles.contactNumber}>02-760-0110</span>
        </button>
      </div>

      {/* 4. 노선 */}
      <div style={{ ...styles.section, ...styles.sectionBorder }}>
        <div style={styles.sectionLabel}>노선</div>
        <div style={styles.sectionTitle}>운행 경로</div>

        <div style={styles.routeCard}>
          <div style={styles.routeDirBadge}>
            인사캠 <ArrowIcon /> 혜화역
          </div>
          <div style={styles.routeTimeline}>
            <div style={styles.routeTimelineLine} />
            <RouteStop name="농구장" terminal />
            <RouteStop name="학생회관" />
            <RouteStop name="정문" />
            <RouteStop name="올림픽기념국민생활관" />
            <RouteStop name="혜화동 우체국" />
            <RouteStop name="혜화동로터리" />
            <RouteStop name="혜화역 1번출구" terminal />
          </div>
        </div>

        <div style={styles.routeCardLast}>
          <div style={styles.routeDirBadge}>
            혜화역 <ArrowIcon /> 인사캠
          </div>
          <div style={styles.routeTimeline}>
            <div style={styles.routeTimelineLine} />
            <RouteStop name="혜화역 1번출구" terminal />
            <RouteStop name="혜화동로터리" />
            <RouteStop name="성균관대입구사거리" />
            <RouteStop name="정문" />
            <RouteStop name="600주년기념관" terminal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HSSCBusInfo;
