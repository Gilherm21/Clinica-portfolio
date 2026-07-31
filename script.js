/* =========================================================
   Clínica Vitalis — JS puro (conteúdo, interações, formulário)
   ========================================================= */

// ---------- Dados ----------
const services = [
  { icon: "i-stetho", title: "Clínica geral", text: "Avaliação completa, diagnóstico e encaminhamento com acompanhamento contínuo." },
  { icon: "i-pulse", title: "Cardiologia", text: "Eletrocardiograma, ecocardiograma e planos de prevenção cardiovascular." },
  { icon: "i-baby", title: "Pediatria", text: "Puericultura, vacinação e orientação familiar do recém-nascido à adolescência." },
  { icon: "i-brain", title: "Saúde mental", text: "Psiquiatria e psicologia integradas, com atendimento presencial ou online." },
  { icon: "i-activity", title: "Fisioterapia", text: "Reabilitação funcional, pós-operatório e tratamento de dores crônicas." },
  { icon: "i-syringe", title: "Exames laboratoriais", text: "Coleta na própria clínica e resultados digitais em até 24 horas." },
];

const aboutPoints = [
  "Consultas de 40 minutos, sem pressa no atendimento",
  "Prontuário digital acessível pelo paciente",
  "Equipe multidisciplinar em comunicação constante",
  "Convênios principais e planos particulares acessíveis",
];

const aboutStats = [
  { k: "98%", v: "dos pacientes recomendam a clínica" },
  { k: "24h", v: "para liberação de exames laboratoriais" },
  { k: "9", v: "especialidades sob o mesmo teto" },
  { k: "0", v: "filas: agendamento online com hora marcada" },
];

const team = [
  { img: "assets/team-1.jpg", name: "Dra. Helena Prado", role: "Clínica geral · CRM 00000-SP" },
  { img: "assets/team-2.jpg", name: "Dr. Rafael Monteiro", role: "Cardiologia · CRM 00000-SP" },
  { img: "assets/team-3.jpg", name: "Camila Reis", role: "Fisioterapia · CREFITO 00000" },
];

const testimonials = [
  { text: "Fui atendida no mesmo dia e saí com exames marcados e tudo explicado. Nunca tive uma consulta tão tranquila.", name: "Mariana L.", detail: "Paciente de clínica geral" },
  { text: "O acompanhamento cardiológico mudou minha rotina. Recebo os resultados no celular e sei exatamente o que fazer.", name: "Paulo R.", detail: "Paciente de cardiologia" },
  { text: "Levo meus dois filhos desde bebês. A equipe é atenciosa e o ambiente é acolhedor de verdade.", name: "Fernanda C.", detail: "Mãe de pacientes da pediatria" },
];

const faqs = [
  { q: "A clínica atende convênios?", a: "Sim. Trabalhamos com os principais convênios do país e também com valores particulares reduzidos para consultas recorrentes." },
  { q: "Preciso de encaminhamento para marcar um especialista?", a: "Não. Você pode agendar diretamente com o especialista desejado ou iniciar por uma avaliação de clínica geral." },
  { q: "Como recebo os resultados dos exames?", a: "Todos os resultados ficam disponíveis no portal do paciente, com acesso por e-mail em até 24 horas após a coleta." },
  { q: "Vocês fazem teleconsulta?", a: "Sim, para retornos e especialidades como saúde mental e nutrição, com a mesma duração da consulta presencial." },
];

const icon = (id, cls = "icon") =>
  `<svg viewBox="0 0 24 24" class="${cls}" aria-hidden="true"><use href="#${id}" /></svg>`;

// ---------- Render ----------
document.getElementById("servicesGrid").innerHTML = services
  .map(
    (s) => `
    <article class="card service-card reveal">
      <span class="service-icon">${icon(s.icon)}</span>
      <h3>${s.title}</h3>
      <p>${s.text}</p>
    </article>`,
  )
  .join("");

document.getElementById("aboutPoints").innerHTML = aboutPoints
  .map((p) => `<li><span class="check-badge">${icon("i-check")}</span><span>${p}</span></li>`)
  .join("");

document.getElementById("aboutStats").innerHTML = aboutStats
  .map((s) => `<div class="card"><p>${s.k}</p><p>${s.v}</p></div>`)
  .join("");

document.getElementById("teamGrid").innerHTML = team
  .map(
    (m) => `
    <figure class="card team-card reveal">
      <img src="${m.img}" alt="Retrato de ${m.name}" loading="lazy" width="700" height="700" />
      <figcaption><p>${m.name}</p><p>${m.role}</p></figcaption>
    </figure>`,
  )
  .join("");

document.getElementById("testimonialsGrid").innerHTML = testimonials
  .map(
    (t) => `
    <blockquote class="reveal">
      ${icon("i-quote")}
      <p>${t.text}</p>
      <footer><p>${t.name}</p><p>${t.detail}</p></footer>
    </blockquote>`,
  )
  .join("");

document.getElementById("faqList").innerHTML = faqs
  .map(
    (f, i) => `
    <div class="acc-item" data-index="${i}">
      <button class="acc-trigger" aria-expanded="false" aria-controls="acc-panel-${i}">
        <span>${f.q}</span>
        <svg viewBox="0 0 24 24" class="icon chev" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="acc-panel" id="acc-panel-${i}">${f.a}</div>
    </div>`,
  )
  .join("");

document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Menu mobile ----------
const menuToggle = document.getElementById("menuToggle");
const navMobile = document.getElementById("navMobile");

menuToggle.addEventListener("click", () => {
  const open = navMobile.hidden;
  navMobile.hidden = !open;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.innerHTML = icon(open ? "i-close" : "i-menu");
});
navMobile.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    navMobile.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = icon("i-menu");
  }
});

// ---------- Accordion (um aberto por vez) ----------
document.getElementById("faqList").addEventListener("click", (e) => {
  const trigger = e.target.closest(".acc-trigger");
  if (!trigger) return;
  const item = trigger.parentElement;
  const willOpen = !item.classList.contains("open");
  document.querySelectorAll(".acc-item").forEach((el) => {
    el.classList.remove("open");
    el.querySelector(".acc-trigger").setAttribute("aria-expanded", "false");
  });
  if (willOpen) {
    item.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");
  }
});

// ---------- Toast ----------
const toastEl = document.getElementById("toast");
let toastTimer;
function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 4000);
}

// ---------- Formulário ----------
const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const specialty = String(data.get("specialty") || "");

  if (!name || !phone || !specialty) {
    toast("Preencha nome, telefone e especialidade para continuar.");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  // Simulação de envio — troque por fetch() para a sua API/e-mail.
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = "Solicitar agendamento";
    form.reset();
    toast(`Obrigado, ${name.split(" ")[0]}! Nossa recepção confirma seu horário em breve.`);
  }, 900);
});

// ---------- Reveal on scroll ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
