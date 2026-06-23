export const chatbotConfig = {
  chatflowid: "47ac3690-6e06-46f7-8ea4-1ded8ab66e8e",
  apiHost: "https://flowise.ernilabs.com",
  chatflowConfig: {
    /* Chatflow Config */
  },
  observersConfig: {
    /* Observers Config */
  },
  theme: {
    button: {
      backgroundColor: "#11aa9b",
    },
    chatWindow: {
      userMessage: {
        backgroundColor: "#11aa9b",
        textColor: "#1a1a1a",
      },
      textInput: {
        sendButtonColor: "#11aa9b",
      },
      footer: {
        textColor: "#303235",
        text: "Powered by",
        company: "www.automationlabs.ch",
        companyLink: "https://www.automationlabs.ch",
      },
    },
  },
} as const;
