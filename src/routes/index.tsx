// Made by VATHANA
import { createFileRoute } from "@tanstack/react-router";
import homeHtml from "virtual:vathana-home";
import { SitePage } from "@/lib/site-page";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <SitePage html={homeHtml} />;
}
