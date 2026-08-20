import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCards from "../components/ProjectCards";
import Footer from "../components/Footer";
import { content } from "../data/content";

export default function Home({ locale }) {
  const t = content[locale];

  return (
    <>
      <Header nav={t.nav} langSwitch={t.langSwitch} current="home" />
      <Hero hero={t.hero} filters={t.filters} />
      <ProjectCards projects={t.projects} />
      <Footer footer={t.footer} />
    </>
  );
}
