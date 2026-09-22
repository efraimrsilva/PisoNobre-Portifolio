"use client";

import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import heroImage from "@/assets/image/hero.jpg";
import g1Image from "@/assets/image/g1.jpg";
import g2Image from "@/assets/image/g2.jpg";
import g3Image from "@/assets/image/g3.jpg";
import g4Image from "@/assets/image/g4.jpg";
import g5Image from "@/assets/image/g5.jpg";
import g6Image from "@/assets/image/g6.jpg";
import g7Image from "@/assets/image/g7.jpg";
import g8Image from "@/assets/image/g8.jpg";
import g9Image from "@/assets/image/g9.jpg";
import g10Image from "@/assets/image/g10.jpg";
import g11Image from "@/assets/image/g11.png";
import g12Image from "@/assets/image/g12.png";
import g13Image from "@/assets/image/g13.png";
import g14Image from "@/assets/image/g14.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarCheck,
  ChevronDown,
  CircleCheck,
  Clock3,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const whatsappLink =
  "https://wa.me/5531984761292?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20piso.%20Prefira%20enviar%20um%20áudio%20com%20os%20detalhes.";
const instagramLink =
  "https://www.instagram.com/vanderli.c.scalafetador?stkn=MTlpeGxqMndyN2Nr";
const currentYear = dayjs().year();
const services = [
  {
    icon: Sparkles,
    title: "Raspagem de tacos e assoalhos",
    text: "Removemos riscos, manchas e desgastes para revelar a beleza original da madeira.",
  },
  {
    icon: ShieldCheck,
    title: "Aplicação de qualquer tipo de sinteco",
    text: "Proteção de alta performance com acabamento fosco, semi-brilho ou alto brilho.",
  },
  {
    icon: Award,
    title: "Revitalização de madeira",
    text: "Forte compromisso com acabamento e limpeza para renovar seu piso sem trocar o que já é seu.",
  },
  {
    icon: CircleCheck,
    title: "Calafetação e correções",
    text: "Vedamos e preenchemos frestas, juntas, rachaduras e vãos para evitar água, ar, poeira e insetos.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Raspagem e Aplicação de Sinteco WC",
  description:
    "Restauração de pisos de madeira, raspagem de tacos e assoalhos, aplicação de sinteco e calafetação em Minas Gerais.",
  url: "https://raspagemaplicacaosintecowc.netlify.app",
  image: "https://raspagemaplicacaosintecowc.netlify.app/opengraph-image",
  telephone: "+5531984761292",
  priceRange: "$$",
  areaServed: {
    "@type": "State",
    name: "Minas Gerais",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5531984761292",
    contactType: "customer service",
    availableLanguage: "pt-BR",
  },
  sameAs: [instagramLink],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de restauração de pisos de madeira",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.text,
      },
    })),
  },
};

const gallery = [
  { videoId: "DNtrF4q8Vhw" },
  { videoId: "-_sOfNAwLwA" },
  { videoId: "4tfvPW9etME" },
];

const photoGallery = [
  g1Image,
  g2Image,
  g3Image,
  g4Image,
  g5Image,
  g6Image,
  g7Image,
  g8Image,
  g9Image,
  g10Image,
  g11Image,
  g12Image,
  g13Image,
  g14Image,
];

const faqs = [
  [
    "Quanto tempo demora o serviço?",
    "Cada piso tem uma necessidade diferente. Após a avaliação, informamos um prazo preciso. Em geral, um ambiente residencial leva de 2 a 5 dias, considerando aplicação e secagem.",
  ],
  [
    "É preciso sair de casa?",
    "É necessário sair somente da área onde será feita a revitalização. Cobrimos itens que não puderem ser movidos para outro local, protegendo o restante do ambiente durante o serviço.",
  ],
  [
    "O serviço faz muita poeira?",
    "Trabalhamos com equipamentos modernos e sistema de aspiração para reduzir significativamente a poeira durante a raspagem.",
  ],
  [
    "O orçamento é gratuito?",
    "Sim. Fazemos uma avaliação sem compromisso e enviamos um orçamento transparente pelo WhatsApp.",
  ],
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const galleryThumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const galleryThumbnailRailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveGalleryImage((current) => (current + 1) % photoGallery.length);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [activeGalleryImage]);

  useEffect(() => {
    const activeThumbnail = galleryThumbnailRefs.current[activeGalleryImage];
    const thumbnailRail = galleryThumbnailRailRef.current;

    if (!activeThumbnail || !thumbnailRail) return;

    thumbnailRail.scrollTo({
      behavior: "smooth",
      left:
        activeGalleryImage === 0
          ? 0
          : activeThumbnail.offsetLeft -
            thumbnailRail.clientWidth / 2 +
            activeThumbnail.clientWidth / 2,
    });
  }, [activeGalleryImage]);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-primary/95 text-primary-foreground backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="Raspagem e Aplicação de Sinteco WC início"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-brand text-lg font-bold text-primary">
              WC
            </span>
            <span className="leading-none">
              <strong className="block max-w-56 font-serif text-base leading-5 tracking-tight sm:text-lg">
                Raspagem e Aplicação de Sinteco WC
              </strong>
              <small className="text-[11px] uppercase tracking-[0.12em] text-primary-foreground/65">
                Restauração de Pisos de Madeira
              </small>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-primary-foreground/80 lg:flex">
            {[
              "Serviços",
              "Antes e depois",
              "Processo",
              "Por que nos escolher",
              "Dúvidas",
            ].map((item, index) => (
              <a
                key={item}
                href={
                  [
                    "#servicos",
                    "#resultados",
                    "#processo",
                    "#por-que-escolher",
                    "#faq",
                  ][index]
                }
                className="transition-colors hover:text-brand"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-sm bg-brand px-5 py-3 text-xs font-bold uppercase tracking-wider text-primary transition-transform hover:-translate-y-0.5 sm:flex"
          >
            <FaWhatsapp size={16} /> WhatsApp: envie um áudio
          </a>
          <button
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 bg-primary px-5 py-5 text-sm lg:hidden">
            {[
              "Serviços",
              "Antes e depois",
              "Processo",
              "Por que nos escolher",
              "Dúvidas",
            ].map((item, index) => (
              <a
                key={item}
                onClick={() => setMenuOpen(false)}
                href={
                  [
                    "#servicos",
                    "#resultados",
                    "#processo",
                    "#por-que-escolher",
                    "#faq",
                  ][index]
                }
              >
                {item}
              </a>
            ))}
            <a href={whatsappLink} className="font-bold text-brand">
              Falar no WhatsApp
            </a>
          </nav>
        )}
      </header>

      <section
        id="inicio"
        className="relative flex min-h-[720px] items-end bg-primary pt-32 lg:min-h-[800px] lg:items-center"
      >
        <Image
          src={heroImage}
          alt="Piso de madeira restaurado em uma sala elegante"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,42,67,.98)_0%,rgba(16,42,67,.78)_42%,rgba(16,42,67,.154)_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8 lg:pb-0">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-6 flex items-center gap-3 text-sm font-medium text-brand">
              <span className="h-px w-10 bg-brand" /> Aplicação e raspagem de
              sinteco
            </div>
            <h1 className="max-w-xl font-serif text-5xl leading-[1.04] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              Seu piso renovado.
              <br />
              <em className="font-normal text-brand">
                Seu ambiente transformado.
              </em>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-primary-foreground/75 sm:text-lg">
              Raspagem e aplicação de sinteco com acabamento profissional para
              devolver vida, proteção e valor ao seu piso de madeira.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-sm bg-brand px-7 py-4 text-sm font-bold text-primary transition-transform hover:-translate-y-1"
              >
                <FaWhatsapp size={18} /> Chamar no WhatsApp
              </a>
              <a
                href="#resultados"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/35 px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-white/10"
              >
                Ver nossos resultados
              </a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/80">
              <FaWhatsapp size={17} className="text-brand" /> Prefira enviar um
              áudio para explicar seu projeto.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-primary-foreground/65">
              <span className="flex items-center gap-2">
                <BadgeCheck size={16} className="text-brand" /> + de 20 anos de
                experiência
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-brand" /> Atendimento
                residencial e comercial
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={16} className="text-brand" /> Acabamento e
                limpeza
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden max-w-xs bg-brand px-7 py-5 text-primary lg:block">
          <p className="text-xs font-bold uppercase tracking-widest">
            Acabamento que permanece
          </p>
          <p className="mt-1 text-sm leading-5 text-primary/75">
            Cuidado em cada etapa para um resultado à altura do seu ambiente.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-primary py-6 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 lg:px-8">
          <p className="font-serif text-lg text-brand">
            Preservamos a madeira. Valorizamos seu espaço.
          </p>
          <div className="flex flex-wrap gap-5 text-xs text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <Clock3 size={15} /> Atendimento rápido
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={15} /> Residencial e comercial
            </span>
            <span className="flex items-center gap-2">
              <Star size={15} /> Acabamento e limpeza
            </span>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="eyebrow">O que fazemos</p>
              <h2 className="section-title mt-4">
                Mais que um piso novo.
                <br />
                <span>Uma nova atmosfera.</span>
              </h2>
              <p className="mt-6 max-w-md leading-7 text-muted-foreground">
                Restauramos pisos de madeira com técnica, cuidado e materiais de
                qualidade. O resultado é um ambiente mais bonito, protegido e
                valorizado.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary underline decoration-brand decoration-2 underline-offset-8"
              >
                Converse com um especialista <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {services.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="group bg-background p-7 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={28} strokeWidth={1.5} className="text-brand" />
                  <h3 className="mt-7 font-serif text-2xl leading-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground group-hover:text-primary-foreground/70">
                    {text}
                  </p>
                  <span className="mt-7 block h-px w-8 bg-brand transition-all group-hover:w-16" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resultados" className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Transformações reais</p>
              <h2 className="section-title mt-4">
                O resultado fala
                <br />
                <span>por si.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Cada projeto é tratado com atenção aos detalhes para que a madeira
              volte a ser protagonista do ambiente.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {gallery.map((item, index) => (
              <article
                key={item.videoId}
                className={`overflow-hidden ${index === 1 ? "md:translate-y-10" : ""}`}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&mute=1&loop=1&playlist=${item.videoId}&controls=0&playsinline=1&rel=0`}
                  title="Vídeo de restauração de piso"
                  className="aspect-[4/5] w-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </article>
            ))}
          </div>
          <div className="mt-20 border-t border-border pt-12">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow">Galeria de projetos</p>
                <h3 className="mt-3 font-serif text-3xl text-primary sm:text-4xl">
                  Detalhes que fazem a diferença.
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Foto {activeGalleryImage + 1} de {photoGallery.length}
              </p>
            </div>
            <div className="relative mx-auto mt-8 aspect-[10/11] max-w-3xl overflow-hidden rounded-sm bg-primary/95 shadow-2xl shadow-primary/15">
              <div
                key={photoGallery[activeGalleryImage].src}
                className="absolute inset-0 animate-in fade-in duration-500 ease-in-out transition-opacity"
              >
                <Image
                  src={photoGallery[activeGalleryImage]}
                  alt={`Projeto de restauração de piso ${activeGalleryImage + 1}`}
                  fill
                  priority={activeGalleryImage === 0}
                  sizes="(max-width: 768px) calc(100vw - 2.5rem), 48rem"
                  className="object-contain"
                />
              </div>
            </div>
            <div
              ref={galleryThumbnailRailRef}
              className="mt-4 flex gap-2 overflow-x-auto pb-2 sm:grid sm:grid-cols-7 sm:overflow-visible lg:grid-cols-14"
            >
              {photoGallery.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  ref={(element) => {
                    galleryThumbnailRefs.current[index] = element;
                  }}
                  onClick={() => setActiveGalleryImage(index)}
                  aria-label={`Exibir foto ${index + 1}`}
                  aria-pressed={activeGalleryImage === index}
                  className={`relative aspect-square w-20 shrink-0 overflow-hidden rounded-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto ${
                    activeGalleryImage === index
                      ? "ring-2 ring-brand ring-offset-2 ring-offset-secondary"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 5rem, (max-width: 1024px) 12vw, 7vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="processo"
        className="bg-primary py-24 text-primary-foreground lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-xl">
            <p className="eyebrow text-brand">Como trabalhamos</p>
            <h2 className="section-title mt-4 text-primary-foreground">
              Cuidado em cada
              <br />
              <span>etapa do processo.</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Avaliação",
                "Entendemos o estado do piso e as melhores soluções para o seu ambiente.",
              ],
              [
                "02",
                "Preparação",
                "Protegemos o espaço e preparamos cada detalhe para começar.",
              ],
              [
                "03",
                "Raspagem e aplicação",
                "Nivelamos, corrigimos e aplicamos o acabamento escolhido.",
              ],
              [
                "04",
                "Finalização",
                "Entregamos o ambiente limpo, orientado e pronto para ser aproveitado.",
              ],
            ].map(([number, title, text]) => (
              <div key={number}>
                <span className="font-mono text-sm text-brand">{number}</span>
                <h3 className="mt-8 font-serif text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/65">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="por-que-escolher" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Por que nos escolher</p>
              <h2 className="section-title mt-4">
                Experiência que
                <br />
                <span>você percebe.</span>
              </h2>
              <p className="mt-6 max-w-md leading-7 text-muted-foreground">
                Você não precisa trocar seu piso para transformar sua casa. Com
                a técnica certa, recuperamos a beleza e a resistência da
                madeira.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [
                  "Baixa geração de poeira",
                  "Equipamentos modernos para uma execução mais limpa.",
                ],
                [
                  "Orçamento transparente",
                  "Clareza sobre cada etapa, sem surpresas no final.",
                ],
                [
                  "Atendimento personalizado",
                  "Soluções pensadas para o seu piso e sua rotina.",
                ],
                [
                  "Garantia de acabamento",
                  "Compromisso com um resultado bonito e duradouro.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="border border-border p-6">
                  <BadgeCheck size={22} className="text-brand" />
                  <h3 className="mt-5 font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-8">
          <div>
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 className="section-title mt-4">
              Tudo claro antes
              <br />
              <span>de começar.</span>
            </h2>
            <p className="mt-6 leading-7 text-muted-foreground">
              Ainda ficou com alguma dúvida? Estamos à disposição para explicar
              e avaliar seu piso.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
            >
              Perguntar pelo WhatsApp <ArrowRight size={16} />
            </a>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map(([question, answer], index) => (
              <div key={question}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-serif text-lg text-primary"
                >
                  <span>{question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  aria-hidden={openFaq !== index}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    openFaq === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      id={`faq-answer-${index}`}
                      className="max-w-2xl pb-6 pr-8 text-sm leading-6 text-muted-foreground"
                    >
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="relative overflow-hidden bg-brand py-20 text-primary"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">
              Seu próximo projeto começa aqui
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
              Transforme seu piso sem trocar a madeira.
            </h2>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-3 rounded-sm bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1"
          >
            <FaWhatsapp size={19} /> Solicitar orçamento
          </a>
        </div>
      </section>

      <footer className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-brand text-sm font-bold text-primary">
                WC
              </span>
              <strong className="font-serif text-base leading-5 sm:text-lg">
                Raspagem e Aplicação de Sinteco WC
              </strong>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/55">
              Restauração de Pisos de Madeira. Beleza, cuidado e acabamento que
              permanece.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand">
              Atendimento
            </p>
            <div className="mt-5 space-y-3 text-sm text-primary-foreground/65">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-brand"
              >
                <Phone size={15} /> (31) 98476-1292 · WhatsApp
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={15} /> Atendemos em toda Minas Gerais <br></br>
                (Consulte para outros estados)
              </p>
              <p className="flex items-center gap-2">
                <CalendarCheck size={15} /> Seg a sáb, 8h às 18h
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand">
              Navegue
            </p>
            <div className="mt-5 space-y-3 text-sm text-primary-foreground/65">
              <a className="block hover:text-brand" href="#servicos">
                Serviços
              </a>
              <a className="block hover:text-brand" href="#resultados">
                Antes e depois
              </a>
              <a className="block hover:text-brand" href="#processo">
                Processo
              </a>
              <a className="block hover:text-brand" href="#por-que-escolher">
                Por que nos escolher
              </a>
              <a className="block hover:text-brand" href="#faq">
                Dúvidas frequentes
              </a>
              <a
                className="block hover:text-brand"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Enviar áudio no WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-5 pt-6 text-center text-sm text-white lg:px-8">
          © {currentYear} Raspagem e Aplicação de Sinteco WC - Restauração de
          Pisos de Madeira. Feito com{" "}
          <span role="img" aria-label="amor">
            💖
          </span>{" "}
          por{" "}
          <a
            href="https://www.linkedin.com/in/efraimrsilva/"
            target="_blank"
            rel="noreferrer"
            className="text-white underline decoration-white/70 underline-offset-2 transition-[color,text-shadow] duration-300 hover:text-white hover:[text-shadow:0_0_12px_rgb(255_255_255_/_0.9)]"
          >
            Efraim R. Silva
          </a>
          . Todos os direitos reservados.
        </div>
      </footer>
      <div className="fixed bottom-24 right-5 z-50 flex items-center gap-3">
        <a
          href={instagramLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir o Instagram de Vanderli, responsável pela Raspagem e Aplicação de Sinteco WC"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white shadow-xl shadow-primary/25 transition-transform hover:scale-110"
        >
          <FaInstagram size={27} />
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Enviar um áudio para Raspagem e Aplicação de Sinteco WC pelo WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-primary/25 transition-transform hover:scale-110"
        >
          <FaWhatsapp size={27} />
        </a>
      </div>
    </main>
  );
}
