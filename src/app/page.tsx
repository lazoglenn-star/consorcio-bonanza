"use client";

import React, { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "50672004411";
const WHATSAPP_DISPLAY = "7200-4411";
const CONTACT_EMAIL = "asesoria@consorciobonanza.com";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState("Todo en Tramitología");
  const [clientName, setClientName] = useState("");
  const [clientDetail, setClientDetail] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const directWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hola Consorcio Bonanza & Asociados, me gustaría agendar mi Primera Consulta Gratuita."
  )}`;

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola Consorcio Bonanza & Asociados, solicito mi *PRIMERA CONSULTA GRATUITA*.\n\n*Nombre / Empresa:* ${
      clientName || "No indicado"
    }\n*Área de interés:* ${selectedArea}\n*Detalle:* ${
      clientDetail || "Requiero asesoría inicial."
    }`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#111111] dark:bg-[#0D0D0D] dark:text-[#F5F5F3] transition-colors duration-300 flex flex-col justify-between">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#F7F7F5]/90 dark:bg-[#0D0D0D]/90 backdrop-blur-md border-b border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* MARCA PROTAGONISTA */}
          <a href="#" className="flex items-center gap-3.5 group">
            <img
              src="/logo-bonanza.svg"
              alt="Logo Consorcio Bonanza & Asociados"
              className="h-12 w-12 object-contain rounded-xl shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight leading-none uppercase">
                Consorcio Bonanza{" "}
                <span className="font-semibold text-neutral-500 dark:text-neutral-400">
                  & Asociados
                </span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 font-semibold mt-1">
                Expertos a su alcance
              </span>
            </div>
          </a>

          {/* NAVEGACIÓN */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600 dark:text-neutral-300">
            <a href="#tramitologia" className="hover:text-black dark:hover:text-white transition">
              Tramitología
            </a>
            <a href="#servicios" className="hover:text-black dark:hover:text-white transition">
              Áreas de Consultoría
            </a>
            <a href="#pymes" className="hover:text-black dark:hover:text-white transition">
              PYMES
            </a>
            <a href="#consorcio" className="hover:text-black dark:hover:text-white transition">
              Nosotros
            </a>
          </nav>

          {/* ACCIONES: MODO CLARO/OSCURO + WHATSAPP */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Cambiar tema claro u oscuro"
              className="px-3.5 py-2.5 rounded-full text-xs font-semibold border border-black/15 dark:border-white/15 bg-white dark:bg-[#1A1A1A] hover:bg-neutral-100 dark:hover:bg-[#252525] transition flex items-center gap-1.5 cursor-pointer"
            >
              <span>{darkMode ? "☀️" : "🌙"}</span>
              <span className="hidden sm:inline">
                {darkMode ? "Modo Claro" : "Modo Oscuro"}
              </span>
            </button>

            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition inline-flex items-center gap-2 shadow-sm"
            >
              <span>WhatsApp {WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* PORTADA PRINCIPAL (HERO) */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-24">
          <div className="max-w-4xl">
            {/* BADGE DE BENEFICIO INICIAL */}
            <div className="inline-flex flex-wrap items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/10 border border-emerald-600/30 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-7">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Primera Consulta Gratuita • Diagnóstico Legal y Contable Sin Costo
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-[62px] font-bold tracking-tight leading-[1.06]">
              Respaldo{" "}
              <span className="inline-flex items-center align-middle px-4 py-1 mx-1 rounded-full bg-[#111111] text-white dark:bg-white dark:text-[#111111] text-2xl sm:text-4xl font-semibold">
                integral
              </span>{" "}
              en legal, trámites, finanzas e ingeniería{" "}
              <span className="text-neutral-400 dark:text-neutral-500">
                para su empresa.
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
              Inicie hoy mismo con su{" "}
              <strong className="text-[#111111] dark:text-white underline decoration-emerald-500 decoration-2 underline-offset-4">
                Primera Consulta Gratuita
              </strong>
              . Resolvemos desde permisos municipales y patentes hasta auditorías contables y planos constructivos en un solo consorcio.
            </p>

            {/* BOTONES DE ACCIÓN */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-[#111111] text-white dark:bg-white dark:text-[#111111] px-7 py-4 rounded-full text-sm font-bold hover:opacity-90 transition inline-flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Solicitar Primera Consulta Gratuita</span>
                <span>↗</span>
              </button>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-[#171717] text-[#111111] dark:text-white border border-black/15 dark:border-white/15 px-7 py-4 rounded-full text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-[#222222] transition inline-flex items-center gap-2"
              >
                <span>Chat Directo: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* TARJETAS BENTO DESTACADAS */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* TARJETA PROTAGONISTA: PRIMERA CONSULTA GRATUITA */}
            <div className="md:col-span-7 bg-[#141414] dark:bg-[#191919] text-white rounded-3xl p-8 md:p-10 border border-black/10 dark:border-white/10 flex flex-col justify-between min-h-[290px]">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  Beneficio Exclusivo de Apertura
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  ₡0 Sin Compromiso
                </span>
              </div>
              <div className="mt-10">
                <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
                  Primera Consulta Gratuita con Nuestros Especialistas
                </h2>
                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  Evaluamos su caso legal, requerimiento municipal, estado contable o proyecto constructivo para darle una hoja de ruta clara antes de invertir.
                </p>
                <div className="mt-6">
                  <a
                    href={directWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    Agendar por WhatsApp ({WHATSAPP_DISPLAY}) →
                  </a>
                </div>
              </div>
            </div>

            {/* TARJETA DESTACADA: TODO EN TRAMITOLOGÍA */}
            <div
              id="tramitologia"
              className="md:col-span-5 bg-white dark:bg-[#161616] border border-black/10 dark:border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[290px]"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                  Servicio Estrella
                </span>
                <span className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-semibold">
                  Gestión Integral
                </span>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-bold">Todo en Tramitología</h3>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Nos encargamos de toda la gestión ante municipalidades, ministerios, Registro Nacional y colegios profesionales sin filas ni atrasos.
                </p>
                <a
                  href="#servicios"
                  className="mt-6 inline-block text-sm font-bold underline underline-offset-4 hover:opacity-75"
                >
                  Ver alcance de trámites →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN DE 5 ÁREAS DE CONSULTORÍA */}
        <section
          id="servicios"
          className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10 dark:border-white/10"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-bold">
                Portafolio Multidisciplinario
              </span>
              <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight">
                Cinco áreas clave, una sola firma.
              </h2>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-md text-sm sm:text-base">
              Coordinamos abogados, contadores públicos, ingenieros y estrategas digitales para resolver cada necesidad de su negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 01. TODO EN TRAMITOLOGÍA */}
            <div className="bg-white dark:bg-[#161616] rounded-3xl p-8 border-2 border-emerald-600/40 dark:border-emerald-500/40 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-600 text-white">
                    01 / Todo en Tramitología
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Gestión Institucional y Municipal
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-5">
                  Tramitamos permisos y habilitaciones completas para apertura y operación comercial en todo el país.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 border-t border-black/10 dark:border-white/10 pt-4">
                  <li>• Patentes comerciales y licencias de licores</li>
                  <li>• Permisos sanitarios de funcionamiento (Ministerio de Salud)</li>
                  <li>• Usos de suelo y certificaciones registrales</li>
                  <li>• Atención de notas de prevención y plazos</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedArea("Todo en Tramitología");
                  setModalOpen(true);
                }}
                className="mt-6 w-full py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#222222] text-xs font-bold hover:bg-emerald-600 hover:text-white transition cursor-pointer"
              >
                Consultar trámite gratis →
              </button>
            </div>

            {/* 02. ÁREA LEGAL */}
            <div className="bg-white dark:bg-[#161616] rounded-3xl p-8 border border-black/10 dark:border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F7F7F5] dark:bg-[#242424]">
                    02 / Área Legal
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Derecho Municipal, Penal y Corporativo
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-5">
                  Defensa legal estratégica y respaldo preventivo para proteger el patrimonio y la continuidad de su empresa.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 border-t border-black/10 dark:border-white/10 pt-4">
                  <li>• Asesoría y levantamiento ante clausuras</li>
                  <li>• Atención de demandas y procesos judiciales</li>
                  <li>• Constitución formal de sociedades mercantiles</li>
                  <li>• Contratos comerciales y cumplimiento normativo</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedArea("Asesoría Legal");
                  setModalOpen(true);
                }}
                className="mt-6 w-full py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#222222] text-xs font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition cursor-pointer"
              >
                Consultar área legal →
              </button>
            </div>

            {/* 03. ÁREA CONTABLE */}
            <div className="bg-white dark:bg-[#161616] rounded-3xl p-8 border border-black/10 dark:border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F7F7F5] dark:bg-[#242424]">
                    03 / Área Contable
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Contaduría, Impuestos y Crédito
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-5">
                  Ordenamiento financiero y tributario para optimizar su flujo de caja y acceso a financiamiento bancario.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 border-t border-black/10 dark:border-white/10 pt-4">
                  <li>• Planillas, declaraciones fiscales e impuestos</li>
                  <li>• Auditorías y certificaciones de ingresos</li>
                  <li>• Planificación financiera empresarial</li>
                  <li>• Optimización de perfil crediticio para PYMES</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedArea("Contabilidad y Crédito");
                  setModalOpen(true);
                }}
                className="mt-6 w-full py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#222222] text-xs font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition cursor-pointer"
              >
                Solicitar revisión contable →
              </button>
            </div>

            {/* 04. INGENIERÍA Y CONSTRUCCIÓN */}
            <div className="bg-white dark:bg-[#161616] rounded-3xl p-8 border border-black/10 dark:border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F7F7F5] dark:bg-[#242424]">
                    04 / Ingeniería
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Permisos de Construcción y Planos
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-5">
                  Ejecución y supervisión técnica de obras comerciales y residenciales bajo normativa CFIA.
                </p>
                <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300 border-t border-black/10 dark:border-white/10 pt-4">
                  <li>• Permisos de construcción comercial y residencial</li>
                  <li>• Diseño de planos y trámite ante el Colegio de Ingenieros</li>
                  <li>• Estudios de factibilidad técnica</li>
                  <li>• Supervisión de obra y visitas de inspección</li>
                </ul>
              </div>
              <button
                onClick={() => {
                  setSelectedArea("Ingeniería y Construcción");
                  setModalOpen(true);
                }}
                className="mt-6 w-full py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#222222] text-xs font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition cursor-pointer"
              >
                Consultar proyecto técnico →
              </button>
            </div>

            {/* 05. MARKETING Y DISEÑO WEB */}
            <div className="md:col-span-2 bg-white dark:bg-[#161616] rounded-3xl p-8 border border-black/10 dark:border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F7F7F5] dark:bg-[#242424]">
                    05 / Marketing Digital & Diseño Web
                  </span>
                  <span className="text-xs text-neutral-500">Crecimiento Comercial</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Presencia Digital, SEO y Captación de Clientes
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-5">
                  Construimos la identidad digital de su empresa para atraer clientes calificados de forma constante.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700 dark:text-neutral-300 border-t border-black/10 dark:border-white/10 pt-4">
                  <div>• Sitios web corporativos de alto rendimiento</div>
                  <div>• Posicionamiento orgánico en Google (SEO)</div>
                  <div>• Estrategia y gestión de redes sociales</div>
                  <div>• Campañas de publicidad digital y remarketing</div>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedArea("Marketing y Diseño Web");
                  setModalOpen(true);
                }}
                className="mt-6 w-full sm:w-auto self-start px-6 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#222222] text-xs font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition cursor-pointer"
              >
                Impulsar presencia digital →
              </button>
            </div>
          </div>
        </section>

        {/* PROGRAMA PYMES */}
        <section id="pymes" className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-[#111111] dark:bg-[#181818] text-white rounded-3xl p-8 md:p-14 border border-black/10 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                Ruta Integral para Emprendedores
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
                Formalización de PYMES y gestión de crédito empresarial.
              </h2>
              <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                Le acompañamos paso a paso desde la constitución legal y permisos municipales hasta la optimización de su perfil financiero para obtener fondos en condiciones favorables.
              </p>
            </div>
            <div className="md:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-black">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-sm">Constitución y Permisos</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Inscripción formal, patentes y cumplimiento institucional.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-black">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-sm">Respaldo Contable</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Ordenamiento fiscal y estados financieros auditados.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500 text-black">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-sm">Acceso a Financiamiento</h4>
                  <p className="text-xs text-neutral-400 mt-1">
                    Preparación y gestión de solicitud de crédito para crecimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE EL CONSORCIO */}
        <section
          id="consorcio"
          className="max-w-6xl mx-auto px-6 py-20 border-t border-black/10 dark:border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                El Consorcio
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Expertos a su alcance en San José, Costa Rica.
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                <strong className="text-[#111111] dark:text-white font-bold">
                  Consorcio Bonanza & Asociados
                </strong>{" "}
                integra profesionales especializados en Derecho Penal y Municipal, Contaduría Pública, Ingeniería y Construcción, Psicología y Estrategia Digital para ofrecer soluciones ágiles y seguras.
              </p>
              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#111111] dark:text-white">
                    Glenn Alexander Lazo
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Gerente Ejecutivo • Consorcio Bonanza & Asociados
                  </p>
                </div>
                <div className="flex flex-col sm:items-end text-sm">
                  <a
                    href={directWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 dark:text-emerald-400"
                  >
                    WhatsApp: +506 {WHATSAPP_DISPLAY}
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-xs underline underline-offset-4 mt-1"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-[#121212] border-t border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10 border-b border-black/10 dark:border-white/10">
            <div>
              <h2 className="text-2xl font-bold">
                Solicite hoy su Primera Consulta Gratuita
              </h2>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                Atención directa por WhatsApp al {WHATSAPP_DISPLAY} o vía correo electrónico.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-sm font-bold transition"
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="bg-[#F7F7F5] dark:bg-[#222222] px-6 py-3 rounded-full text-sm font-semibold border border-black/10 dark:border-white/10 transition"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-3">
              <img
                src="/logo-bonanza.svg"
                alt="Consorcio Bonanza & Asociados"
                className="h-8 w-8 object-contain rounded-lg"
              />
              <span>
                © {new Date().getFullYear()} Consorcio Bonanza & Asociados. Todos los derechos reservados.
              </span>
            </div>
            <span>San José, Costa Rica • Tel/WhatsApp: {WHATSAPP_DISPLAY}</span>
          </div>
        </div>
      </footer>

      {/* MODAL DE PRIMERA CONSULTA GRATUITA */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#181818] text-[#111111] dark:text-white border border-black/10 dark:border-white/15 rounded-3xl max-w-md w-full p-7 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Sin Costo Inicial
              </span>
              <button
                onClick={() => setModalOpen(false)}
                className="text-neutral-400 hover:text-black dark:hover:text-white text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
            <h3 className="text-2xl font-bold">Primera Consulta Gratuita</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 mb-5">
              Complete estos datos para enviar su solicitud directo a nuestro WhatsApp ({WHATSAPP_DISPLAY}).
            </p>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Su Nombre o Empresa
                </label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Ej. Inversiones del Valle S.A."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#242424] border border-black/10 dark:border-white/10 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  Área de Consulta
                </label>
                <select
                  value={selectedArea}
                  onChange={(e) => setSelectedArea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#242424] border border-black/10 dark:border-white/10 text-sm outline-none"
                >
                  <option value="Todo en Tramitología">Todo en Tramitología</option>
                  <option value="Asesoría Legal">Asesoría Legal (Municipal / Penal / Corporativo)</option>
                  <option value="Contabilidad y Crédito">Contabilidad, Impuestos y Crédito PYME</option>
                  <option value="Ingeniería y Construcción">Ingeniería y Permisos de Construcción</option>
                  <option value="Marketing y Diseño Web">Marketing Digital y Diseño Web</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  Breve descripción del caso
                </label>
                <textarea
                  rows={3}
                  value={clientDetail}
                  onChange={(e) => setClientDetail(e.target.value)}
                  placeholder="Cuéntenos brevemente qué trámite o asesoría necesita..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#242424] border border-black/10 dark:border-white/10 text-sm outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition cursor-pointer"
              >
                Enviar a WhatsApp ({WHATSAPP_DISPLAY}) →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
