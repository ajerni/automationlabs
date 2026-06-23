"use client";

import { useEffect } from "react";
import { chatbotConfig } from "@/content/chatbot";

const SCRIPT_ID = "flowise-chatbot-script";

export function Chatbot() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "module";
    script.textContent = `
import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
Chatbot.init(${JSON.stringify(chatbotConfig)});
`;
    document.body.appendChild(script);
  }, []);

  return null;
}
