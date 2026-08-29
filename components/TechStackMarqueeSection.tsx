"use client";

import React from "react";

interface AppLogo {
  name: string;
  icon: React.ReactNode;
}

const row1Logos: AppLogo[] = [
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Google">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#10a37f" aria-label="OpenAI">
        <path d="M22.28 9.9c-.27-1.98-1.57-3.66-3.44-4.46a7.84 7.84 0 00-6.12-.41 7.85 7.85 0 00-4.54-3.32 7.9 7.9 0 00-6.52 1.48A7.88 7.88 0 00.32 8.35a7.86 7.86 0 001.32 6.55 7.85 7.85 0 00-.4 6.13 7.9 7.9 0 003.32 4.54 7.88 7.88 0 006.52 1.48 7.86 7.86 0 005.16-2.91 7.85 7.85 0 006.04-1.32 7.88 7.88 0 004.54-3.32 7.9 7.9 0 001.48-6.52 7.86 7.86 0 00-2.02-3.08zm-8.8 11.8a5.87 5.87 0 01-4.2-.35l.2-.12 3.5-2.02a1 1 0 00.5-.87v-4.94l1.48.86v4.06a5.9 5.9 0 01-1.48 3.38zm-8.2-3.7a5.88 5.88 0 01-.75-4.14l.2.12 3.5 2.02a1 1 0 001 0l4.28-2.47v1.72l-3.52 2.03a5.9 5.9 0 01-4.71.72zm-2.08-8.2a5.88 5.88 0 013.45-2.43v4.25a1 1 0 00.5.87l4.28 2.47-1.48.86-3.52-2.03a5.9 5.9 0 01-3.23-3.99zm14.62 3.1l-4.28-2.47 1.48-.86 3.52 2.03a5.9 5.9 0 013.23 3.99 5.88 5.88 0 01-3.45 2.43v-4.25a1 1 0 00-.5-.87zm2.08 5.1a5.88 5.88 0 01.75 4.14l-.2-.12-3.5-2.02a1 1 0 00-1 0l-4.28 2.47v-1.72l3.52-2.03a5.9 5.9 0 014.71-.72zm-7.6-2.58l-1.92-1.11 1.92-1.11 1.92 1.11-1.92 1.11zm-2.3-4.26a5.87 5.87 0 014.2.35l-.2.12-3.5 2.02a1 1 0 00-.5.87v4.94l-1.48-.86v-4.06a5.9 5.9 0 011.48-3.38z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Notion">
        <rect width="24" height="24" rx="4" fill="#ffffff" />
        <path
          d="M6.3 5.4c.5.4.7.4 1.7.3l8-.6c.8-.1 1-.4 1-.9L17 3.8H6.2v1.6zm-.1 1.4v10.5c0 .8.3 1.1 1.1 1.1l9.7-.7c.8-.1 1.1-.5 1.1-1.1V6.5l-11.9.3zm8.6 1.8l.1 6.6-1.8-.1V9.2l-3.1 5.7-2-.1V8l1.8.1v5.5l3.1-5.6 2-.1z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    name: "Asana",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Asana">
        <circle cx="12" cy="7.2" r="3.8" fill="#F06A6A" />
        <circle cx="6.2" cy="16.8" r="3.8" fill="#F06A6A" />
        <circle cx="17.8" cy="16.8" r="3.8" fill="#F06A6A" />
      </svg>
    ),
  },
  {
    name: "Monday.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Monday.com">
        <rect x="3.5" y="14" width="4.5" height="6.5" rx="2.25" fill="#F65B5B" />
        <rect x="9.75" y="9" width="4.5" height="11.5" rx="2.25" fill="#FBBC05" />
        <rect x="16" y="4" width="4.5" height="16.5" rx="2.25" fill="#00CA72" />
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Google Analytics">
        <rect x="3" y="14" width="4.5" height="7" rx="2.25" fill="#F9AB00" />
        <rect x="9.75" y="8" width="4.5" height="13" rx="2.25" fill="#E37400" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="2.25" fill="#F29900" />
      </svg>
    ),
  },
  {
    name: "Zapier",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#FF4A00" aria-label="Zapier">
        <path d="M10.8 1.5h2.4v8.2h-2.4V1.5zm0 12.8h2.4v8.2h-2.4v-8.2zm9.1-7.7l1.7 1.7-5.8 5.8-1.7-1.7 5.8-5.8zM4.1 18.5l1.7 1.7 5.8-5.8-1.7-1.7-5.8 5.8zm18.4-5.3v-2.4h-8.2v2.4h8.2zM9.7 10.8v2.4H1.5v-2.4h8.2zm10.2 7.7l-1.7 1.7-5.8-5.8 1.7-1.7 5.8 5.8zM5.8 4.1L4.1 5.8l5.8 5.8 1.7-1.7-5.8-5.8z" />
      </svg>
    ),
  },
  {
    name: "Trello",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Trello">
        <rect width="24" height="24" rx="5" fill="#0079BF" />
        <rect x="4.5" y="4.5" width="6.5" height="13" rx="1.5" fill="#FFFFFF" />
        <rect x="13" y="4.5" width="6.5" height="8.5" rx="1.5" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Dropbox",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#0061FF" aria-label="Dropbox">
        <path d="M6 3l6 3.9-6 4L0 7 6 3zm12 0l6 4-6 3.9-6-4 6-3.9zM0 14.9l6-4 6 3.9-6 4-6-3.9zm24 0l-6 3.9-6-4 6-3.9 6 4zM6 19.8l6-3.9 6 3.9-6 4-6-4z" />
      </svg>
    ),
  },
  {
    name: "ClickUp",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="ClickUp">
        <defs>
          <linearGradient id="clickup-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B68EE" />
            <stop offset="100%" stopColor="#FF007F" />
          </linearGradient>
        </defs>
        <path
          d="M3.5 17.5l2.2-1.8c1.7 2.1 3.9 3.3 6.3 3.3 2.4 0 4.6-1.2 6.3-3.3l2.2 1.8c-2.2 2.7-5.2 4.3-8.5 4.3-3.3 0-6.3-1.6-8.5-4.3z"
          fill="url(#clickup-grad-1)"
        />
        <path
          d="M12 6.5l-5.3 5.3 1.8 1.8L12 10.1l3.5 3.5 1.8-1.8L12 6.5z"
          fill="#7B68EE"
        />
      </svg>
    ),
  },
  {
    name: "Shopify",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Shopify">
        <path
          d="M19.8 6.2c-.1-.3-.3-.4-.6-.4h-2.1c-.2-.9-.7-2.6-2.1-3.6-1.3-.9-2.7-.9-3.2-.8-.4.1-.7.4-.9.7-.5 1-.4 2.4-.2 3.7H7.9c-.3 0-.5.2-.6.4L4 21.2c0 .2 0 .4.2.5.1.1.3.2.5.2h14.6c.2 0 .4-.1.5-.2.2-.1.2-.3.2-.5L19.8 6.2zM12.6 3.5c1 0 1.8 1.1 2.2 2.3H11.2c.2-1 .7-2.3 1.4-2.3zm-1 8.8c.4-.3 1-.5 1.7-.5 1.2 0 2.1.8 2.1 2 0 1.6-1.6 2.3-2.5 2.7-.8.3-1.1.6-1.1 1 0 .5.4.9 1.1.9.7 0 1.2-.3 1.6-.6l.4.9c-.5.4-1.2.7-2 .7-1.4 0-2.3-.9-2.3-2.1 0-1.4 1.3-2.1 2.3-2.6.8-.4 1.3-.7 1.3-1.2 0-.5-.4-.8-1-.8-.6 0-1.1.3-1.5.5l-.6-.9z"
          fill="#95BF47"
        />
      </svg>
    ),
  },
  {
    name: "Linear",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Linear">
        <defs>
          <linearGradient id="linear-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5E6AD2" />
            <stop offset="100%" stopColor="#8A94EA" />
          </linearGradient>
        </defs>
        <path
          d="M3 12a9 9 0 0 1 15.36-6.36L4.64 19.36A8.96 8.96 0 0 1 3 12z"
          fill="url(#linear-grad-1)"
        />
        <path
          d="M12 21a9 9 0 0 1-6.36-2.64L19.36 4.64A8.96 8.96 0 0 1 21 12a9 9 0 0 1-9 9z"
          fill="#5E6AD2"
        />
      </svg>
    ),
  },
];

const row2Logos: AppLogo[] = [
  {
    name: "Shopify",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Shopify">
        <path
          d="M19.8 6.2c-.1-.3-.3-.4-.6-.4h-2.1c-.2-.9-.7-2.6-2.1-3.6-1.3-.9-2.7-.9-3.2-.8-.4.1-.7.4-.9.7-.5 1-.4 2.4-.2 3.7H7.9c-.3 0-.5.2-.6.4L4 21.2c0 .2 0 .4.2.5.1.1.3.2.5.2h14.6c.2 0 .4-.1.5-.2.2-.1.2-.3.2-.5L19.8 6.2zM12.6 3.5c1 0 1.8 1.1 2.2 2.3H11.2c.2-1 .7-2.3 1.4-2.3zm-1 8.8c.4-.3 1-.5 1.7-.5 1.2 0 2.1.8 2.1 2 0 1.6-1.6 2.3-2.5 2.7-.8.3-1.1.6-1.1 1 0 .5.4.9 1.1.9.7 0 1.2-.3 1.6-.6l.4.9c-.5.4-1.2.7-2 .7-1.4 0-2.3-.9-2.3-2.1 0-1.4 1.3-2.1 2.3-2.6.8-.4 1.3-.7 1.3-1.2 0-.5-.4-.8-1-.8-.6 0-1.1.3-1.5.5l-.6-.9z"
          fill="#95BF47"
        />
      </svg>
    ),
  },
  {
    name: "Linear",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Linear">
        <defs>
          <linearGradient id="linear-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5E6AD2" />
            <stop offset="100%" stopColor="#8A94EA" />
          </linearGradient>
        </defs>
        <path
          d="M3 12a9 9 0 0 1 15.36-6.36L4.64 19.36A8.96 8.96 0 0 1 3 12z"
          fill="url(#linear-grad-2)"
        />
        <path
          d="M12 21a9 9 0 0 1-6.36-2.64L19.36 4.64A8.96 8.96 0 0 1 21 12a9 9 0 0 1-9 9z"
          fill="#5E6AD2"
        />
      </svg>
    ),
  },
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Google">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
  {
    name: "Zapier",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#FF4A00" aria-label="Zapier">
        <path d="M10.8 1.5h2.4v8.2h-2.4V1.5zm0 12.8h2.4v8.2h-2.4v-8.2zm9.1-7.7l1.7 1.7-5.8 5.8-1.7-1.7 5.8-5.8zM4.1 18.5l1.7 1.7 5.8-5.8-1.7-1.7-5.8 5.8zm18.4-5.3v-2.4h-8.2v2.4h8.2zM9.7 10.8v2.4H1.5v-2.4h8.2zm10.2 7.7l-1.7 1.7-5.8-5.8 1.7-1.7 5.8 5.8zM5.8 4.1L4.1 5.8l5.8 5.8 1.7-1.7-5.8-5.8z" />
      </svg>
    ),
  },
  {
    name: "Notion",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Notion">
        <rect width="24" height="24" rx="4" fill="#ffffff" />
        <path
          d="M6.3 5.4c.5.4.7.4 1.7.3l8-.6c.8-.1 1-.4 1-.9L17 3.8H6.2v1.6zm-.1 1.4v10.5c0 .8.3 1.1 1.1 1.1l9.7-.7c.8-.1 1.1-.5 1.1-1.1V6.5l-11.9.3zm8.6 1.8l.1 6.6-1.8-.1V9.2l-3.1 5.7-2-.1V8l1.8.1v5.5l3.1-5.6 2-.1z"
          fill="#000000"
        />
      </svg>
    ),
  },
  {
    name: "Asana",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Asana">
        <circle cx="12" cy="7.2" r="3.8" fill="#F06A6A" />
        <circle cx="6.2" cy="16.8" r="3.8" fill="#F06A6A" />
        <circle cx="17.8" cy="16.8" r="3.8" fill="#F06A6A" />
      </svg>
    ),
  },
  {
    name: "Monday.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Monday.com">
        <rect x="3.5" y="14" width="4.5" height="6.5" rx="2.25" fill="#F65B5B" />
        <rect x="9.75" y="9" width="4.5" height="11.5" rx="2.25" fill="#FBBC05" />
        <rect x="16" y="4" width="4.5" height="16.5" rx="2.25" fill="#00CA72" />
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Google Analytics">
        <rect x="3" y="14" width="4.5" height="7" rx="2.25" fill="#F9AB00" />
        <rect x="9.75" y="8" width="4.5" height="13" rx="2.25" fill="#E37400" />
        <rect x="16.5" y="3" width="4.5" height="18" rx="2.25" fill="#F29900" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#10a37f" aria-label="OpenAI">
        <path d="M22.28 9.9c-.27-1.98-1.57-3.66-3.44-4.46a7.84 7.84 0 00-6.12-.41 7.85 7.85 0 00-4.54-3.32 7.9 7.9 0 00-6.52 1.48A7.88 7.88 0 00.32 8.35a7.86 7.86 0 001.32 6.55 7.85 7.85 0 00-.4 6.13 7.9 7.9 0 003.32 4.54 7.88 7.88 0 006.52 1.48 7.86 7.86 0 005.16-2.91 7.85 7.85 0 006.04-1.32 7.88 7.88 0 004.54-3.32 7.9 7.9 0 001.48-6.52 7.86 7.86 0 00-2.02-3.08zm-8.8 11.8a5.87 5.87 0 01-4.2-.35l.2-.12 3.5-2.02a1 1 0 00.5-.87v-4.94l1.48.86v4.06a5.9 5.9 0 01-1.48 3.38zm-8.2-3.7a5.88 5.88 0 01-.75-4.14l.2.12 3.5 2.02a1 1 0 001 0l4.28-2.47v1.72l-3.52 2.03a5.9 5.9 0 01-4.71.72zm-2.08-8.2a5.88 5.88 0 013.45-2.43v4.25a1 1 0 00.5.87l4.28 2.47-1.48.86-3.52-2.03a5.9 5.9 0 01-3.23-3.99zm14.62 3.1l-4.28-2.47 1.48-.86 3.52 2.03a5.9 5.9 0 013.23 3.99 5.88 5.88 0 01-3.45 2.43v-4.25a1 1 0 00-.5-.87zm2.08 5.1a5.88 5.88 0 01.75 4.14l-.2-.12-3.5-2.02a1 1 0 00-1 0l-4.28 2.47v-1.72l3.52-2.03a5.9 5.9 0 014.71-.72zm-7.6-2.58l-1.92-1.11 1.92-1.11 1.92 1.11-1.92 1.11zm-2.3-4.26a5.87 5.87 0 014.2.35l-.2.12-3.5 2.02a1 1 0 00-.5.87v4.94l-1.48-.86v-4.06a5.9 5.9 0 011.48-3.38z" />
      </svg>
    ),
  },
  {
    name: "Trello",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="Trello">
        <rect width="24" height="24" rx="5" fill="#0079BF" />
        <rect x="4.5" y="4.5" width="6.5" height="13" rx="1.5" fill="#FFFFFF" />
        <rect x="13" y="4.5" width="6.5" height="8.5" rx="1.5" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "Dropbox",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" fill="#0061FF" aria-label="Dropbox">
        <path d="M6 3l6 3.9-6 4L0 7 6 3zm12 0l6 4-6 3.9-6-4 6-3.9zM0 14.9l6-4 6 3.9-6 4-6-3.9zm24 0l-6 3.9-6-4 6-3.9 6 4zM6 19.8l6-3.9 6 3.9-6 4-6-4z" />
      </svg>
    ),
  },
  {
    name: "ClickUp",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-label="ClickUp">
        <defs>
          <linearGradient id="clickup-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B68EE" />
            <stop offset="100%" stopColor="#FF007F" />
          </linearGradient>
        </defs>
        <path
          d="M3.5 17.5l2.2-1.8c1.7 2.1 3.9 3.3 6.3 3.3 2.4 0 4.6-1.2 6.3-3.3l2.2 1.8c-2.2 2.7-5.2 4.3-8.5 4.3-3.3 0-6.3-1.6-8.5-4.3z"
          fill="url(#clickup-grad-2)"
        />
        <path
          d="M12 6.5l-5.3 5.3 1.8 1.8L12 10.1l3.5 3.5 1.8-1.8L12 6.5z"
          fill="#7B68EE"
        />
      </svg>
    ),
  },
];

function IconBox({ item }: { item: AppLogo }) {
  return (
    <div
      className="w-16 h-16 sm:w-20 sm:h-20 min-w-[64px] sm:min-w-[80px] bg-[#1c1f26] border border-zinc-700/60 rounded-2xl flex items-center justify-center p-3 hover:border-[#0acd00] transition-all duration-300 hover:scale-105 shadow-md group shrink-0 cursor-pointer select-none"
      title={item.name}
    >
      <div className="flex items-center justify-center w-full h-full transform group-hover:scale-110 transition-transform duration-300">
        {item.icon}
      </div>
    </div>
  );
}

export default function TechStackMarqueeSection() {
  const duplicatedRow1 = [...row1Logos, ...row1Logos, ...row1Logos];
  const duplicatedRow2 = [...row2Logos, ...row2Logos, ...row2Logos];

  return (
    <section
      className="w-full bg-gradient-to-b from-[#0a0c0e] via-[#14171d] to-[#0a0c0e] pt-16 sm:pt-20 pb-20 sm:pb-24 px-4 overflow-hidden border-t border-zinc-800"
      aria-label="Powerful Tech Ecosystem"
    >
      <div className="max-w-7xl mx-auto mb-12 sm:mb-16 text-center">
        {/* Eyebrow Badge: White Pill with Green Star */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200/20 shadow-sm mb-6 sm:mb-8">
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 text-[#0acd00] fill-[#0acd00]"
            aria-hidden="true"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <span className="text-[#0acd00] font-semibold tracking-wider text-xs uppercase font-['Montserrat']">
            POWERFUL TECH ECOSYSTEM
          </span>
        </div>

        {/* Headline: Full Syne font-display with generous leading */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] text-center max-w-5xl mx-auto leading-snug sm:leading-[1.25] tracking-tight px-2">
          <span className="text-white">
            Delivering Bespoke Digital Solutions That Empower{" "}
          </span>
          <span className="text-zinc-500">
            Modern Businesses To Scale, Connect, And Lead.
          </span>
        </h2>
      </div>

      {/* Dual-Row Marquee Tracks */}
      <div className="flex flex-col gap-5 sm:gap-6 w-full max-w-[100vw]">
        {/* Top Row: Scrolls LEFT */}
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track-left">
            {duplicatedRow1.map((item, index) => (
              <IconBox key={`row1-${item.name}-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Bottom Row: Scrolls RIGHT */}
        <div className="tech-marquee-wrapper">
          <div className="tech-marquee-track-right">
            {duplicatedRow2.map((item, index) => (
              <IconBox key={`row2-${item.name}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
