const itinerary = [
  { date: "10.01", weekday: "周四", title: "上海 → 釜山", city: "釜山", items: [
    ["09:00 从上海浦东机场出发", "交通"], ["11:35 抵达釜山", "交通"], ["入境、取行李并前往酒店", "釜山"],
    ["入住酒店、稍作休息", "釜山"], ["下午和晚上安排轻松行程", "釜山"], ["西面", "釜山"],
    ["白浅滩文化村", "釜山"], ["Thrill on the Mug", "釜山 美食"], ["晚餐地点暂定", "釜山 美食"],
    ["推荐｜松亭三代猪肉汤饭（西面）", "釜山 美食"], ["Busan Bada Sand（釜山伴手礼饼干）", "釜山 购物"],
    ["黑芝麻拿铁（釜山｜店名待确认）", "釜山 美食"] ] },
  { date: "10.02", weekday: "周五", title: "釜山海岸线", city: "釜山", items: [
    ["海云台", "釜山"], ["天空胶囊列车", "釜山"], ["青沙浦", "釜山"], ["釜山“小镰仓”", "釜山"], ["广安里夜景", "釜山"],
    ["推荐｜Dohui 青沙浦烤贝类", "釜山 美食"], ["推荐｜Jamae Gukbap 猪肉汤饭（广安里）", "釜山 美食"],
    ["CU 便利店（酒店或沿途门店）", "釜山 购物"] ] },
  { date: "10.03", weekday: "周六", title: "釜山 → 首尔", city: "釜山 首尔", items: [
    ["09:00—09:30 酒店早餐", "釜山 美食"], ["收拾行李并退房", "釜山"], ["前往釜山站", "釜山"],
    ["12:34 乘坐 KTX", "交通"], ["14:59 抵达首尔", "首尔"], ["前往酒店并入住", "首尔"], ["晚上安排轻松逛街和吃饭", "首尔 美食 购物"] ] },
  { date: "10.04", weekday: "周日", title: "北村 · 三清洞 · 明洞", city: "首尔", items: [
    ["北村韩屋村", "首尔"], ["三清洞", "首尔"], ["明洞", "首尔 购物"], ["明洞漫画街", "首尔"],
    ["新世界免税店", "首尔 购物"], ["Olive Young 明洞店", "首尔 购物"], ["METCHA 抹茶", "首尔 美食"], ["明洞喜粥", "首尔 美食"],
    ["明洞鲷鱼烧", "首尔 美食"], ["乐天百货 B1 年糕", "首尔 美食 购物"], ["Bricksand", "首尔 美食"],
    ["美式咖啡", "首尔 美食"], ["推荐｜신동궁감자탕 土豆脊骨汤（明洞｜小黄豆推荐）", "首尔 美食"], ["Solsot 石锅拌饭", "首尔 美食"],
    ["Mammoth Coffee（明洞沿途门店）", "首尔 美食"], ["Paik’s Coffee 白钟元咖啡（沿途门店）", "首尔 美食"] ] },
  { date: "10.05", weekday: "周一", title: "延南洞 · 弘大", city: "首尔", items: [
    ["延南洞", "首尔"], ["弘大", "首尔 购物"], ["弘大烤肉", "首尔 美食"], ["OATS", "首尔 美食"],
    ["Compose Coffee", "首尔 美食"], ["Bana Press", "首尔 美食"], ["Parole 玉米派", "首尔 美食"], ["弘大瀑布炒年糕", "首尔 美食"],
    ["Mega Coffee（弘大沿途门店）", "首尔 美食"], ["济州丑橘饮品（品牌／门店待确认）", "首尔 美食"] ] },
  { date: "10.06", weekday: "周二", title: "圣水洞 · 狎鸥亭 · 汉江", city: "首尔", items: [
    ["圣水洞", "首尔 购物"], ["Tournesol", "首尔 美食"], ["鱼饼和年糕", "首尔 美食"], ["狎鸥亭", "首尔 购物"],
    ["新沙洞", "首尔 购物"], ["汉江公园", "首尔"], ["乐天超市（可安排在当天晚上）", "首尔 购物"] ] },
  { date: "10.07", weekday: "周三", title: "首尔 → 上海", city: "首尔", items: [
    ["酒店早餐", "首尔 美食"], ["收拾行李并退房", "首尔"], ["前往仁川机场", "首尔 交通"],
    ["办理值机、托运及免税店购物", "首尔 购物"], ["14:30 乘坐东方航空返回上海", "交通"], ["15:45 抵达上海浦东机场", "交通"] ] }
];

const oliveYoungItems = [
  "鱼腥草面膜", "Careplus 痘痘贴", "Fwee 水光唇釉", "Kahi 万用棒", "冰块唇釉", "Fixx 唇部打底",
  "Mediheal 积雪草泥膜", "南瓜茶", "Hince 水光棒", "Lilybred 睫毛膏", "Scalp Shot 缩发缝小绿梳",
  "生发液滚珠", "爱茉莉 VB 绿茶果冻", "RETURNITY 点位贴", "Fillimilli 冰敷消肿神器", "Beplain V脸面膜", "VID 鼻贴"
];
const brandChecklists = {
  "Olive Young 明洞店": { id: "olive", kicker: "OLIVE YOUNG MYEONGDONG", title: "🫒 明洞店采购清单", items: oliveYoungItems },
  "CU 便利店（酒店或沿途门店）": { id: "cu", kicker: "CU CONVENIENCE STORE", title: "🏪 CU 打卡清单", items: ["云朵饮料", "Olive Young CCA 果汁", "Steamed Cake", "榛果美式"] },
  "Mega Coffee（弘大沿途门店）": { id: "mega", kicker: "MEGA MGC COFFEE", title: "☕ Mega Coffee 打卡", items: ["杏仁拿铁", "蜂蜜梨酸奶"] },
  "Compose Coffee": { id: "compose", kicker: "COMPOSE COFFEE", title: "🍯 Compose 打卡", items: ["蜂蜜抹茶"] },
  "Paik’s Coffee 白钟元咖啡（沿途门店）": { id: "paik", kicker: "PAIK’S COFFEE", title: "🥤 白钟元咖啡打卡", items: ["米汁"] },
  "Mammoth Coffee（明洞沿途门店）": { id: "mammoth", kicker: "MAMMOTH COFFEE", title: "🍵 Mammoth 打卡", items: ["抹茶饮品（以当期菜单为准）"] }
};
const routeNotes = {
  "0-0": ["✈️", "航班", "浦东机场出发"],
  "0-1": ["🚈", "机场轻轨 + 地铁2号线", "金海轻轨至沙上站，换乘2号线至海云台站，再步行前往酒店"],
  "0-2": ["🚶", "前往酒店", "从海云台站步行前往釜山朝昕经典酒店办理入住"],
  "0-3": ["🚇", "地铁2号线", "海云台站乘2号线前往西面站；单程较长，当天行程注意体力"],
  "0-5": ["🚇", "1号线 + 公交", "西面站乘1号线至南浦站，再换乘前往影岛白浅滩的公交"],
  "0-6": ["🚶", "步行", "白浅滩文化村沿线步行游览"],
  "0-7": ["🚇", "返回西面", "公交回南浦站，换乘地铁1号线至西面站"],
  "1-0": ["🚶", "步行", "沿海云台海岸步行至尾浦乘车点"],
  "1-1": ["🚋", "海岸列车", "尾浦站乘天空胶囊列车前往青沙浦站，建议提前预约"],
  "1-2": ["🚶", "海岸散步", "青沙浦周边步行前往海边铁路景观段"],
  "1-3": ["🚇", "地铁2号线", "返回海云台站，乘2号线至广安站，5号口步行约13分钟"],
  "2-0": ["🧳", "退房", "早餐后收拾行李并办理退房"],
  "2-2": ["🚄", "KTX · 12:34", "釜山站上车，前往首尔站"],
  "2-3": ["🚄", "抵达 · 14:59", "抵达首尔站"],
  "2-4": ["🚇", "地铁4号线", "首尔站乘4号线1站至会贤站，步行前往首尔明洞 voco"],
  "2-5": ["🚶", "轻松散步", "入住后只安排酒店附近逛街与晚餐"],
  "3-0": ["🚇", "4号线 → 3号线", "会贤站至忠武路站，换乘3号线至安国站；3号口步行进入北村，建议10:00—17:00到访"],
  "3-1": ["🚶", "步行", "北村与三清洞相邻，适合沿街慢慢逛"],
  "3-2": ["🚇", "3号线 → 4号线", "安国站至忠武路站，换乘4号线至明洞站"],
  "3-3": ["🚶", "步行", "明洞商圈内步行串联"],
  "3-4": ["🚶", "步行", "免税店与明洞主街距离较近"],
  "3-5": ["🚶", "步行", "后续餐饮与购物点集中在明洞商圈"],
  "4-0": ["🚇", "4号线 → 机场铁路", "会贤站至首尔站，换乘机场铁路至弘大入口站；3号口步行进入延南洞"],
  "4-1": ["🚶", "步行", "延南洞与弘大商圈可直接步行衔接"],
  "4-2": ["🚶", "商圈步行", "当天餐饮点集中，建议按排队情况灵活调整顺序"],
  "5-0": ["🚇", "4号线 → 2号线", "会贤站至东大门历史文化公园站，换乘2号线至圣水站；商圈从3号口一带展开"],
  "5-2": ["🚇", "2号线 → 水仁·盆唐线", "圣水站至往十里站，换乘水仁·盆唐线至狎鸥亭罗德奥站"],
  "5-3": ["🚌", "市区公交 / 出租车", "狎鸥亭罗德奥至新沙洞跨区移动，公交或出租车更省步行"],
  "5-4": ["🚇", "地铁3号线", "新沙站至高速巴士客运站，步行前往盘浦汉江公园"],
  "5-5": ["🚇", "3号线 → 4号线", "高速巴士客运站至忠武路换乘4号线，在首尔站前往乐天超市"],
  "6-1": ["🚆", "4号线 → 机场铁路 AREX", "会贤站乘4号线至首尔站，换乘机场铁路前往仁川机场"],
  "6-2": ["🧳", "机场流程", "建议为值机、托运、安检和免税店预留充足时间"],
  "6-3": ["✈️", "航班 · 14:30", "东方航空，航班号待确认"],
  "6-4": ["📍", "抵达 · 15:45", "上海浦东国际机场"]
};
const STATUS_KEY = "koreaTrip2026Statuses";
const CHECK_KEY = "koreaTrip2026Checks";
const statusCycle = ["想去", "已安排", "已打卡"];
const excludedPlanItems = new Set(["酒店早餐", "09:00—09:30 酒店早餐", "晚餐地点暂定", "下午和晚上安排轻松行程", "晚上安排轻松逛街和吃饭"]);

const safeParse = (key) => {
  try { return JSON.parse(localStorage.getItem(key)) || {}; }
  catch { return {}; }
};
const statuses = safeParse(STATUS_KEY);
const checks = safeParse(CHECK_KEY);

function updateCountdown() {
  const target = new Date("2026-10-01T09:00:00+08:00");
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "<strong>旅程已经开始啦！</strong>";
    return;
  }
  const units = {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000)
  };
  Object.entries(units).forEach(([id, value]) => {
    document.getElementById(id).textContent = String(value).padStart(2, "0");
  });
}

function itemId(dayIndex, itemIndex) { return `day-${dayIndex}-item-${itemIndex}`; }

function cleanPlaceName(name) {
  return name
    .replace(/^09:00—09:30\s*/, "")
    .replace(/^09:00\s*/, "")
    .replace(/^11:35\s*/, "")
    .replace(/^12:34\s*/, "")
    .replace(/^14:59\s*/, "")
    .replace(/^14:30\s*/, "")
    .replace(/^15:45\s*/, "");
}

function getPlaceKind(tags, name) {
  if (tags.includes("美食")) return "FOOD";
  if (tags.includes("购物")) return "SHOP";
  if (tags.includes("交通") || /机场|KTX|行李|退房|值机/.test(name)) return "MOVE";
  return "SPOT";
}

function renderStatusControl(id) {
  const status = statuses[id] || "想去";
  return `<span class="status-control">
    <button class="status-button" type="button" data-id="${id}" data-status="${status}" aria-haspopup="true" aria-expanded="false">${status}</button>
    <span class="status-menu" role="menu">
      ${statusCycle.map(value => `<button type="button" role="menuitem" data-value="${value}">${value}</button>`).join("")}
    </span>
  </span>`;
}

function renderCheckinGroup(title, icon, className, entries, dayIndex) {
  if (!entries.length) return "";
  return `<section class="daily-checkin ${className}">
    <div class="checkin-heading"><span>${icon}</span><div><small>DAILY CHECK-IN</small><h4>${title}</h4></div></div>
    <div class="checkin-grid">
      ${entries.map(({ name, tags, itemIndex }) => {
        const id = itemId(dayIndex, itemIndex);
        const isRecommended = name.startsWith("推荐｜");
        const displayName = cleanPlaceName(name).replace(/^推荐｜/, "");
        const brandList = brandChecklists[name];
        const oliveChecklist = brandList ? `<div class="olive-checklist">
          <div class="olive-list-heading"><span>${brandList.kicker}</span><strong>${brandList.title}</strong></div>
          <div class="olive-list-grid">${brandList.items.map((item, index) => {
            const checkId = `${brandList.id}-${index}`;
            return `<label class="special-check"><input type="checkbox" data-check-id="${checkId}" ${checks[checkId] ? "checked" : ""}><span aria-hidden="true"></span><em>${item}</em></label>`;
          }).join("")}</div>
        </div>` : "";
        return `<div class="checkin-place route-stop${isRecommended ? " recommended" : ""}${oliveChecklist ? " olive-young-place" : ""}" data-tags="${tags}">
          <div class="checkin-main"><span class="checkin-name">${isRecommended ? '<small class="recommend-badge">推荐</small>' : ""}${displayName}</span>${renderStatusControl(id)}</div>
          ${oliveChecklist}
        </div>`;
      }).join("")}
    </div>
  </section>`;
}

function renderItinerary() {
  const nav = document.getElementById("dateNav");
  const list = document.getElementById("itineraryList");
  nav.innerHTML = itinerary.map((day, index) => `
    <button class="date-pill${index === 0 ? " active" : ""}" type="button" data-day="day-${index}">
      <small>${day.weekday}</small><strong>${day.date}</strong>
    </button>`).join("");

  list.innerHTML = itinerary.map((day, dayIndex) => {
    const entries = day.items.map(([name, tags], itemIndex) => ({ name, tags, itemIndex })).filter(item => !excludedPlanItems.has(item.name));
    const foodEntries = entries.filter(item => item.tags.includes("美食"));
    const shoppingEntries = entries.filter(item => item.tags.includes("购物") && !item.tags.includes("美食"));
    const routeEntries = entries.filter(item => !item.tags.includes("美食") && !item.tags.includes("购物"));
    return `
    <article class="day-card ${dayIndex < 2 ? "busan-day" : dayIndex === 2 ? "transfer-day" : "seoul-day"} reveal" id="day-${dayIndex}" data-tags="${day.city}">
      <button class="day-header" type="button" aria-expanded="true" aria-controls="content-${dayIndex}">
        <span class="day-number">${String(dayIndex + 1).padStart(2, "0")}</span>
        <span class="day-heading"><small>${day.date} · ${day.weekday}</small><h3>${day.title}</h3></span>
        <span class="collapse-icon" aria-hidden="true">⌄</span>
      </button>
      <div class="day-content" id="content-${dayIndex}">
        <div class="daily-route-label"><span>ROUTE</span><strong>今日路线</strong></div>
        <ul class="place-list">
          ${routeEntries.map(({ name, tags, itemIndex }) => {
            const id = itemId(dayIndex, itemIndex);
            const route = routeNotes[`${dayIndex}-${itemIndex}`];
            const placeName = cleanPlaceName(name);
            return `<li class="route-stop" data-tags="${tags}">
              <div class="place-item">
                <span class="place-marker" aria-hidden="true"><i></i></span>
                <span class="place-copy"><small>${getPlaceKind(tags, placeName)}</small><span class="place-name">${placeName}</span></span>
                ${renderStatusControl(id)}
              </div>
              ${route ? `<div class="route-transfer"><span class="transfer-icon">${route[0]}</span><span><strong>${route[1]}</strong><small>${route[2]}</small></span></div>` : ""}
            </li>`;
          }).join("")}
        </ul>
        <div class="daily-checkins">
          ${renderCheckinGroup("今日美食打卡", "🍽️", "food-checkin", foodEntries, dayIndex)}
          ${renderCheckinGroup("今日购物打卡", "🛍️", "shop-checkin", shoppingEntries, dayIndex)}
        </div>
      </div>
    </article>`;
  }).join("");

  bindItineraryEvents();
  updateProgress();
  observeReveals();
}

function bindItineraryEvents() {
  document.querySelectorAll(".day-header").forEach(button => button.addEventListener("click", () => {
    const card = button.closest(".day-card");
    card.classList.toggle("collapsed");
    button.setAttribute("aria-expanded", String(!card.classList.contains("collapsed")));
  }));

  document.querySelectorAll(".status-button").forEach(button => button.addEventListener("click", (event) => {
    event.stopPropagation();
    const control = button.closest(".status-control");
    document.querySelectorAll(".status-control.open").forEach(open => { if (open !== control) open.classList.remove("open"); });
    control.classList.toggle("open");
    button.setAttribute("aria-expanded", String(control.classList.contains("open")));
  }));

  document.querySelectorAll(".status-menu button").forEach(option => option.addEventListener("click", () => {
    const control = option.closest(".status-control");
    const button = control.querySelector(".status-button");
    const value = option.dataset.value;
    button.textContent = value;
    button.dataset.status = value;
    statuses[button.dataset.id] = value;
    localStorage.setItem(STATUS_KEY, JSON.stringify(statuses));
    control.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    updateProgress();
  }));

  document.querySelectorAll(".date-pill").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".date-pill").forEach(pill => pill.classList.remove("active"));
    button.classList.add("active");
    const card = document.getElementById(button.dataset.day);
    if (card.hidden) {
      document.querySelector('[data-filter="全部"]').click();
    }
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  }));

  document.querySelectorAll(".special-check input").forEach(input => input.addEventListener("change", () => {
    checks[input.dataset.checkId] = input.checked;
    localStorage.setItem(CHECK_KEY, JSON.stringify(checks));
  }));
}

function updateProgress() {
  const visibleIds = itinerary.flatMap((day, dayIndex) => day.items
    .map(([name], itemIndex) => ({ name, id: itemId(dayIndex, itemIndex) }))
    .filter(item => !excludedPlanItems.has(item.name))
    .map(item => item.id));
  const total = visibleIds.length;
  const done = visibleIds.filter(id => statuses[id] === "已打卡").length;
  const percent = total ? Math.round(done / total * 100) : 0;
  document.getElementById("progressText").textContent = `${done} / ${total} 已打卡`;
  document.getElementById("progressBar").style.width = `${percent}%`;
  document.querySelector(".progress-track").setAttribute("aria-valuenow", String(percent));
}

function setupFilters() {
  document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    let visibleCards = 0;
    document.querySelectorAll(".day-card").forEach(card => {
      const items = [...card.querySelectorAll(".route-stop")];
      let cardHasMatch = false;
      items.forEach(item => {
        const match = filter === "全部" || item.dataset.tags.includes(filter);
        item.hidden = !match;
        if (match) cardHasMatch = true;
      });
      const routeList = card.querySelector(".place-list");
      const routeLabel = card.querySelector(".daily-route-label");
      const hasVisibleRoute = [...routeList.querySelectorAll(".route-stop")].some(item => !item.hidden);
      routeList.hidden = !hasVisibleRoute;
      routeLabel.hidden = !hasVisibleRoute;
      card.querySelectorAll(".daily-checkin").forEach(group => {
        group.hidden = ![...group.querySelectorAll(".route-stop")].some(item => !item.hidden);
      });
      card.hidden = !cardHasMatch;
      if (cardHasMatch) visibleCards++;
    });
    document.getElementById("emptyState").hidden = visibleCards > 0;
  }));
}

function renderChecklist(containerId, items, prefix) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map((item, index) => {
    const id = `${prefix}-${index}`;
    return `<label class="check-label">
      <input type="checkbox" data-check-id="${id}" ${checks[id] ? "checked" : ""}>
      <span class="custom-check" aria-hidden="true"></span><span class="check-text">${item}</span>
    </label>`;
  }).join("");
  container.querySelectorAll("input").forEach(input => input.addEventListener("change", () => {
    checks[input.dataset.checkId] = input.checked;
    localStorage.setItem(CHECK_KEY, JSON.stringify(checks));
  }));
}

function observeReveals() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) { elements.forEach(el => el.classList.add("visible")); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  elements.forEach(element => observer.observe(element));
}

document.addEventListener("click", event => {
  if (!event.target.closest(".status-control")) {
    document.querySelectorAll(".status-control.open").forEach(control => {
      control.classList.remove("open");
      control.querySelector(".status-button").setAttribute("aria-expanded", "false");
    });
  }
});

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => backToTop.classList.toggle("visible", window.scrollY > 600), { passive: true });
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

updateCountdown();
setInterval(updateCountdown, 1000);
renderItinerary();
setupFilters();
observeReveals();
