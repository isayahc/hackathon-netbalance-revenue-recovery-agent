"use client";

import { ArrowSquareOutIcon, CheckCircleIcon, FilePdfIcon } from "@phosphor-icons/react";
import { useState } from "react";

type DocumentItem = { label: string; fileName: string };

export function DocumentsBrowser({ documents }: { documents: DocumentItem[] }) {
  const [selected, setSelected] = useState(documents[6] ?? documents[0]);

  return (
    <div className="document-workspace">
      <section className="document-list panel">
        <div className="document-list-heading"><span>{documents.length} source files</span><strong><CheckCircleIcon size={16} weight="fill" /> Parsed</strong></div>
        {documents.map((document) => (
          <button key={document.fileName} className={selected.fileName === document.fileName ? "selected" : ""} onClick={() => setSelected(document)} type="button">
            <FilePdfIcon size={21} weight="duotone" />
            <span><strong>{document.label}</strong><small>{document.fileName}</small></span>
          </button>
        ))}
      </section>
      <section className="document-preview panel">
        <header><div><p className="overline">Document preview</p><h2>{selected.label}</h2></div><a href={`/evidence/${selected.fileName}`} target="_blank" rel="noreferrer">Open PDF <ArrowSquareOutIcon size={16} /></a></header>
        <iframe key={selected.fileName} title={`${selected.label} PDF`} src={`/evidence/${selected.fileName}#toolbar=0&navpanes=0`} />
      </section>
    </div>
  );
}
