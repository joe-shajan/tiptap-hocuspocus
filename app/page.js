"use client";

import dynamic from "next/dynamic";
import React from "react";

const RichTextEditor = dynamic(() => import("./components/RichTextEditor"), {
  ssr: false,
});

export default function EditorPage() {
  return <RichTextEditor />;
}
