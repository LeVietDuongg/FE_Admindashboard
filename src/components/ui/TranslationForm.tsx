'use client';

import { useEffect, useMemo, useState } from 'react';

interface TranslationFormProps {
  labelSource?: string;
  labelTarget?: string;
  sourceLang?: string; // e.g., 'vi'
  targetLang?: string; // e.g., 'en'
  valueSource?: string;
  valueTarget?: string;
  onChange?: (values: { source: string; target: string }) => void;
  autoTranslate?: boolean;
}

export default function TranslationForm({
  labelSource = 'Nội dung gốc',
  labelTarget = 'Bản dịch',
  sourceLang = 'vi',
  targetLang = 'en',
  valueSource = '',
  valueTarget = '',
  onChange,
  autoTranslate = true,
}: TranslationFormProps) {
  const [sourceText, setSourceText] = useState<string>(valueSource);
  const [targetText, setTargetText] = useState<string>(valueTarget);

  useEffect(() => {
    setSourceText(valueSource);
  }, [valueSource]);

  useEffect(() => {
    setTargetText(valueTarget);
  }, [valueTarget]);

  useEffect(() => {
    onChange?.({ source: sourceText, target: targetText });
  }, [sourceText, targetText, onChange]);

  const debouncedSource = useDebounce(sourceText, 350);

  useEffect(() => {
    if (!autoTranslate) return;
    if (!debouncedSource) {
      setTargetText('');
      return;
    }
    let cancelled = false;
    const translate = async () => {
      try {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: debouncedSource, sourceLang, targetLang }),
        });
        const data = await res.json();
        if (!cancelled && typeof data?.text === 'string') {
          setTargetText(data.text);
        }
      } catch {
        // swallow; keep last value
      }
    };
    translate();
    return () => {
      cancelled = true;
    };
  }, [debouncedSource, sourceLang, targetLang, autoTranslate]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">
          {labelSource} ({sourceLang.toUpperCase()})
        </label>
        <textarea
          className="min-h-36 resize-y rounded-md border border-gray-300 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          placeholder="Nhập nội dung..."
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-gray-700">
          {labelTarget} ({targetLang.toUpperCase()})
        </label>
        <textarea
          className="min-h-36 resize-y rounded-md border border-gray-300 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          value={targetText}
          onChange={(e) => setTargetText(e.target.value)}
          placeholder="Bản dịch..."
        />
        <div className="mt-2 flex items-center justify-end gap-2">
          <button
            type="button"
            className="rounded-md border px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => {
              setSourceText(targetText);
            }}
          >
            Swap to Source
          </button>
          <button
            type="button"
            className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
            onClick={async () => {
              try {
                const res = await fetch('/api/translate', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ text: sourceText, sourceLang, targetLang }),
                });
                const data = await res.json();
                if (typeof data?.text === 'string') setTargetText(data.text);
              } catch {}
            }}
          >
            Translate
          </button>
        </div>
      </div>
    </div>
  );
}

function useDebounce<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);
  return debounced;
}


