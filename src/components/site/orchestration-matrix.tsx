export type OrchestrationColumn = {
  id: string;
  label: string;
};

export type OrchestrationRow = {
  title: string;
  detail: string;
  assignments: Record<string, string>;
};

type OrchestrationMatrixProps = {
  columns: OrchestrationColumn[];
  rows: OrchestrationRow[];
  className?: string;
};

export function OrchestrationMatrix({
  columns,
  rows,
  className,
}: OrchestrationMatrixProps) {
  return (
    <div className={className}>
      <div className="hidden overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(8,14,24,0.78)] xl:block">
        <div
          className="grid border-b border-white/8 bg-white/[0.02]"
          style={{
            gridTemplateColumns: `minmax(280px,1.35fr) repeat(${columns.length}, minmax(0, 1fr))`,
          }}
        >
          <div className="px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-slate-500">
            Workflow stage
          </div>
          {columns.map((column) => (
            <div
              key={column.id}
              className="px-4 py-4 text-center text-[11px] uppercase tracking-[0.18em] text-slate-500"
            >
              {column.label}
            </div>
          ))}
        </div>
        {rows.map((row) => (
          <div
            key={row.title}
            className="grid border-b border-white/8 last:border-b-0"
            style={{
              gridTemplateColumns: `minmax(280px,1.35fr) repeat(${columns.length}, minmax(0, 1fr))`,
            }}
          >
            <div className="px-6 py-5">
              <h3 className="text-lg font-semibold text-white">{row.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300/70">{row.detail}</p>
            </div>
            {columns.map((column) => {
              const assignment = row.assignments[column.id];

              return (
                <div
                  key={`${row.title}-${column.id}`}
                  className="flex items-center justify-center border-l border-white/8 px-4 py-5"
                >
                  {assignment ? (
                    <div className="rounded-full border border-[color:var(--color-electric-blue)]/20 bg-[color:var(--color-electric-blue)]/10 px-3 py-2 text-center text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]">
                      {assignment}
                    </div>
                  ) : (
                    <div className="h-2.5 w-2.5 rounded-full bg-white/8" />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:hidden">
        {rows.map((row) => (
          <article key={row.title} className="section-shell">
            <h3 className="text-xl font-semibold text-white">{row.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300/72">{row.detail}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {columns.map((column) =>
                row.assignments[column.id] ? (
                  <span
                    key={`${row.title}-${column.id}`}
                    className="rounded-full border border-[color:var(--color-electric-blue)]/20 bg-[color:var(--color-electric-blue)]/10 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-[color:var(--color-data-cyan)]"
                  >
                    {column.label}: {row.assignments[column.id]}
                  </span>
                ) : null,
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
