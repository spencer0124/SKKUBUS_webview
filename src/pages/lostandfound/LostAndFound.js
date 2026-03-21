import React from "react";
import flutterCommunicate from "../../common/flutterCommunicate";

const s = {
  root: {
    fontFamily:
      "'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    background: "#FFFFFF",
    color: "#191F28",
    WebkitFontSmoothing: "antialiased",
    paddingBottom: "calc(32px + env(safe-area-inset-bottom))",
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
  navTitle: { fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em" },
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
  // Steps
  steps: { display: "flex", flexDirection: "column" },
  step: { display: "flex", gap: 16, position: "relative" },
  stepIndicator: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
    width: 32,
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#191F28",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 700,
    flexShrink: 0,
  },
  stepLine: {
    flex: 1,
    width: 2,
    background: "#E8E8EA",
    minHeight: 24,
  },
  stepContent: { paddingBottom: 28, flex: 1 },
  stepContentLast: { paddingBottom: 0, flex: 1 },
  stepTitle: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    marginBottom: 4,
    lineHeight: "32px",
  },
  stepDesc: {
    fontSize: 14,
    color: "#4E5968",
    lineHeight: 1.5,
  },
  // CTA
  ctaGroup: { display: "flex", flexDirection: "column", gap: 10 },
  ctaBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "18px 20px",
    background: "#F4F4F5",
    borderRadius: 16,
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
    border: "none",
    width: "100%",
    fontFamily: "inherit",
    textAlign: "left",
  },
  ctaLeft: { display: "flex", alignItems: "center", gap: 14 },
  ctaIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontFamily: "Tossface",
  },
  ctaText: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: "-0.02em",
    textAlign: "left",
  },
  ctaSub: { fontSize: 13, color: "#8B95A1", marginTop: 2 },
  ctaArrow: { color: "#B0B8C1" },
  // Info card
  infoCard: {
    background: "#F4F4F5",
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
  },
  infoCardLast: {
    background: "#F4F4F5",
    borderRadius: 16,
    padding: 20,
  },
  infoCardHeader: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
  },
  infoCardIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  infoCardCampus: {
    fontSize: 16,
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  infoRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "6px 0",
  },
  infoLabel: { fontSize: 14, color: "#8B95A1" },
  infoValue: { fontSize: 14, fontWeight: 600, color: "#4E5968" },
  infoValuePhone: { fontSize: 14, fontWeight: 600, color: "#3182F6" },
  infoDivider: { height: 1, background: "#E8E8EA", margin: "10px 0" },
  commonInfo: {
    background: "#F4F4F5",
    borderRadius: 16,
    padding: "16px 20px",
    marginBottom: 20,
  },
  commonInfoRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4px 0",
  },
  commonInfoLabel: { fontSize: 14, color: "#8B95A1" },
  commonInfoValue: { fontSize: 14, fontWeight: 600, color: "#4E5968" },
  commonInfoLink: {
    fontSize: 14,
    fontWeight: 600,
    color: "#3182F6",
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    padding: 0,
  },
  phoneBtn: {
    fontSize: 14,
    fontWeight: 600,
    color: "#3182F6",
    textDecoration: "none",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    padding: 0,
  },
};

function LostAndFound() {
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText("studentaid@skku.edu")
      .then(() => {
        alert("이메일 주소 복사가 완료되었습니다");
      })
      .catch(() => {
        alert("복사에 실패했습니다");
      });
  };

  return (
    <div style={s.root}>
      {/* Nav */}
      <div style={s.nav}>
        <button style={s.navBack} onClick={() => window.history.back()}>
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
        <div style={s.navTitle}>분실물</div>
      </div>

      {/* 1. 처리 절차 */}
      <div style={s.section}>
        <div style={s.sectionLabel}>유실물 접수</div>
        <div style={s.sectionTitle}>처리 절차</div>
        <div style={s.steps}>
          <div style={s.step}>
            <div style={s.stepIndicator}>
              <div style={s.stepNumber}>1</div>
              <div style={s.stepLine} />
            </div>
            <div style={s.stepContent}>
              <div style={s.stepTitle}>습득물 이관</div>
              <div style={s.stepDesc}>
                최초 발견자 습득 시, 1~2일 내 학생지원팀으로 이관됩니다
              </div>
            </div>
          </div>
          <div style={s.step}>
            <div style={s.stepIndicator}>
              <div style={s.stepNumber}>2</div>
              <div style={s.stepLine} />
            </div>
            <div style={s.stepContent}>
              <div style={s.stepTitle}>게시판 공지</div>
              <div style={s.stepDesc}>
                학생지원팀에서 유실물 게시판에 1개월간 공지합니다
              </div>
            </div>
          </div>
          <div style={s.step}>
            <div style={s.stepIndicator}>
              <div style={s.stepNumber}>3</div>
            </div>
            <div style={s.stepContentLast}>
              <div style={s.stepTitle}>보관 후 폐기</div>
              <div style={s.stepDesc}>1년간 보관 후 폐기됩니다</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 게시판 바로가기 */}
      <div style={{ ...s.section, ...s.sectionBorder }}>
        <div style={s.sectionLabel}>분실물 게시판</div>
        <div style={s.sectionTitle}>게시판 바로가기</div>
        <div style={s.ctaGroup}>
          <button
            style={s.ctaBtn}
            onClick={() =>
              flutterCommunicate(
                "https://www.skku.edu/skku/campus/support/lost_and_found_2.do"
              )
            }
          >
            <div style={s.ctaLeft}>
              <div style={s.ctaIcon}>🔍</div>
              <div>
                <div style={s.ctaText}>물건을 찾습니다</div>
                <div style={s.ctaSub}>잃어버린 물건을 찾고 있어요</div>
              </div>
            </div>
            <div style={s.ctaArrow}>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path
                  d="M1 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
          <button
            style={s.ctaBtn}
            onClick={() =>
              flutterCommunicate(
                "https://www.skku.edu/skku/campus/support/lost_and_found_3.do"
              )
            }
          >
            <div style={s.ctaLeft}>
              <div style={s.ctaIcon}>📦</div>
              <div>
                <div style={s.ctaText}>주인을 찾습니다</div>
                <div style={s.ctaSub}>습득한 물건의 주인을 찾아요</div>
              </div>
            </div>
            <div style={s.ctaArrow}>
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                <path
                  d="M1 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* 3. 학생지원팀 안내 */}
      <div style={{ ...s.section, ...s.sectionBorder }}>
        <div style={s.sectionLabel}>안내</div>
        <div style={s.sectionTitle}>학생지원팀</div>

        <div style={s.commonInfo}>
          <div style={s.commonInfoRow}>
            <span style={s.commonInfoLabel}>운영시간</span>
            <span style={s.commonInfoValue}>평일 09:00 ~ 17:30</span>
          </div>
          <div style={s.commonInfoRow}>
            <span style={s.commonInfoLabel}>이메일</span>
            <button style={s.commonInfoLink} onClick={handleCopyEmail}>
              studentaid@skku.edu
            </button>
          </div>
        </div>

        <div style={s.infoCard}>
          <div style={s.infoCardHeader}>
            <div style={s.infoCardIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2L3 6v8l7 4 7-4V6l-7-4z"
                  stroke="#191F28"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10v8M3 6l7 4 7-4"
                  stroke="#191F28"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span style={s.infoCardCampus}>인사캠</span>
          </div>
          <div style={s.infoRow}>
            <span style={s.infoLabel}>위치</span>
            <span style={s.infoValue}>600주년기념관 1층</span>
          </div>
          <div style={s.infoDivider} />
          <div style={s.infoRow}>
            <span style={s.infoLabel}>전화</span>
            <button
              style={s.phoneBtn}
              onClick={() => flutterCommunicate("tel:027601077")}
            >
              02-760-1077
            </button>
          </div>
        </div>

        <div style={s.infoCardLast}>
          <div style={s.infoCardHeader}>
            <div style={s.infoCardIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 16V6a2 2 0 012-2h8a2 2 0 012 2v10"
                  stroke="#191F28"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 16h16M7 8h6M7 11h4"
                  stroke="#191F28"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span style={s.infoCardCampus}>자과캠</span>
          </div>
          <div style={s.infoRow}>
            <span style={s.infoLabel}>위치</span>
            <span style={s.infoValue}>학생회관 종합행정실 1층</span>
          </div>
          <div style={s.infoDivider} />
          <div style={s.infoRow}>
            <span style={s.infoLabel}>전화</span>
            <button
              style={s.phoneBtn}
              onClick={() => flutterCommunicate("tel:0312905034")}
            >
              031-290-5034
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LostAndFound;
