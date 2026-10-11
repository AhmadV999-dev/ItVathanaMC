// Made by VATHANA
import { createFileRoute } from "@tanstack/react-router";
import helpHtml from "virtual:vathana-help";
import { SitePage } from "@/lib/site-page";

export const Route = createFileRoute("/help")({ component: Help });

function Help() {
  return <SitePage html={helpHtml} />;
}
